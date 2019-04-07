import React, { Component } from 'react';
import { NavComponent, NavList } from './NavBar.SC';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navlinks: [
                { linkname: "men", id: 1 },
                { linkname: "women", id: 2 },
                { linkname: "kids", id: 3 },
                { linkname: "home & living", id: 4 },
                { linkname: "discover", id: 5 },
            ]
        }
    }

    render() {
        return (
            <NavComponent>
                {
                    this.state.navlinks.map(item => {
                        return (
                            <NavList key={item.id}>
                                {item.linkname}
                            </NavList>
                        )
                    })
                }
            </NavComponent>
        )
    }
}

export default NavBar;