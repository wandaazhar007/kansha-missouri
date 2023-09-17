'use client'
import { createContext, useState } from "react";

export const SearchContext = createContext({});

export function SearchProvider({ children }: any) {
  const [querySearch, setQuerySearch] = useState('');

  // const searchMenu = () => {
  //   setKeyWord('')
  // }
  const contextValue = {
    setQuerySearch,
    querySearch,
    // searchMenu
  }
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;