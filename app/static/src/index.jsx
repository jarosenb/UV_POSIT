//import React from 'react';
var React = require('react');
import ReactDOM from 'react-dom';
//import Toggle from 'react-bootstrap-toggle';
//import * as BootstrapSelect from 'bootstrap-select'
//import 'bootstrap-select/dist/css/bootstrap-select.css'

import _ from 'underscore'

import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap-theme.css'
//import 'bootstrap/less/bootstrap.less';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Toggle from 'react-bootstrap-toggle';
import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css'

import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.min.css';

import update from 'immutability-helper';

//c3 import
import c3 from 'c3'
import 'c3/c3.min.css'

import $ from 'jquery'





class VizComponents extends React.Component {

    constructor(props){
        super(props)
        this.dataCallback = this.dataCallback.bind(this)
    }

    componentDidMount() {
        this.hot = new Handsontable(this.hotDiv, {
            data: [["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""]
            ],
            rowHeaders: true,
            colHeaders: true,
            stretchH: 'all',
            preventOverflow: 'horizontal'
        });

        this.chart = c3.generate({
            bindTo: this.c3Chart,
            legend: {position: 'right'},
            point: {
                show: false
            },
            axis: {
                x: {
                    type: 'category',
                    categories: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9']
                },
                y: {
                    padding: {bottom: 0}
                }
            },


            data: {



                columns: [
                    ['All ions'],
                    ['N-terminal'],
                    ['C-terminal']
                ]
            }
        });

        this.chart.hide(['N-terminal', 'C-terminal'])
    }

    dataCallback(data){
        console.log(data.C3data)
        console.log("HOT callback activated")
        this.hot.loadData(data.HOTdata);
        this.chart.load(data.C3data)
    }


    componentDidUpdate(){
        $.ajax({
         type: 'POST',
         context: this,
         // Provide correct Content-Type, so that Flask will know how to process it.
         contentType: 'application/json',
         // Encode data as JSON.
         data: JSON.stringify(this.props.state),
         // This is the type of data expected back from the server.
         dataType: 'json',
         url: '/updateTable',
         success: function (data) {
             this.dataCallback(data.result)
         },
         error: function(){
         callback(false)
         }
        });
    }

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        return (
         <div style={{width: '100%'}}>

            <div id="chart"
                 ref={chart => {
                this.c3Chart = chart;
            }}/>

            <div id="hot"
                 ref={hotdiv => {
                this.hotDiv = hotdiv;
            }}/>

            </div>

        );
    }


};

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


    runSearchCallback(result, modOptions){
        console.log('callback received')
        const newState = update(this.state, {
            searchResult: {$set: result}
        });
        this.setState({options: modOptions, searchResult: result})
    }

    runSearch(state) {

        //this.setState({options: state.modOptions})
        console.log("we're running the search!")
        console.log(state.sequence)


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
             console.log(data.result)
             this.runSearchCallback(data.result, state.modOptions)
         },
         error: function(){
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

    onModSelect(event){
        console.log(this.state.selectedMods);
        const modlist = event.map((k)=>k.value);
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
                    <VizComponents state={this.state}/>
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
                 if(data.result && this.state.masslistValidated){
                     this.props.runSearch(this.state)
             }},
            error: function(){
                 callback(false)
            }

         });
        // if both validated, send ajax post request to searcher
    }


    validateMasses(callback){

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
                 console.log("mass validation result: " + data.result)
                 this.setState(update(this.state, {masslistValidated: {$set: data.result}}))
                 if(data.result && this.state.sequenceValidated){
                     this.props.runSearch(this.state)
                 }
             },
            error: function(){
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
                               savefn = {this.validateMasses}
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


class ModalTemplate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showModal: false}
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
        this.save = this.save.bind(this)
        this.saveCallback = this.saveCallback.bind(this)
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    save() {
        console.log(this.props.savefn())
        alert('tried to close')
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
}
;


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

class ToggleButtonContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        var mystyle = {
            paddingBottom: 1
        }

        return (

            <div style={{paddingLeft: 15, paddingRight: 15}}>

                <Row className="show-grid">
                    <ButtonGroup justified style={mystyle}>
                        <ButtonGroup><Button onClick={this.props.axtoggle}
                                             bsStyle={this.props.state.all_ax ? 'success' : 'default'}>
                            toggle a/x</Button></ButtonGroup>
                        <ButtonGroup><Button onClick={this.props.bytoggle}
                                             bsStyle={this.props.state.all_by ? 'primary' : 'default'}>
                            toggle b/y</Button></ButtonGroup>
                        <ButtonGroup><Button onClick={this.props.cztoggle}
                                             bsStyle={this.props.state.all_cz ? 'danger' : 'default'}>
                            toggle c/z</Button></ButtonGroup>
                    </ButtonGroup>
                </Row>
                <Row className="show-grid">
                    <ButtonGroup justified style={mystyle}>
                        <ToggleButton name="a" title="a" tval={this.props.state.a}
                                      onIonToggle={this.props.onIonToggle}/>
                        <ToggleButton name="ap" title="a+1" tval={this.props.state.ap}
                                      onIonToggle={this.props.onIonToggle}/>
                        <ToggleButton name="x" title="x" tval={this.props.state.x}
                                      onIonToggle={this.props.onIonToggle}/>
                        <ToggleButton name="xp" title="x+1  " tval={this.props.state.xp}
                                      onIonToggle={this.props.onIonToggle}/>
                    </ButtonGroup>
                </Row>
                <Row className="show-grid">
                    <ButtonGroup justified style={mystyle}>
                        <ToggleButton name="b" title="b" tval={this.props.state.b}
                                      onIonToggle={this.props.onIonToggle}/>
                        <ToggleButton name="y" title="y" tval={this.props.state.y}
                                      onIonToggle={this.props.onIonToggle}/>
                        <ToggleButton name="ym" title="y-1" tval={this.props.state.ym}
                                      onIonToggle={this.props.onIonToggle}/>
                        <ToggleButton name="ymm" title="y-2  " tval={this.props.state.ymm}
                                      onIonToggle={this.props.onIonToggle}/>
                    </ButtonGroup>
                </Row>
                <Row className="show-grid">
                    <ButtonGroup justified style={mystyle}>
                        <ToggleButton name="c" title="c" tval={this.props.state.c}
                                      onIonToggle={this.props.onIonToggle}/>
                        <ToggleButton name="z" title="z" tval={this.props.state.z}
                                      onIonToggle={this.props.onIonToggle}/>
                        <Button href="#" disabled={true}></Button>
                        <Button href="#" disabled={true}></Button>
                    </ButtonGroup>
                </Row>
            </div>





        )
    }

}

class ToggleButton extends React.Component {
    constructor(props) {
        super(props)
        this.setColor = this.setColor.bind(this)
    }

    setColor() {
        if (!this.props.tval) {
            return 'default'
        }
        else {
            if (['a', 'x'].includes(this.props.name[0])) {
                return 'success'
            }
            if (['b', 'y'].includes(this.props.name[0])) {
                return 'primary'
            }
            if (['c', 'z'].includes(this.props.name[0])) {
                return 'danger'
            }
        }
    }

    render() {
        return (
            <ButtonGroup>
                <Button
                    bsStyle={this.setColor()}
                    onClick={() => this.props.onIonToggle(this.props.name)}
                    block={true}>
                    {this.props.title}
                </Button>
            </ButtonGroup>
        )
    }
}

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


ReactDOM.render(< IntensityApp/>, document.getElementById('app'));
