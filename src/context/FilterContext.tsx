import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterState {
  category: string;
  subCategory: string | null;
}

interface FilterContextType {
  filter: FilterState;
  setCategory: (category: string) => void;
  setSubCategory: (subCategory: string | null) => void;
  setFilter: (category: string, subCategory: string | null) => void;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilterState] = useState<FilterState>({
    category: "All",
    subCategory: null,
  });

  const setCategory = (category: string) => {
    setFilterState({ category, subCategory: null });
  };

  const setSubCategory = (subCategory: string | null) => {
    setFilterState((prev) => ({ ...prev, subCategory }));
  };

  const setFilter = (category: string, subCategory: string | null) => {
    setFilterState({ category, subCategory });
  };

  const clearFilters = () => {
    setFilterState({ category: "All", subCategory: null });
  };

  return (
    <FilterContext.Provider
      value={{ filter, setCategory, setSubCategory, setFilter, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
