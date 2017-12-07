import React from 'react';
import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well, Panel
} from 'react-bootstrap';

class PanelTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    return (
        <div>
            <Button block onClick={this.props.togglePanel} >
                {this.props.title}
        </Button>
        <Panel collapsible expanded={this.props.open}>
        {this.props.body}
        <hr/>
            <div style={{textAlign: 'right'}}>
                <Row>
                    <Col xs={8} md={8}>
                    </Col>
                    <Col xs={2} md={2}>
            <Button block onClick={this.props.togglePanel} bsStyle="default">Close</Button>
                    </Col>
                    <Col xs={2} md={2}>
                <Button block bsStyle="primary" onClick={this.props.vs}>Validate</Button>
                    </Col>
                </Row>
            </div>
        </Panel>
        </div>

    );
  }
}

export default PanelTemplate