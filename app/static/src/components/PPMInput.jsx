import React from 'react';
import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well
} from 'react-bootstrap';



class PPMInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <InputGroup>
                <FormControl name="tolValue" value={this.props.state.tolValue}
                             onChange={this.props.onInputChange}/>
                <DropdownButton componentClass={InputGroup.Button} title={this.props.state.tolType}
                                id="bg-nested-dropdown">
                    <MenuItem value="ppm" eventKey="PPM" onSelect={this.props.onDropDownChange}>PPM</MenuItem>
                    <MenuItem value="ppm" eventKey="Da" onSelect={this.props.onDropDownChange}>Da</MenuItem>
                </DropdownButton>
            </InputGroup>


        );
    }
}
;

export default PPMInput