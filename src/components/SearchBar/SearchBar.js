import React from 'react';
import { StyledSearchBar } from './SearchBar.SC';

const SearchBar = props => {
    return (
        <StyledSearchBar>
            <span />
            <input type="text" placeholder="Search for products,brands and more" />
        </StyledSearchBar>
    )
}

export default SearchBar;