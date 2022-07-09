import { gql } from 'apollo-server';

const bandSchema = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    artist: String
    instrument: String
    years: String
  }
`;

/*
  interface Band {
    _id: string;
    name: string;
    origin: string;
    membersId: Member[];
    website: string;
    genresIds: string[];
  }
*/

export default bandSchema;
