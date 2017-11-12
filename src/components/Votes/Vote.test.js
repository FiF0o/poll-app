import React from 'react'
import { mount } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Vote } from './Vote'

function setup() {
    let component;
    const props = {
        name: 'name'
    }

    component = mount(
        <MuiThemeProvider>
            <Vote {...props}/>
        </MuiThemeProvider>
    )

    return {
        props,
        component
    }
}

describe(' <Vote/> component', () => {
    it('should render self and its subcomponents', () => {
        const { component } = setup()
        expect(component.length).toBe(1)
    })

    it('should render the name of the voter', () => {
        const { component } = setup()
        expect(component.find('span').text()).toBe('name')
    })

    it('should not render the name if the props.name is undefined', () => {
        const props = {
            name: 'name'
        }
        const component = mount(
            <MuiThemeProvider>
                <Vote {...props} />
            </MuiThemeProvider>
        )

        expect(component.find('span').text()).not.toBe(true)
    })
})
