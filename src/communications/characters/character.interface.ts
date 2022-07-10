import {Character} from 'rickmortyapi/dist/interfaces';

export interface IHomeList {
  nextPage: string | null;
  characters: Character[];
}
