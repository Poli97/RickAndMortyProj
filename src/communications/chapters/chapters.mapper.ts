import {Episode} from 'rickmortyapi/dist/interfaces';
import {IEpisodeClient} from './chapters.interface';

/**
 * Map the episode form the server structer to the client structure, with only `episode` and `name` needed
 * @param episode Episode with server structure
 * @returns chapter with client `IEpisodeClient` structurr
 */
export const chapterMapper = (episode: Episode): IEpisodeClient => {
  let mappedChapter: IEpisodeClient = {
    episode: episode.episode,
    name: episode.name,
  };

  return mappedChapter;
};

export const emptyEpisode: IEpisodeClient = {
  episode: '',
  name: '',
};
