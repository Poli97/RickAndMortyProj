import {Episode} from 'rickmortyapi/dist/interfaces';

/**
 * Get the name of the given `chapterUrl` chapter. If a chapter does not exists or there is an error with the call, an empty string `""` is returned. So the promise is never rejected, it is always resolved.
 * @param chapterUrl the url of the chapter
 * @returns A string with the name of the chapter
 */
async function getChapterNameByUrl(chapterUrl: string): Promise<string> {
  //This promise is always resolved because it is later used in a Promse.all([promises]), which is rejected even if only one of its promises is rejected. So to avoid failing the whole `getChaptersNamesByUrls` call for only one error, I handled errors in this way.
  return new Promise((resolve, _) => {
    fetch(`${chapterUrl}`)
      .then(result => {
        if (result.ok) {
          result
            .json()
            .then(json => {
              const chapter = json as Episode;
              resolve(chapter.name);
            })
            .catch(err => {
              console.log('getChapterByUrl json() ERROR ', err);
              resolve('');
            });
        } else {
          console.log(result);
          console.log('getChapterByUrl result ERROR. status:', result.status);
          resolve('');
        }
      })
      .catch(err => {
        console.log('getChapterByUrl fetch ERROR ', err);
        resolve('');
      });
  });
}

/**
 * Get the names of all of the given `chapterUrls` chapters.
 * @param chaptersUrls An array of chapters urls.
 * @returns Return an array of strings containing the names of all the chapter urls passed.
 */
export async function getChaptersNamesByUrls(
  chaptersUrls: string[],
): Promise<string[]> {
  let promises: Promise<string>[] = [];

  for (let url of chaptersUrls) {
    promises.push(getChapterNameByUrl(url));
  }

  return new Promise(async (resolve, reject) => {
    Promise.all(promises)
      .then(res => {
        console.log(res);
        resolve(res);
      })
      .catch(err => {
        console.log('getChaptersNamesByUrls ERROR ', err);
        reject(err);
      });
  });
}
