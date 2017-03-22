import React from 'react';
import Select from 'react-select';
import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well
} from 'react-bootstrap';

class ModInput extends React.Component {

    render() {

        return (
            <Select.Creatable
                multi={true}
                options={this.props.state.modOptions}
                onChange={this.props.modsOnChange}
                value={this.props.state.mods}
                placeholder="input mass and press 'enter'"
            />
        );
    }
}

export default ModInput