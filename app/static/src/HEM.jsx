import React from 'react';

import ReactDOM from 'react-dom';

import 'whatwg-fetch'

import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well, Panel, PanelGroup, Navbar, NavDropdown, ProgressBar
} from 'react-bootstrap';

//import 'bootstrap/dist/css/bootstrap.css'


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

class HEMApp extends React.Component {
    constructor(props) {
        super(props)
        this.onFileChange = this.onFileChange.bind(this)
        this.state = {
            data: [
                {
                    pos: 'Position',
                    charge: 'Charge',
                    res: 'Residue',
                    hem: 'HEM value',
                    score: 'Score',
                    peaksExp: [1, 15, 20, 15, 1],
                    peaksTheo: [0.9, 18, 21, 14.5, 1.1],
                    masses: [101.1, 101.2, 101.3, 101.4, 101.5],
                    hem_hb: 'HB value',
                    hem_nhb: 'non-HB value',
                    warn: 'Warnings'
                }]
        }
    }

    onFileChange() {
        let formData = new FormData(this.formContent);

        fetch('/getform', {
            method: 'POST',
            body: formData
        }).then((response) => response.json())
            .then((response) => this.setState({data: response.response}))
    }


    render() {
        return (
            <div>
                <AppNavbar here="hem"/>
                <Grid>
                    <form id="formContent" method='POST' name="formContent" encType="multipart/form-data"
                          ref={(form) => this.formContent = form}>
                        <HEMInput saveCallback={this.onFileChange}/>

                    </form>
                    <HEMVis state={this.state}/>

                </Grid>
            </div>
        )
    }
}

class HEMInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sequencePanelOpen: false
        };
        this.toggleSequencePanel = this.toggleSequencePanel.bind(this)

    }

    toggleSequencePanel() {
        this.setState(update(this.state, {sequencePanelOpen: {$set: !this.state.sequencePanelOpen}}))
    }

    render() {

        const contents = <HEMInputContents/>

        return (
            <div>
                <PanelGroup>
                    <Well>
                        <div style={{paddingTop: 2}}>
                            <PanelTemplate togglePanel={this.toggleSequencePanel}
                                           open={this.state.sequencePanelOpen}
                                           title="Upload MzML File and Select Options"
                                           body={contents}
                                           vs={this.props.saveCallback}/>

                        </div>
                    </Well>
                </PanelGroup>
            </div>
        )
    }
}

class HEMInputContents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filename: '\t No File Selected',
            charge: '',
            signal: '1e1',
            score: '1e-2',
            tolValue: "10",
            tolType: "PPM"
        };

        this.inputMask = this.inputMask.bind(this)
        this.fileChange = this.fileChange.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.onDropDownChange = this.onDropDownChange.bind(this);
    }

    inputMask() {
        this.hemIP.click()
    }


    onDropDownChange(e) {
        const newState = update(this.state, {
            tolType: {$set: e}
        });
        this.setState(newState);

    }

    fileChange() {
        console.log(this.hemIP.files[0].name)
        this.setState({filename: ' ' + this.hemIP.files[0].name})
    }

    onInputChange(e) {
        const name = e.target.name;
        const value = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
        this.setState(update(this.state, {
            [name]: {$set: value}
        }))
    }

    render() {
        return (
            <Row>
                <Col xs={12} md={12}>
                    Enter amino acid sequence. Pass modifications using Hill notation, e.g. PEP(CH2Br)TIDE
                    <FormControl name="sequence"
                                 componentClass="textarea"
                                 style={{height: 200, resize: 'none'}}
                    />
                    <hr/>
                </Col>

                <div hidden><input name="ip" id="ip" type="file" ref={(ip) => this.hemIP = ip}
                                   onChange={this.fileChange}/></div>
                <Col xs={6} md={6}>

                    <Button onClick={this.inputMask}>Upload MzML File</Button>
                    <div style={{paddingTop: 5}}><Well>
                        <div style={{wordWrap: 'break-word'}}>{this.state.filename}</div>
                    </Well></div>
                    <PPMInput state={this.state}
                              onInputChange={this.onInputChange}
                              onDropDownChange={this.onDropDownChange}/>
                </Col>
                <Col xs={6} md={6}>
                    <div>max charge:</div>
                    <FormControl name="charge" value={this.state.charge} onChange={this.onInputChange}></FormControl>
                    <div>min signal:</div>
                    <FormControl name="signal" value={this.state.signal} onChange={this.onInputChange}></FormControl>
                    <div>Score cutoff (lower values are more stringent):</div>
                    <FormControl name="score" value={this.state.score} onChange={this.onInputChange}></FormControl>
                    <input hidden readOnly name="tolType" value={this.state.tolType}/>
                </Col>


            </Row>
        )
    }


}


ReactDOM.render(< HEMApp/>, document.getElementById('app'));