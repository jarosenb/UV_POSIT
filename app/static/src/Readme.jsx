import React from 'react';

import ReactDOM from 'react-dom';

import 'whatwg-fetch'

import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well,
    Panel, PanelGroup, Navbar, NavDropdown, ProgressBar
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'

import {AutoAffix} from 'react-overlays'


import Select from 'react-select';
import 'react-select/dist/react-select.css';

import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css'

import update from 'immutability-helper';

import PPMInput from './components/PPMInput.jsx'
import ToggleButtonContainer from './components/ToggleButtonContainer.jsx'
import PanelTemplate from './components/PanelTemplate.jsx'
import AppNavbar from './components/AppNavbar.jsx'
import HEMVis from './components/HEMVis.jsx'

import _ from 'lodash'

class AffixExample extends React.Component {
  render() {
    return (
        <div>
            <AppNavbar here="readme"/>

        <Grid>
            <Col sm={3}> <AutoAffix viewportOffsetTop={15} offsetTop={1000} container={this}>
                <Nav bsStyle="pills" stacked activeKey={1}>
    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
  </Nav>
                    </AutoAffix>
            </Col>
            <Col sm={9}>
      <div className='affix-example'>

          <div className='panel panel-default'>
            <div className='panel-body'>
              I am an affixed element
            </div>
          </div>


      </div>
            </Col>
        </Grid>
        </div>
    );
  }
}

ReactDOM.render(<AffixExample/>, document.getElementById('app'));
