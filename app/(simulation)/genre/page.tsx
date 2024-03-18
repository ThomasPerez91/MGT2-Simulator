"use client";
import { useState, useEffect } from "react";
import { ComboboxGenre } from "./_components/genre-combobox";

const GenrePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreSelection = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="w-full backdrop-blur-sm">
      <div className="relative flex justify-between inset-0 top-16 px-4">
        <div className="flex bg-red-300">
          <ComboboxGenre onSelectGenre={handleGenreSelection} />
        </div>
        <div className="flex bg-blue-300"></div>
      </div>
    </div>
  );
};

export default GenrePage;
