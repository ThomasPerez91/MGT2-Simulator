"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { ComboboxGenre } from "./genre-combobox";
import { ComboboxTheme } from "./theme-combobox";

interface InputsProps {
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
  selectedSubGenre: string;
  setSelectedSubGenre: (subGenre: string) => void;
  selectedTheme: string;
  setSelectedTheme: (theme: string) => void;
  setSelectedSubTheme: (subTheme: string) => void;
}

export const Inputs = ({
  selectedGenre,
  setSelectedGenre,
  selectedSubGenre,
  setSelectedSubGenre,
  selectedTheme,
  setSelectedTheme,
  setSelectedSubTheme,
}: InputsProps) => {
  const [showSubGenreComboboxe, setshowSubGenreComboboxe] = useState(false);
  const [showSubThemeComboboxe, setshowSubThemeComboboxe] = useState(false);

  return (
    <div id="inputs" className="flex justify-around">
      <div id="genre-inputs" className="flex flex-col gap-y-4">
        <div className="flex justify-center">
          <Switch
            checked={showSubGenreComboboxe}
            onCheckedChange={setshowSubGenreComboboxe}
            aria-label="Toggle Sub Genre Comboboxe"
          />
          <label className="text-white pl-2 pt-0.5 text-sm">
            Add sub genre
          </label>
        </div>
        <div id="genre-combobox">
          <ComboboxGenre onSelectGenre={setSelectedGenre} />
        </div>
        <div id="sub-genre-combobox">
          {showSubGenreComboboxe && (
            <ComboboxGenre
              isSubGenre={true}
              disabledSubGenres={selectedGenre === ""}
              selectedGenre={selectedGenre}
              onSelectGenre={setSelectedSubGenre}
            />
          )}
        </div>
      </div>
      <div id="theme-inputs" className="flex flex-col gap-y-4">
        <div className="flex justify-center">
          <Switch
            checked={showSubThemeComboboxe}
            onCheckedChange={setshowSubThemeComboboxe}
            aria-label="Toggle Sub Theme Comboboxe"
          />
          <label className="text-white pl-2 pt-0.5 text-sm">
            Add sub theme
          </label>
        </div>
        <div id="theme-combobox">
          <ComboboxTheme
            selectedGenre={selectedGenre}
            onSelectTheme={setSelectedTheme}
          />
        </div>
        <div id="sub-theme-combobox">
          {showSubThemeComboboxe && (
            <ComboboxTheme
              isSubTheme={true}
              disabledSubTheme={selectedTheme === ""}
              selectedTheme={selectedTheme}
              selectedGenre={selectedGenre}
              selectedSubGenre={selectedSubGenre}
              onSelectTheme={setSelectedSubTheme}
            />
          )}
        </div>
      </div>
    </div>
  );
};
