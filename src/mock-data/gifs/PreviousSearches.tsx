import React from "react";

interface Props {
  searches: string[];
  onSearch: (search: string) => void;
}

export const PreviousSearches = ({ searches, onSearch }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas anteriores</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search}
            onClick={() => onSearch(search)}>{search}
          </li>
        ))}
      </ul>
    </div>
  );
};
