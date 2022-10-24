import React from 'react'
import './SearchBar.scss';
const SearchBar = ({inputType, handleSearchInput, spell}) => {
  return (
    <input type="text" name="input-box" id="input-box" spellCheck={spell} className={inputType} onChange={handleSearchInput}/>
  )
}

export default SearchBar