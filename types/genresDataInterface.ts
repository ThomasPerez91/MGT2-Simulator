export interface GenresDataInterface {
  [key: string]: {
    bestSubGenres: {
      value: string;
      label: string;
    }[];
    targets: string[];
    themes: {
      value: string;
      label: string;
    }[];
    designPriorities: { priority: string; value: number }[];
    designFocus: {
      subGenre: string;
      "designFocus1-4": number[];
      "designFocus5-8": number[];
      designDirection: number[];
    }[];
  };
}
