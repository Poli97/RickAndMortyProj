import {Episode} from 'rickmortyapi/dist/interfaces';

export async function getChapterByUrl(
  chapterUrl: string,
): Promise<Episode | undefined> {
  return new Promise((resolve, reject) => {
    fetch(`${chapterUrl}`)
      .then(result => {
        if (result.ok) {
          console.log('getChapterByUrl SUCCESS', result);
          result
            .json()
            .then(json => {
              const location = json as Episode;
              console.log(location);
              resolve(location);
            })
            .catch(err => {
              console.log('getChapterByUrl json() ERROR ', err);
              Promise.reject(err);
            });
        } else {
          console.log(result);
          console.log('getChapterByUrl result ERROR. status:', result.status);
          reject();
        }
      })
      .catch(err => {
        console.log('getChapterByUrl fetch ERROR ', err);
        reject(err);
      });
  });
}

export async function getChaptersNameByUrls(
  chaptersUrls: string[],
): Promise<string> {
  let promises: Promise<Episode | undefined>[] = [];

  for (let url of chaptersUrls) {
    promises.push(getChapterByUrl(url));
  }

  return new Promise(async (resolve, reject) => {
    let names: string[] = [];
    Promise.all(promises).then(res => {
      console.log(res);
    });
  });
}
