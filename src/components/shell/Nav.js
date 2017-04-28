/**
 * Created by jonlazarini on 24/04/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

export const Nav = ({ handleClose }) => (
    <div>
        <Link style={{textDecoration: 'none'}} to='/'>
            <MenuItem onTouchTap={handleClose} >
                Home
            </MenuItem>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/page2'>
            <MenuItem onTouchTap={handleClose} >
                Page2
            </MenuItem>
        </Link>
    </div>
);
