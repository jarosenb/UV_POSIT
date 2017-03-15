//import React from 'react';
var React = require('react');
import ReactDOM from 'react-dom';
//import Toggle from 'react-bootstrap-toggle';
//import * as BootstrapSelect from 'bootstrap-select'
//import 'bootstrap-select/dist/css/bootstrap-select.css'
import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css';

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

import AwesomeComponent from './BackgroundImage.jsx'

import octicons from 'octicons'


const ParentComponent2 = React.createClass({
    getInitialState(){
        return {
            mydata: [["", "Ford", "Volvo", "Toyota", "Honda"],
                ["2025", 10, 11, 12, 13],
                ["2017", 20, 11, 14, 13],
                ["2018", 30, 15, 12, 13]
            ]
        }
    },

    updateHOTdata(){
        this.setState({
            mydata: [["", "Ford", "Volvo", "Toyota", "Honda"],
                ["whatever", 10, 11, 12, 13],
                ["2017", 20, 11, 14, 13],
                ["2018", 30, 15, 12, 13]
            ]
        })
    },

    render(){
        return (
            <div>
                <Button bsStyle="primary" onClick={this.updateHOTdata} block>click me </Button>
                <HOTnoReact data={this.state.mydata}/>
            </div>
        )
    }

});

const HOTnoReact = React.createClass({

    componentDidMount() {
        this.hot = new Handsontable(this.hotDiv, {
            data: this.props.data,
            rowHeaders: true,
            colHeaders: true,
            dropdownMenu: true
        });
    },

    componentDidUpdate(){
        this.hot.loadData(this.props.data)
    },

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        return (
            <div id="hot" ref={hotdiv => {
                this.hotDiv = hotdiv;
            }}/>
        );
    }
});

const ModalContainerContainer = React.createClass({
    render(){
        return (
            <Grid>
                <ModalContainer/>
                <ParentComponent/>
            </Grid>
        )
    }
})

class ModalContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sequence: "",
            ppm: "",
            tolType: "PPM"
        }
    }

    save(){
        this.setState(update(this.state, {Form1Validated: {$set: true}}));

    }

    save2(){
        this.setState(update(this.state, {Form2Validated: {$set: true}}));
        this.f2.close()
    }


    handleChange(event){
        console.log(this.state)
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        var fd = this.state.formdata;
        fd[name] = value;
        console.log(fd)
        this.setState(this.state);

    }

    render(){

        const sf = <SeqForm val1={this.state.formdata.seq}
                            val2={this.state.formdata.seq2}
                            handleChange={this.handleChange}/>

        return (
            <div>
                <ModalTemplate ref={(Form1) => {
                    this.f1 = Form1
                }}
                               title="form 1" child={sf}
                               save={this.save}
                />
                <ModalTemplate ref={(Form2) => {
                    this.f2 = Form2
                }}
                               title="form 2" child="hello 2"
                               save={this.save2}
                />
            </div>
        )
    }

};

const ModalTemplate = React.createClass({
    getInitialState() {
        return {showModal: false};
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    render() {
        return (
            <div>
                <p>Click to get the full Modal experience!</p>

                <Button bsStyle="primary" bsSize="large" onClick={this.open} block>
                    {this.props.title}
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.child}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button bsStyle="primary" onClick={this.props.save}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

const SeqForm = React.createClass({

    mymethod(){
        alert('hi')
    },


    render(){

        var options = [
            {value: 'one', label: 'One'},
            {value: 'two', label: 'Two'}
        ];

        return (
            <div>
                <Row className="show-grid">
                    <Col md={6}>
                        <Button bsStyle="primary" block>hi</Button>

                        Is going:
                        <FormControl
                            name="seq"
                            type="text"
                            value={this.props.val1}
                            onChange={this.props.handleChange}/>

                    </Col>
                    <Col md={6}>

                        Number of guests:
                        <FormControl
                            name="seq2"
                            type="text"
                            value={this.props.val2}
                            onChange={this.props.handleChange}/>

                    </Col>
                </Row>
                <Row className="show-grid">
                    <select className="selectpicker">
                        <option>Mustard</option>
                        <option>Ketchup</option>
                        <option>Relish</option>
                    </select>
                </Row>

            </div>

        )
    }

});


class IonToggle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Toggle
                //onClick={()=> this.onToggle('k')}
                on={this.props.name}
                off={this.props.name}
                onstyle="success"
                offstyle="default"
                onClick={() => this.props.onToggle(this.props.name)}
                active={this.props.state}
            />
        )
    }

}

class ToggleArray extends React.Component {
    constructor(props) {
        super(props);
        this.state = {a: true, b: true};
        this.onToggle = this.onToggle.bind(this)
    }

    onToggle(name) {
        const newState = update(this.state, {
            [name]: {$set: !this.state[name]}
        });
        console.log(newState)

        this.setState(newState)

    }

    render() {
        return (
            <div>
                <IonToggle name="a" state={this.state["a"]} onToggle={this.onToggle}/>
                <IonToggle name="b" state={this.state["b"]} onToggle={this.onToggle}/>
            </div>
        );
    }
}


class PPMInput extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
                    <InputGroup>
                        <FormControl name="inputval" type="text" value={this.props.TolValue} onChange={this.props.inputonChange}/>
                        <DropdownButton componentClass={InputGroup.Button} title={this.props.TolType}
                                        id="bg-nested-dropdown">
                            <MenuItem value="ppm" eventKey="PPM" onSelect={this.props.dropdownonChange}>PPM</MenuItem>
                            <MenuItem value="ppm" eventKey="Da" onSelect={this.props.dropdownonChange}>Da</MenuItem>
                        </DropdownButton>
                    </InputGroup>


        );
    }
};

class PPMTest extends React.Component {
    constructor(props){
        super(props);
        this.state={inputval: "10", toltype: "PPM"};
        this.dropdownonChange = this.dropdownonChange.bind(this);
        this.inputonChange = this.inputonChange.bind(this);
    }

    inputonChange(e){
        const newState  = update(this.state, {
            [e.target.name]: {$set: e.target.value}
        });
        this.setState(newState);
    }

    dropdownonChange(e){
        const newState  = update(this.state, {
            toltype: {$set: e}
        });
        this.setState(newState);

    }

    render(){
        return(
            <Grid>
                <PPMInput TolValue={this.state.inputval}
                          TolType={this.state.toltype}
                          inputonChange={this.inputonChange}
                          dropdownonChange={this.dropdownonChange}/>
            </Grid>
        )
    }
}


const C3test = React.createClass({

    componentDidMount() {
        this.chart = c3.generate({
            bindTo: this.c3Chart,
            data: {
                columns: [
                    ['data1', 100, 200, 150, 300, 200],
                    ['data2', 400, 500, 250, 700, 300],
                ]
            }
        });
    },

    clickme(){
        this.chart.load({
        columns:[
            ['data4', 30, 20, 50, 40, 60, 50,100,200]
        ],

        type: 'bar',
            unload: ['data1', 'data2']
    });
    },

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        return (
            <div>
            <div id="chart" ref={chart => {
                this.c3Chart = chart;
            }}/>
                <Button onClick={this.clickme}>Click me </Button>
            </div>
        );
    }
});


class ModListItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <ListGroupItem key={this.props.id}>
                {this.props.content}
                <span className="pull-right"><button className="btn btn-xs btn-default">
                </button></span></ListGroupItem>
        )
    }
}

class TokenTest extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
             <div>
                 <AwesomeComponent/>
                 <ModListItem key="1" content="hi"/>
                 <Glyphicon glyph="remove" />
             </div>
        )
    }
};





ReactDOM.render(< TokenTest />, document.getElementById('app'));
