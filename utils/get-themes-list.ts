import { genresData } from "@/constants/genres";

interface GenresDataProps {
  genre: string;
  subGenre?: string;
}

export const getThemesList = ({
  genre,
  subGenre,
}: GenresDataProps): { value: string; label: string }[] => {
  let themes = genresData[genre]?.themes || [];

  if (!subGenre) {
    return themes;
  } else {
    let subThemes = genresData[subGenre]?.themes || [];

    themes = themes.filter((theme) =>
      subThemes.some((subTheme) => subTheme.value === theme.value)
    );

    return themes;
  }
};
