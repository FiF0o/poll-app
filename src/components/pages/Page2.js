/**
 * Created by jonlazarini on 24/04/17.
 */
import React, { Component } from 'react';
import GridsExmple from '../Grids'

class Page2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            newData: null
        }
    }

    componentDidMount() {

    }

    render() {

        return(
            <div>
                <GridsExmple />
            </div>
        )
    }

}

export default Page2