import React from 'react';

import ReactDOM from 'react-dom';

import 'whatwg-fetch'

import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well, Panel, PanelGroup, Navbar, NavDropdown, ProgressBar
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'


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
        this.state = {data: [
                {
                    pos: 'Position',
                    charge: 'Charge',
                    res: 'Residue',
                    hem: 'HEM value',
                    score: 'Score',
                    peaksExp: [1, 15, 20, 15, 1],
                    peaksTheo: [0.9, 18, 21, 14.5, 1.1],
                    masses: [101.1, 101.2, 101.3, 101.4, 101.5],
                    warn: 'Warnings'
                }]}
    }

    onFileChange() {
        let formData = new FormData(this.formContent);

        fetch('/getform', {
            method: 'POST',
            body: formData
    }).then((response) => response.json())
            .then((response)=> this.setState({data: response.response}))
    }



    render() {
        return (
            <div>
                <AppNavbar here="hem"/>
            <Grid>
                <form id="formContent" method='POST' name="formContent" encType="multipart/form-data"
                      ref={(form)=>this.formContent = form}>
                    <HEMInput saveCallback = {this.onFileChange}/>

                </form>
                <HEMVis state = {this.state}/>

            </Grid>
            </div>
        )
    }
}

class HEMInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sequencePanelOpen: false
        }
        this.toggleSequencePanel = this.toggleSequencePanel.bind(this)

    }

    toggleSequencePanel(){
        this.setState(update(this.state, {sequencePanelOpen: {$set: !this.state.sequencePanelOpen}}))
    }

    render(){

        const contents = <HEMInputContents/>

        return(
            <div>
                <PanelGroup>
                <Well>
            <div style={{paddingTop: 2}}>
                <PanelTemplate togglePanel={this.toggleSequencePanel}
                               open={this.state.sequencePanelOpen}
                               title="Upload MzML File and Select Options"
                               body={contents}
                                vs = {this.props.saveCallback}/>

            </div>
                </Well>
            </PanelGroup>
            </div>
        )
    }
}

class HEMInputContents extends React.Component {
    constructor(props){
        super(props)
        this.state= {
        filename: ' No File Selected'
        }

        this.inputMask = this.inputMask.bind(this)
        this.fileChange = this.fileChange.bind(this)
    }

    inputMask(){
        this.hemIP.click()
    }

    fileChange(){
        console.log(this.hemIP.files[0].name)
        this.setState({filename: ' ' + this.hemIP.files[0].name})
    }

    render(){
        return(
            <Row>
                <Col xs={12} md={12}>
            <FormControl name="sequence"
                                 componentClass="textarea"
                                 style={{height: 200, resize: 'none'}}
                                />
                    <hr/>
                </Col>

                <div hidden><input name="ip" id="ip" type="file" ref={(ip)=>this.hemIP = ip} onChange={this.fileChange}/></div>
                <Col xs={6} md={6}>
                <Button onClick={this.inputMask}>Upload MzML File</Button>
                    <div style={{wordWrap: 'break-word'}}>{this.state.filename}</div>
                </Col>
                <Col xs={6} md={6}>
                <div>max charge:</div>
                <FormControl name="charge"></FormControl>
                <div>min signal:</div>
                <FormControl name="signal"></FormControl>
                <div>min score:</div>
                <FormControl name="score"></FormControl>
                </Col>



            </Row>
        )
    }


}


ReactDOM.render(< HEMApp/>, document.getElementById('app'));