"use client";

import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { genresData } from "@/constants/genres";
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
import { getThemesList } from "@/utils/get-themes-list";

interface ComboboxThemeProps {
  isSubTheme?: boolean;
  disabledSubTheme?: boolean;
  selectedTheme?: string;
  selectedGenre: string;
  selectedSubGenre?: string;
  onSelectTheme: (theme: string) => void;
}

export const ComboboxTheme = ({
  isSubTheme = false,
  disabledSubTheme = false,
  selectedGenre,
  selectedTheme,
  selectedSubGenre,
  onSelectTheme,
}: ComboboxThemeProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  let themes: { value: string; label: string }[] = [];

  if (selectedGenre && !selectedSubGenre) {
    themes = getThemesList({ genre: selectedGenre });
  } else if (selectedGenre && selectedSubGenre) {
    themes = getThemesList({
      genre: selectedGenre,
      subGenre: selectedSubGenre,
    });
  }

  if (selectedTheme) {
    themes = themes.filter((theme) => theme.value !== selectedTheme);
  }

  const handleSelect = (currentValue: string) => {
    if (currentValue === value) {
      setValue("");
      onSelectTheme("");
    } else {
      setValue(currentValue);
      onSelectTheme(currentValue);
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
          disabled={!selectedGenre || disabledSubTheme}
        >
          {value && !disabledSubTheme
            ? themes.find((theme) => theme.value === value)?.label ??
              (isSubTheme ? "Select sub theme..." : "Select theme...")
            : isSubTheme
            ? "Select sub theme..."
            : "Select theme..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search theme..." className="h-9" />
          <CommandEmpty>No theme found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {themes.map((theme) => (
                <CommandItem
                  key={theme.value}
                  value={theme.value}
                  onSelect={() => {
                    setValue(theme.value);
                    handleSelect(theme.value);
                    setOpen(false);
                  }}
                >
                  {theme.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === theme.value ? "opacity-100" : "opacity-0"
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
