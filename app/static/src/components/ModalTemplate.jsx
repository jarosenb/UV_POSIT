import React from 'react';

import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well
} from 'react-bootstrap';


class ModalTemplate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showModal: false}
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
        this.saveCallback = this.saveCallback.bind(this)
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }


    saveCallback(truthVal) {
        this.setState({showModal: !truthVal});
    }


    render() {

        let errmsg = []
        //if (this.state.hasError)
         //   errmsg = <div>Error!</div>

        return (
            <div style={{paddingBottom: 5}}>
                <Button bsStyle="default" onClick={this.open} block>
                    {this.props.title}
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                        {errmsg}
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.body}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button bsStyle="primary"
                                onClick={()=>this.props.savefn(this.saveCallback)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};

export default ModalTemplate
