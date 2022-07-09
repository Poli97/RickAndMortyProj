import {Character, Info} from 'rickmortyapi/dist/interfaces';
import {baseUrl} from '../configs';

/**
 * Get all the characters in the first page (limited to 20)
 * @returns a promise with all the 20 characters in the first pagination
 */
export async function getAllCharacters(): Promise<Character[]> {
  const endpoint = '/character';

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${endpoint}`)
      .then(result => {
        if (result.ok) {
          console.log('Chiamata a buon fine');
          console.log(result);
          result
            .json()
            .then(json => {
              const response = json as Info<Character[]>;
              const characters = response.results || [];
              console.log(response, characters);
              resolve(characters);
            })
            .catch(err => {
              console.log('getAllCharacters json() ERROR ', err);
              Promise.reject(err);
            });
        } else {
          console.log(result);
          console.log('getAllCharacters result ERROR. status:', result.status);
          reject();
        }
      })
      .catch(err => {
        console.log('getAllCharacters fetch ERROR ', err);
        reject(err);
      });
  });
}

/**
 * Get all the characters in the given page (limited to 20). Usefull for pagination pourposes.
 * @param pageId the number of the page
 * @returns A promise containing 20 characters of the given 'pageId' page
 */
export async function getAllCharactersInPageId(
  pageId: number,
): Promise<Character[]> {
  const endpoint = '/character?page=' + pageId.toString();

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${endpoint}`)
      .then(result => {
        if (result.ok) {
          console.log('Chiamata a buon fine');
          console.log(result);
          result
            .json()
            .then(json => {
              const response = json as Info<Character[]>;
              const characters = response.results || [];
              console.log(response, characters);
              resolve(characters);
            })
            .catch(err => {
              console.log('getAllCharacters json() ERROR ', err);
              Promise.reject(err);
            });
        } else {
          console.log(result);
          console.log('getAllCharacters result ERROR. status:', result.status);
          reject();
        }
      })
      .catch(err => {
        console.log('getAllCharacters fetch ERROR ', err);
        reject(err);
      });
  });
}
