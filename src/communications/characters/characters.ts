import {Character, Info} from 'rickmortyapi/dist/interfaces';
import {baseUrl} from '../configs';

/**
 * Get all the characters in the first page (limited to 20)
 * @returns All the 20 characters in the first pagination
 */
export async function getAllCharacters(): Promise<Character[]> {
  const endpoint = '/character';

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${endpoint}`)
      .then(result => {
        if (result.ok) {
          console.log('getAllCharacters SUCCESS', result);
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
 * Get all the characters (limited to 20) in the given `pageId` page. Usefull for pagination pourposes.
 * @param pageId the number of the page
 * @returns The 20 characters of the given `pageId` page
 */
export async function getAllCharactersInPageId(
  pageId: number,
): Promise<Character[]> {
  const endpoint = '/character?page=' + pageId.toString();

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${endpoint}`)
      .then(result => {
        if (result.ok) {
          console.log('getAllCharactersInPageId SUCCESS', result);
          result
            .json()
            .then(json => {
              const response = json as Info<Character[]>;
              const characters = response.results || [];
              console.log(response, characters);
              resolve(characters);
            })
            .catch(err => {
              console.log('getAllCharactersInPageId json() ERROR ', err);
              Promise.reject(err);
            });
        } else {
          console.log(result);
          console.log(
            'getAllCharactersInPageId result ERROR. status:',
            result.status,
          );
          reject();
        }
      })
      .catch(err => {
        console.log('getAllCharactersInPageId fetch ERROR ', err);
        reject(err);
      });
  });
}

/**
 * Get character info by `id`
 * @param id the id of the character wanted
 * @returns Promise with the character info
 */
export async function getCharacterById(
  id: number,
): Promise<Character | undefined> {
  const endpoint = '/character/' + id.toString();

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${endpoint}`)
      .then(result => {
        if (result.ok) {
          console.log('getCharacterById SUCCESS', result);
          result
            .json()
            .then(json => {
              const character = json as Character;
              console.log(character);
              resolve(character);
            })
            .catch(err => {
              console.log('getCharacterById json() ERROR ', err);
              Promise.reject(err);
            });
        } else {
          console.log(result);
          console.log('getCharacterById result ERROR. status:', result.status);
          reject();
        }
      })
      .catch(err => {
        console.log('getCharacterById fetch ERROR ', err);
        reject(err);
      });
  });
}
