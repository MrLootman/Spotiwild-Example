export interface Data {
  titreImg: string;
  genre: string;
  Artistes: Artist[];
}

export interface Artist {
  id: number;
  name: string;
  country: string;
  imgSrc: string;
  description: string;
  albumDescription?: string;
  albums: Album[];
}

export interface Album {
  albumName: string;
  albumImg: string;
  description: string;
  songs: string[];
}
