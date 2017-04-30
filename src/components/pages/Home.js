/**
 * Created by jonlazarini on 30/04/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
    <div>
        Homepage<br/><br/>
        <Link style={{textDecoration: 'none'}} to='/polls'>
            <b>Link to poll page</b>
        </Link>
    </div>
);