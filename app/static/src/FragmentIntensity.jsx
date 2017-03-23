import React from 'react';

import ReactDOM from 'react-dom';

import 'whatwg-fetch'

import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'


import Select from 'react-select';
import 'react-select/dist/react-select.css';

import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css'

import update from 'immutability-helper';


import $ from 'jquery'

import ModalTemplate from './components/ModalTemplate.jsx'
import ModInput from './components/ModInput.jsx'
import PPMInput from './components/PPMInput.jsx'
import ToggleButtonContainer from './components/ToggleButtonContainer.jsx'
import IntensityViz from './components/IntensityViz_highcharts.jsx'


class IntensityApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: 1,
            mydata: [["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""]
            ],

            options: [],
            selectedMods: [],
            searchResult: {}
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.onModSelect = this.onModSelect.bind(this)
        this.runSearch = this.runSearch.bind(this)
        this.runSearchCallback = this.runSearchCallback.bind(this)

    }


    runSearchCallback(result, modOptions) {
        const newState = update(this.state, {
            searchResult: {$set: result}
        });
        this.setState({options: modOptions, searchResult: result})
    }

    runSearch(state) {

        $.ajax({
            type: 'POST',
            context: this,
            // Provide correct Content-Type, so that Flask will know how to process it.
            contentType: 'application/json',
            // Encode data as JSON.
            data: JSON.stringify(state),
            // This is the type of data expected back from the server.
            dataType: 'json',
            url: '/runSearch',
            success: function (data) {

                this.runSearchCallback(data.result, state.modOptions)
            },
            error: function () {
                callback(false)
            }
        });

    }

    handleSelect(event) {
        const newState = update(this.state, {
            activeKey: {$set: event}
        });
        this.setState(newState)
    }

    onModSelect(event) {

        const modlist = event.map((k) => k.value);
        const newState = update(this.state, {
            selectedMods: {$set: modlist}
        });

        this.setState(newState)
    }

    render() {


        return (
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <Well>
                            <ModalContainer runSearch={this.runSearch}/>
                        </Well>
                    </Col>
                </Row>
                <Well>
                    <Row>

                        <Col xs={9} md={9}>
                            <Nav bsStyle="pills" justified
                                 activeKey={this.state.activeKey}
                                 onSelect={this.handleSelect}>
                                <NavItem eventKey={1}>All Ions</NavItem>
                                <NavItem eventKey={2}><i>apo</i> Ions</NavItem>
                                <NavItem eventKey={3}><i>holo</i> Ions</NavItem>
                            </Nav>
                        </Col>

                        <Col xs={3} md={3}>
                            <Select multi placeholder="Select modifications to include"
                                    value={this.state.selectedMods}
                                    options={this.state.options}
                                    onChange={this.onModSelect}/>
                        </Col>

                    </Row>
                </Well>

                <div>
                    <IntensityViz state={this.state}/>
                </div>
            </Grid>
        )
    }
}


class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sequence: "",
            sequenceValidated: false,
            masslist: "",
            masslistValidated: false,
            tolValue: "10",
            tolType: "PPM",
            tic: "1",
            ions: {
                a: true,
                ap: true,
                b: true,
                c: true,
                x: true,
                xp: true,
                y: true,
                ym: true,
                ymm: true,
                z: true,
                all_ax: true,
                all_by: true,
                all_cz: true
            },
            mods: [],
            modOptions: []
        };
        this.onIonToggle = this.onIonToggle.bind(this);
        this.axtoggle = this.axtoggle.bind(this);
        this.bytoggle = this.bytoggle.bind(this);
        this.cztoggle = this.cztoggle.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onDropDownChange = this.onDropDownChange.bind(this);
        this.modsOnChange = this.modsOnChange.bind(this);
        this.validateSeq = this.validateSeq.bind(this);
        this.validateMasses = this.validateMasses.bind(this)
    }

    validateSeq(callback) {
        //callback is function in the modal component that handles success

        $.ajax({
            type: 'POST',
            context: this,
            // Provide correct Content-Type, so that Flask will know how to process it.
            contentType: 'application/json',
            // Encode data as JSON.
            data: JSON.stringify(this.state.sequence),
            // This is the type of data expected back from the server.
            dataType: 'json',
            url: '/validateSequence',
            success: function (data) {
                callback(data.result)
                this.setState(update(this.state, {sequenceValidated: {$set: data.result}}));
                if (data.result && this.state.masslistValidated) {
                    this.props.runSearch(this.state)
                }
            },
            error: function () {
                callback(false)
            }

        });
        // if both validated, send ajax post request to searcher
    }


    validateMasses(callback) {

        $.ajax({
            type: 'POST',
            context: this,
            // Provide correct Content-Type, so that Flask will know how to process it.
            contentType: 'application/json',
            // Encode data as JSON.
            data: JSON.stringify(this.state),
            // This is the type of data expected back from the server.
            dataType: 'json',
            url: '/validateData',
            success: function (data) {
                callback(data.result)
                this.setState(update(this.state, {masslistValidated: {$set: data.result}}))
                if (data.result && this.state.sequenceValidated) {
                    this.props.runSearch(this.state)
                }
            },
            error: function () {
                callback(false)
            }

        });
    }


    onInputChange(e) {

        const name = e.target.name;
        const value = e.target.value;
        this.setState(update(this.state, {
            [name]: {$set: value}
        }))
    }

    onDropDownChange(e) {
        const newState = update(this.state, {
            tolType: {$set: e}
        });
        this.setState(newState);

    }

    onIonToggle(name) {
        const newTval = !this.state.ions[name];
        this.setState(update(this.state, {
            ions: {[name]: {$set: newTval}}
        }));
    }

    axtoggle() {
        const newaxval = !this.state.ions.all_ax
        this.setState(update(this.state, {
            ions: {
                all_ax: {$set: newaxval},
                a: {$set: newaxval},
                ap: {$set: newaxval},
                x: {$set: newaxval},
                xp: {$set: newaxval}
            }
        }))
    }

    bytoggle() {
        const newbyval = !this.state.ions.all_by
        this.setState(update(this.state, {
            ions: {
                all_by: {$set: newbyval},
                b: {$set: newbyval},
                y: {$set: newbyval},
                ym: {$set: newbyval},
                ymm: {$set: newbyval}
            }
        }))
    }

    cztoggle() {
        const newczval = !this.state.ions.all_cz
        this.setState(update(this.state, {
            ions: {
                all_cz: {$set: newczval},
                c: {$set: newczval},
                z: {$set: newczval}
            }
        }))
    }

    modsOnChange(value) {
        const mods = value.map(
            e => e.value
        );
        const newState = update(this.state, {
            mods: {$set: mods},
            modOptions: {$set: value}
        });

        this.setState(newState)
    }


    render() {

        const sequence = <Sequence state={this.state}
                                   onInputChange={this.onInputChange}/>

        const massData = <MassData
            state={this.state}
            onIonToggle={this.onIonToggle}
            axtoggle={this.axtoggle}
            bytoggle={this.bytoggle}
            cztoggle={this.cztoggle}
            onInputChange={this.onInputChange}
            onDropDownChange={this.onDropDownChange}
            modsOnChange={this.modsOnChange}/>

        return (
            <div>
                <ModalTemplate body={sequence} title="Enter Sequence"
                               savefn={this.validateSeq}
                               state={this.state}/>
                <ModalTemplate body={massData} title="Enter mass/intensity data"
                               savefn={this.validateMasses}
                               state={this.state}/>
            </div>

        )
    }
}

class Sequence extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
                <Col xs={12} md={12}>
                    <FormControl name="sequence"
                                 value={this.props.state.sequence}
                                 componentClass="textarea"
                                 style={{height: 200, resize: 'none'}}
                                 onChange={this.props.onInputChange}/>
                </Col>
            </Row>
        )
    }
}

class MassData extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
                <Col xs={6} md={6}>
                    <b>Mass/Intensity list (tab-delimited):</b>
                    <FormControl name="masslist"
                                 value={this.props.state.masslist}
                                 componentClass="textarea"
                                 style={{height: 335, resize: 'none'}}
                                 onChange={this.props.onInputChange}/>

                </Col>
                <Col xs={6} md={6}>
                    <div style={{paddingBottom: 10}}>
                        <b>Ion series to search:</b>
                        <ToggleButtonContainer
                            state={this.props.state.ions}
                            onIonToggle={this.props.onIonToggle}
                            axtoggle={this.props.axtoggle}
                            bytoggle={this.props.bytoggle}
                            cztoggle={this.props.cztoggle}/>
                    </div>
                    <div style={{paddingBottom: 10}}>
                        <b>TIC Intensity:</b>
                        <FormControl name="tic"
                                     onChange={this.props.onInputChange}
                                     value={this.props.state.tic}/>
                    </div>
                    <div style={{paddingBottom: 10}}>
                        <b>Mass Error Tolerance:</b>
                        <PPMInput state={this.props.state}
                                  onInputChange={this.props.onInputChange}
                                  onDropDownChange={this.props.onDropDownChange}/>
                    </div>
                    <b>Ligand Masses:</b>
                    <ModInput state={this.props.state} modsOnChange={this.props.modsOnChange}/>


                </Col>
            </Row>
        )
    }

}


ReactDOM.render(< IntensityApp/>, document.getElementById('app'));
