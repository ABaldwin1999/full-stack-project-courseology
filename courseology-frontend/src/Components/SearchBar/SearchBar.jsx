import React from 'react'
import './SearchBar.scss';
const SearchBar = ({inputType,inputStyle, handleSearchInput, spell}) => {
  return (
    <input type={inputType} name="input-box" id="input-box" spellCheck={spell} className={inputStyle} onChange={handleSearchInput}/>
  )
}

export default SearchBar