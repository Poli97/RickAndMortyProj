import {Location} from 'rickmortyapi/dist/interfaces';

export async function getLocationByUrl(
  locationUrl: string,
): Promise<Location | undefined> {
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

export async function getOriginByUrl(
  originUrl: string,
): Promise<Location | undefined> {
  return new Promise((resolve, reject) => {
    fetch(`${originUrl}`)
      .then(result => {
        if (result.ok) {
          console.log('getOriginByUrl SUCCESS', result);
          result
            .json()
            .then(json => {
              const location = json as Location;
              console.log(location);
              resolve(location);
            })
            .catch(err => {
              console.log('getOriginByUrl json() ERROR ', err);
              Promise.reject(err);
            });
        } else {
          console.log(result);
          console.log('getOriginByUrl result ERROR. status:', result.status);
          reject();
        }
      })
      .catch(err => {
        console.log('getOriginByUrl fetch ERROR ', err);
        reject(err);
      });
  });
}
