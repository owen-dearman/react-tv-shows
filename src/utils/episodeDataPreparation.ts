import { IEpisode } from "./IEpisode";

export function episodeDataPreparation(episodeData: IEpisode[]): IEpisode[] {
    for (const episode of episodeData){
    //episode.summary.substring(3, episode.summary.length-7)
    episode.summary = episode.summary.replace(/<\/?[^>]+(>|$)/g, "");
    }
    return episodeData
}