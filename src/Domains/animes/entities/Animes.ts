export interface IAnimed {
  id: number;
  title: {
    [key: string]: string;
    english: string;
    native: string;
    romaji: string;
    userPreferred: string;
  };
  coverImage: {
    [key: string]: string;
    color: string;
    extraLarge: string;
    large: string;
    medium: string;
  };
}

export interface IAnimes {
  Page: {
    media: Array<{
      id: number;
      title: {
        [key: string]: string;
        english: string;
        native: string;
        romaji: string;
        userPreferred: string;
      };
      coverImage: {
        [key: string]: string;
        color: string;
        extraLarge: string;
        large: string;
        medium: string;
      };
    }>;
  };
}
