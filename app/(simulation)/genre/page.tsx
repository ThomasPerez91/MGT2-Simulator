"use client";

import { useState } from "react";
import { Inputs } from "./_components/inputs";
import { Datas } from "./_components/datas";

const GenrePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSubGenre, setSelectedSubGenre] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedSubTheme, setSelectedSubTheme] = useState("");

  return (
    <div className="w-full backdrop-blur-sm">
      <div className="relative flex justify-around inset-0 top-16 px-4">
        <Inputs
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          selectedSubGenre={selectedSubGenre}
          setSelectedSubGenre={setSelectedSubGenre}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          setSelectedSubTheme={setSelectedSubTheme}
        />
        <Datas
          selectedGenre={selectedGenre}
          selectedSubGenre={selectedSubGenre}
        />
      </div>
    </div>
  );
};

export default GenrePage;
