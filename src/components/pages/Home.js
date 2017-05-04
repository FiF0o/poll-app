/**
 * Created by jonlazarini on 30/04/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';

import { RequestMessagingPermissions } from '../../../functions/RequestMessagingPermissions';


export const Home = ({currentUser}) => (
    <div>
        <br/>
        <br/>
        <Link style={{textDecoration: 'none'}} to='/polls'>
            <b>Link to poll page</b>
        </Link>
        <br/>
        <br/>
        <Link style={{textDecoration: 'none'}} to='/all_polls'>
            <b>Link to all the polls</b>
        </Link>
        <br/>
        <br/>
        <div>
            <button onClick={() => {RequestMessagingPermissions(currentUser)} }>get token</button>
        </div>
    </div>
);