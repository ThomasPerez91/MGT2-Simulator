import { Badge } from "@/components/ui/badge";
import { getThemesList } from "@/utils/get-themes-list";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AvalableThemesProps {
  genre: string;
  subGenre?: string;
}

export const AvalableThemes = ({ genre, subGenre }: AvalableThemesProps) => {
  let themes: { value: string; label: string }[] = [];

  if (genre && !subGenre) {
    themes = getThemesList({ genre });
  } else if (genre && subGenre) {
    themes = getThemesList({
      genre,
      subGenre,
    });
  }

  if (themes.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">{`Available themes: ${themes.length}`}</Button>
        </DialogTrigger>
        <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
          <DialogHeader>
            <DialogTitle className="text-center">Theme list</DialogTitle>
            <DialogDescription className="text-center">{`There are ${themes.length} themes available`}</DialogDescription>
            <div className="flex flex-wrap justify-start">
              {themes.map((theme, index) => (
                <Badge
                  variant="secondary"
                  key={`theme-${index}`}
                  className="mx-1 my-1"
                >
                  {theme.label}
                </Badge>
              ))}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
