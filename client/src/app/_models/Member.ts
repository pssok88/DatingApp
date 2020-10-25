import { Photo } from './Photo'

export interface Member {
    id: number;
    username: string;
    photoUrl: string;
    age: string;
    knownAs: string;
    createdDate: Date;
    lastActive: Date;
    gender: string;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
  }