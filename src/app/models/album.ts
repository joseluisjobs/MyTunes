import {Song} from './song';
export class Album{
    id: number;
    name: string;
    artistName: string;
    price: number;
    genres: string;
    score: number;
    date: Date;
    descripcion: string;
    image: string;
    songList: Array<Song>;
    purchased: boolean;
}
