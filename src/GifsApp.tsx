import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./mock-data/shared/components/CustomHeader";
import { SearchBar } from "./mock-data/shared/components/SearchBar";
import { PreviousSearches } from "./mock-data/gifs/PreviousSearches";
import { GifList } from "./mock-data/gifs/GifList";

export const GifsApp = () => {
  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descrubre y comparte el gif perfecto"
      />

      <SearchBar placeholder="Buscar gifs" />

      <PreviousSearches
        searches={["goku", "naruto", "bleach", "dragon ball", "one punch man"]}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};
