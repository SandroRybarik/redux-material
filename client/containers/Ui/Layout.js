import React from 'react'

import ContainerMyAppBar from './AppBar'
import ContainerCustomDrawer from './Drawer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/**
 * Basic layout file with Menu and drawer
 */

class Layout extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <ContainerMyAppBar />
                    <ContainerCustomDrawer />
                    {this.props.children}
                </div> 
            </MuiThemeProvider>
        )
    }
}


export default Layout