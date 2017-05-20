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
        <Link style={{textDecoration: 'none'}} to='/polls'>
            <MenuItem onTouchTap={handleClose} >
                Current Polls
            </MenuItem>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/profile'>
            <MenuItem onTouchTap={handleClose} >
                Profile
            </MenuItem>
        </Link>
    </div>
);
