import React from 'react';

import ReactDOM from 'react-dom';

import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well, PanelGroup
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'
import 'react-select/dist/react-select.css';

import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css'
import update from 'immutability-helper';
import $ from 'jquery'

import ModalTemplate from './components/ModalTemplate.jsx'
import PPMInput from './components/PPMInput.jsx'
import ToggleButtonContainer from './components/ToggleButtonContainer.jsx'
import PanelTemplate from './components/PanelTemplate.jsx'
import AppNavbar from './components/AppNavbar.jsx'
import ChargeStateViz from './components/ChargeStateViz.jsx'


class ChargeStateApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {activeKey: 1, searchResult: []}
        this.runSearch = this.runSearch.bind(this)
        this.runSearchCallback = this.runSearchCallback.bind(this)
        this.handleSelect = this.handleSelect.bind(this);
    }

    runSearchCallback(result) {
        const newState = update(this.state, {
            searchResult: {$set: result}
        });
        console.log(result)
        this.setState({searchResult: result})
    }

    runSearch(state) {

       fetch('/chargesearch', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(state),
            dataType: 'json',
        })
            .then((response) => response.json())
            .then((response) => this.runSearchCallback(response.result, state.modOptions));

    }
    handleSelect(event) {
        const newState = update(this.state, {
            activeKey: {$set: event}
        });
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <AppNavbar here="chargestate"/>
                <Grid>
                   <Row>
                    <Col xs={12} md={12}>
                        <PanelGroup>
                        <Well>
                            <InputContainer runSearch={this.runSearch}/>
                        </Well>
                             </PanelGroup>
                    </Col>
                </Row>
                <Well>
                    <Row>

                        <Col xs={12} md={12}>
                            <Nav bsStyle="pills" justified
                                 activeKey={this.state.activeKey}
                                 onSelect={this.handleSelect}>
                                <NavItem eventKey={1}>N-terminal Ions</NavItem>
                                <NavItem eventKey={2}>C-terminal Ions</NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Well>

                <ChargeStateViz state={this.state}/>
                </Grid>
            </div>
        );
    }
}

class InputContainer extends React.Component {
    constructor(props) {
        super(props)
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
                b: false,
                c: false,
                x: true,
                xp: true,
                y: false,
                ym: false,
                ymm: false,
                z: false,
                all_ax: true,
                all_by: false,
                all_cz: false
            },
        };
        this.onIonToggle = this.onIonToggle.bind(this);
        this.axtoggle = this.axtoggle.bind(this);
        this.bytoggle = this.bytoggle.bind(this);
        this.cztoggle = this.cztoggle.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onDropDownChange = this.onDropDownChange.bind(this);
        this.validateSeq = this.validateSeq.bind(this);
        this.validateSeqCallback = this.validateSeqCallback.bind(this);
        this.validateMasses = this.validateMasses.bind(this);
        this.validateMassesCallback = this.validateMassesCallback.bind(this);
        this.toggleSequencePanel = this.toggleSequencePanel.bind(this);
        this.toggleMasslistPanel = this.toggleMasslistPanel.bind(this)
    }


    toggleSequencePanel(){
        this.setState(update(this.state, {sequencePanelOpen: {$set: !this.state.sequencePanelOpen}}))
    }
    toggleMasslistPanel(){
        this.setState(update(this.state, {masslistPanelOpen: {$set: !this.state.masslistPanelOpen}}))
    }
    validateSeqCallback(response){
        console.log(response.result)
        this.setState(update(this.state, {sequenceValidated: {$set: response},
            sequencePanelOpen: {$set: !response.result}}));
        if(response && this.state.masslistValidated){
            console.log('running search...')
            this.props.runSearch(this.state)
        }
    }
    validateMassesCallback(response){
        console.log(response.result)
        this.setState(update(this.state, {masslistValidated: {$set: response},
            masslistPanelOpen: {$set: !response.result}}));
        if(response && this.state.sequenceValidated){
            console.log('running search...')
            this.props.runSearch(this.state)
        }

    }
    validateSeq() {
        fetch('/validateSequence', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state.sequence),
            dataType: 'json',
        })
            .then((response) => response.json())
            .then((response) => this.validateSeqCallback(response));
    }
    validateMasses() {
        fetch('/validateChargeData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state),
            dataType: 'json',
        })
            .then((response) => response.json())
            .then((response) => this.validateMassesCallback(response));
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


        return (<div><div style={{paddingTop: 2}}>
            <div style={{paddingBottom: 5}}>
                <PanelTemplate togglePanel={this.toggleSequencePanel}
                               open={this.state.sequencePanelOpen}
                               vs={this.validateSeq}
                               title="Edit Sequence"
                               body={sequence}/>
            </div>
                <PanelTemplate togglePanel={this.toggleMasslistPanel}
                               open={this.state.masslistPanelOpen}
                               vs={this.validateMasses}
                               title="Edit Mass List and Options"
                               body={massData}/>
            </div>
        </div>)
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
                    <b>Mass and m/z Data from ProsightPC THRASH (tab-delimited):</b>
                    <FormControl name="masslist"
                                 value={this.props.state.masslist}
                                 componentClass="textarea"
                                 style={{height: 205, resize: 'none'}}
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
                        <b>Mass Error Tolerance:</b>
                        <PPMInput state={this.props.state}
                                  onInputChange={this.props.onInputChange}
                                  onDropDownChange={this.props.onDropDownChange}/>
                    </div>

                </Col>
            </Row>
        )
    }

}

ReactDOM.render(< ChargeStateApp/>, document.getElementById('app'));