export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IArtist {
  id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
  bandsIds: string[];
  instruments: string[];
}

export interface IGenre {
  id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}

export interface IBand {
  id: string;
  name: string;
  origin: string;
  members: IMember[];
  website: string;
  genresIds: string[];
}

export interface IMember {
  artist: string;
  instrument: string;
  years: string;
}

export interface IAlbum {
  id: string;
  name: string;
  released: number;
  artistsIds: string[];
  bandsIds: string[];
  tracksIds: string[];
  genresIds: string[];
  image: string;
}

export interface ITrack {
  id: string;
  title: string;
  albumId: string;
  artistsIds: string[];
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}
