import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./mock-data/shared/components/CustomHeader";
import { SearchBar } from "./mock-data/shared/components/SearchBar";
import { PreviousSearches } from "./mock-data/gifs/PreviousSearches";
import { GifList } from "./mock-data/gifs/GifList";
import { useState } from "react";

export const GifsApp = () => {

  const [previousSearches, setPreviousSearches] = useState([''])

  const handleSearch = (previous: string) => {
    //setPreviousSearches([...previousSearches, search])
  }

  const handlePreviousSearch = (search: string) => {
    setPreviousSearches([...previousSearches, search])
  }

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
