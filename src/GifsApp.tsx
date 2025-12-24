import { mockGifs } from "./mock-data/interfaces/gifs.mock";
import { CustomHeader } from "./mock-data/shared/components/CustomHeader";
import { SearchBar } from "./mock-data/shared/components/SearchBar";
import { PreviousSearches } from "./mock-data/gifs/PreviousSearches";
import { GifList } from "./mock-data/gifs/GifList";
import { useState } from "react";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState(["Dragon ball"]);

  const handleSearch = (previous: string) => {
    previous = previous.trim().toLowerCase();
    if (previous.length === 0) return;
    if (previousSearches.includes(previous)) return;
    //setPreviousSearches([...previousSearches, previous]);
    setPreviousSearches([previous, ...previousSearches].splice(0, 3));
  };

  const handlePreviousSearch = (search: string) => {
    setPreviousSearches([...previousSearches, search]);
  };

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descrubre y comparte el gif perfecto"
      />

      <SearchBar placeholder="Buscar gifs" onSearch={handleSearch} />

      <PreviousSearches
        searches={previousSearches}
        onSearch={handlePreviousSearch}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};
