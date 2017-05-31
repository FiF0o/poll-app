/**
 * Created by jonlazarini on 31/05/17.
 */
import React from 'react';

export const Error = ({errors}) => {
    console.log('COMPONENT:', errors);
    return(<div><p>{errors}</p></div>)};