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

class WildcardApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {taskURLs: []}
        this.runSearch = this.runSearch.bind(this)
        this.runSearchCallback = this.runSearchCallback.bind(this)
    }

    runSearchCallback(response){

        const newState = update(this.state, {taskURLs: {$push: ['hi']}})
        console.log(newState)
        this.setState(update(this.state, {taskURLs: {$push: [response.Location]}}))
    }

    runSearch(){
        console.log('sending request');

        fetch('/longtask',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify('hello'),
            dataType: 'json',
        }).then((response) => response.json())
            .then((response)=> this.runSearchCallback(response))

    }

    render(){
        return(
            <div>
                <AppNavbar here="wildcard"/>
                <Grid>
                    <InputContainer runSearch = {this.runSearch}/>
                    <TaskProgressContainer tasks = {this.state.taskURLs}/>
                </Grid>
            </div>
        )
    }
}


class TaskProgressContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.tasks)

        const taskbars = this.props.tasks.map((t)=> <TaskProgressBar key={t} taskID={t}/> )

        return (
            <div>
                {taskbars}
            </div>
        )
    }
}

class TaskProgressBar extends React.Component {
    constructor(props){
        super(props)
        this.state={progress: 0, status: 'booting'}
        this.pollTask = this.pollTask.bind(this)
        this.pollTaskCallback = this.pollTaskCallback.bind(this)
    }

    pollTaskCallback(response, taskID){
        let percent = parseInt(response.current * 100 / response.total)
        this.setState({progress: percent, status: response.status})

        if(response.state != 'PENDING' && response.state != 'PROGRESS'){
            if('result' in response){
                console.log(response.result)
            }
        }

        else {
            setTimeout(()=>this.pollTask(taskID), 2000)
        }

    }

    pollTask(taskID){
        fetch(taskID, {
            headers: {
                'content-type': 'application/json'
            },
            dataType: 'json'
        }).then((response)=>response.json())
            .then((response)=>this.pollTaskCallback(response, taskID))
    }

    componentDidMount(){
        this.pollTask(this.props.taskID)
    }

    render(){
        return(
            <Well>
                {this.props.taskID}
                {this.state.status}
                <ProgressBar now={this.state.progress} label={`${this.state.progress}%`} srOnly />
            </Well>
        )
    }
}


class InputContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sequence: "",
            sequenceValidated: true,
            masslist: "",
            masslistValidated: true,
            tolValue: "10",
            tolType: "PPM",
            firstMass: "",
            lastMass: "",
            increment: "",
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
        fetch('/validateWildcardData', {
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


        return (<div>
            <PanelGroup>
                <Well>
            <div style={{paddingTop: 2}}>
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
                </Well>
                <Button bsStyle={this.state.sequenceValidated && this.state.masslistValidated ? 'success': 'default'}
                        onClick={this.props.runSearch}
                        disabled = {(!this.state.sequenceValidated || !this.state.masslistValidated)}
                        block>Submit search to server</Button>
            </PanelGroup>
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
                                 style={{height: 395, resize: 'none'}}
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
                        <b>First mass in search range:</b>
                        <FormControl name="firstMass"
                                     onChange={this.props.onInputChange}
                                     value={this.props.state.firstMass}/>
                    </div>
                    <div style={{paddingBottom: 10}}>
                        <b>Last mass in search range:</b>
                        <FormControl name="lastMass"
                                     onChange={this.props.onInputChange}
                                     value={this.props.state.lastMass}/>
                    </div>
                    <b>Mass increment to use:</b>
                    <div style={{paddingBottom: 10}}>
                        <FormControl name="increment"
                                     onChange={this.props.onInputChange}
                                     value={this.props.state.increment}/>
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


ReactDOM.render(< WildcardApp/>, document.getElementById('app'));