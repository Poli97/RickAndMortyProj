import {Location} from 'rickmortyapi/dist/interfaces';

/**
 * Get the location infos of the passed `locationUrl`
 * @param locationUrl the url of the location to get
 * @returns Info of the location
 */
export async function getLocationByUrl(locationUrl: string): Promise<Location> {
  return new Promise((resolve, reject) => {
    fetch(`${locationUrl}`)
      .then(result => {
        if (result.ok) {
          console.log('getLocationByUrl SUCCESS', result);
          result
            .json()
            .then(json => {
              const location = json as Location;
              console.log(location);
              resolve(location);
            })
            .catch(err => {
              console.log('getLocationByUrl json() ERROR ', err);
              Promise.reject(err);
            });
        } else {
          console.log(result);
          console.log('getLocationByUrl result ERROR. status:', result.status);
          reject();
        }
      })
      .catch(err => {
        console.log('getLocationByUrl fetch ERROR ', err);
        reject(err);
      });
  });
}
