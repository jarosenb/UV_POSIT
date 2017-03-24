import React from 'react';

import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well, Panel, PanelGroup, Navbar, NavDropdown
} from 'react-bootstrap';

class AppNavbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">UVPD-Utils</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem active={this.props.here == 'intensity'} href="/">Fragment Intensity</NavItem>
                            <NavItem active={this.props.here == 'chargestate'} href="/chargestate">Charge State
                                Analysis</NavItem>
                            <NavItem active={this.props.here == 'wildcard'} href="/wildcard">Wildcard Search
                            </NavItem>
                            <NavItem active={this.props.here == 'hem'} href="/hem">HEM
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default AppNavbar