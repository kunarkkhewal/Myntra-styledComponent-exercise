import React from 'react';
import {Logo, StyledHeader} from './Header.SC';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import UserDetails from '../UserDetails/UserDetails';

const Header = props => {
    return(
        <StyledHeader>
            <Logo/>
            <NavBar/>
            <SearchBar/>
            <UserDetails/>
        </StyledHeader>
    )
}

export default Header;