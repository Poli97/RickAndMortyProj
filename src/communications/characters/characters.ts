import {Character, Info} from 'rickmortyapi/dist/interfaces';
import {baseUrl} from '../configs';
import {IHomeList} from './character.interface';

/**
 * Get all the characters in the first page (limited to 20)
 * @returns All the 20 characters in the first pagination
 */
export async function getAllCharacters(): Promise<IHomeList> {
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
              const nextPage = response.info ? response.info.next : null;

              const homeList: IHomeList = {
                nextPage: nextPage,
                characters: characters,
              };
              console.log(response, characters);
              resolve(homeList);
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
 * Get all the characters (limited to 20) in the given `pageUrl` page. Usefull for pagination pourposes.
 * @param pageUrl the url of the page
 * @returns The 20 characters of the given `pageUrl` page
 */
export async function getAllCharactersByPageUrl(
  pageUrl: string,
): Promise<IHomeList> {
  return new Promise((resolve, reject) => {
    fetch(`${pageUrl}`)
      .then(result => {
        if (result.ok) {
          console.log('getAllCharactersByPageUrl SUCCESS', result);
          result
            .json()
            .then(json => {
              const response = json as Info<Character[]>;
              const characters = response.results || [];
              const nextPage = response.info ? response.info.next : null;

              const nextHomeList: IHomeList = {
                nextPage: nextPage,
                characters: characters,
              };
              console.log(response, characters);
              resolve(nextHomeList);
            })
            .catch(err => {
              console.log('getAllCharactersByPageUrl json() ERROR ', err);
              Promise.reject(err);
            });
        } else {
          console.log(result);
          console.log(
            'getAllCharactersByPageUrl result ERROR. status:',
            result.status,
          );
          reject();
        }
      })
      .catch(err => {
        console.log('getAllCharactersByPageUrl fetch ERROR ', err);
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
