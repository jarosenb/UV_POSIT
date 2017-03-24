import React from 'react';

import ReactDOM from 'react-dom';

import 'whatwg-fetch'

import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well, Panel, PanelGroup, Navbar, NavDropdown
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'


import Select from 'react-select';
import 'react-select/dist/react-select.css';

import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css'

import update from 'immutability-helper';

import PPMInput from './components/PPMInput.jsx'
import ToggleButtonContainer from './components/ToggleButtonContainer_noscript.jsx'
import PanelTemplate from './components/PanelTemplate.jsx'
import AppNavbar from './components/AppNavbar.jsx'

class WildcardApp extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <AppNavbar here="wildcard"/>
                This is the wildcard app
            </div>
        )
    }
}

ReactDOM.render(< WildcardApp/>, document.getElementById('app'));