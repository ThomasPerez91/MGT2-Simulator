"use client";

import { useState } from "react";
import { Inputs } from "./_components/inputs/inputs";
import { Datas } from "./_components/datas/datas";

const GenrePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSubGenre, setSelectedSubGenre] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedSubTheme, setSelectedSubTheme] = useState("");

  return (
    <div className="w-full backdrop-blur-sm">
      <div className="px-4 mt-24 flex flex-col items-center space-y-6 lg:flex-row lg:justify-around lg:items-start lg:space-y-0">
        <div>
          <Inputs
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            selectedSubGenre={selectedSubGenre}
            setSelectedSubGenre={setSelectedSubGenre}
            selectedTheme={selectedTheme}
            setSelectedTheme={setSelectedTheme}
            setSelectedSubTheme={setSelectedSubTheme}
          />
          <div>New Div</div>
        </div>
        <Datas
          selectedGenre={selectedGenre}
          selectedSubGenre={selectedSubGenre}
        />
      </div>
    </div>
  );
};

export default GenrePage;
