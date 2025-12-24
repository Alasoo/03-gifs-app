import { useState } from "react";

interface Props {
  placeholder?: string;
  onSearch: (search: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar gifs", onSearch }: Props) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    onSearch(search);
    setSearch('');
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} onChange={(e) => setSearch(e.target.value)} value={search}
        onKeyDown={handleKeyDown} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
