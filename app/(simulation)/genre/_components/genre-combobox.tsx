"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { genreList } from "@/constants/genre";
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

interface ComboboxGenreProps {
  onSelectGenre: (genre: string) => void;
}

export const ComboboxGenre = ({ onSelectGenre }: ComboboxGenreProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const genres = genreList;

  const handleSelect = (currentValue: string) => {
    if (currentValue === value) {
      console.log("same value");
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
          className="w-[200px] justify-between"
        >
          {value
            ? genres.find((genre) => genre.value === value)?.label
            : "Select genre..."}
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
                  key={genre.value}
                  value={genre.value}
                  onSelect={() => {
                    setValue(genre.value);
                    handleSelect(genre.value);
                    setOpen(false);
                  }}
                >
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
