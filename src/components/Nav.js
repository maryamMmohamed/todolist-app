import React from 'react';
import { Link , NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <Link to='/'>Logo</Link>
            <ul>
               {/* <Link to='/'>Home</Link> */}
               <NavLink exact to='/'>Home</NavLink>
               <NavLink to='/about'>About</NavLink>
               <NavLink to='/blog'>Blog</NavLink>
            </ul>
        </div>
    )
}

export default Nav;