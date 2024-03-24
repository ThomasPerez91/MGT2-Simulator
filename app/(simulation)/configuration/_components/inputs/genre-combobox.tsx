"use client";

import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { genresData, genresList } from "@/constants/genres";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

interface ComboboxGenreProps {
  isSubGenre?: boolean;
  disabledSubGenres?: boolean;
  selectedGenre?: string;
  onSelectGenre: (genre: string) => void;
}

export const ComboboxGenre = ({
  isSubGenre = false,
  disabledSubGenres = false,
  selectedGenre,
  onSelectGenre,
}: ComboboxGenreProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  let genres = selectedGenre
    ? genresList.filter((genre) => genre.value !== selectedGenre)
    : genresList;

  let bestSubGenres = selectedGenre
    ? genresData[selectedGenre]?.bestSubGenres?.map(
        (subGenre) => subGenre.value
      )
    : [];

  const handleSelect = (currentValue: string) => {
    if (currentValue === value) {
      setValue("");
      onSelectGenre("");
    } else {
      setValue(currentValue);
      onSelectGenre(currentValue);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[230px] justify-between"
          disabled={disabledSubGenres}
        >
          <div className="flex items-center">
            {value && (
              <Image
                src={genres.find((genre) => genre.value === value)?.path ?? ""}
                alt=""
                width={24}
                height={24}
                className="mr-2"
              />
            )}
            {value
              ? genres.find((genre) => genre.value === value)?.label ??
                (isSubGenre ? "Select sub genre..." : "Select genre...")
              : isSubGenre
              ? "Select sub genre..."
              : "Select genre..."}
          </div>

          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search genre..." className="h-9" />
          <CommandEmpty>No genre found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {genres.map((genre) => (
                <CommandItem
                  className={
                    bestSubGenres.includes(genre.value) ? "font-bold" : ""
                  }
                  key={genre.value}
                  value={genre.value}
                  onSelect={() => {
                    setValue(genre.value);
                    handleSelect(genre.value);
                    setOpen(false);
                  }}
                >
                  <Image
                    src={genre.path}
                    alt={genre.label}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  {genre.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === genre.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
