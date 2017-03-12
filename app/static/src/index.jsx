import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import Toggle from 'react-bootstrap-toggle';
import * as BootstrapSelect from 'bootstrap-select'
import 'bootstrap-select/dist/css/bootstrap-select.css'
import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css'


import Select from 'react-select';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';


import Toggle from 'react-bootstrap-toggle';
import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css'

import moment from 'moment';
import numbro from 'numbro';
import pikaday from 'pikaday';
import Zeroclipboard from 'zeroclipboard';
import Handsontable from 'handsontable';
import HotTable from 'react-handsontable';

import 'handsontable/dist/handsontable.full.css';

import update from 'immutability-helper';

//c3 import
import c3 from 'c3'
import 'c3/c3.css'


const ParentComponent = React.createClass({
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

const ModalContainer = React.createClass({
    getInitialState(){
        return {
            Form1Validated: false, Form2Validated: false,
            formdata: {seq: 'hi', seq2: 'k'}
        }
    },

    save(){
        this.setState(update(this.state, {Form1Validated: {$set: true}}));

    },

    save2(){
        this.setState(update(this.state, {Form2Validated: {$set: true}}));
        this.f2.close()
    },


    componentDidUpdate(){
        console.log(this.state)
        if (this.state.Form1Validated && this.state.Form2Validated) {
            alert("both validated");
        }
    },

    handleChange(event){
        console.log(this.state)
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        var fd = this.state.formdata;
        fd[name] = value;
        console.log(fd)
        this.setState(this.state);

    },

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

});

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


var ValuesAsBooleansField = React.createClass({
    displayName: 'ValuesAsBooleansField',
    propTypes: {
        label: React.PropTypes.string
    },
    getInitialState () {
        return {
            TolType: "PPM"
        };
    },
    onChange(event) {
        this.setState({TolType: event})
    },
    render () {
        return (
            <Grid>
                <Col md={4}>
                    <InputGroup>
                        <FormControl type="text"/>
                        <DropdownButton componentClass={InputGroup.Button} title={this.state.TolType}
                                        id="bg-nested-dropdown">
                            <MenuItem value="ppm" eventKey="PPM" onSelect={this.onChange}>PPM</MenuItem>
                            <MenuItem value="ppm" eventKey="Da" onSelect={this.onChange}>Da</MenuItem>
                        </DropdownButton>
                    </InputGroup>
                </Col>
            </Grid>





        );
    }
});


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

class UpdateDemoParent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            s1: true,
            s2: {
                a: true,
                b: true
            }
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.checked;

        const newState = update(this.state, {
            s2: {
                [name]: {$set: value}
            }
        })
        console.log(newState);
        this.setState(newState)
    }

    render(){
        return(
            <div>
                cb1: <input type="checkbox" name="a" checked={this.state.s2.a} onChange={this.handleChange}/>
                <br/>
                cb2: <input type="checkbox" name="b" checked={this.state.s2.b} onChange={this.handleChange}/>
            </div>
        )
    }
}





ReactDOM.render(< C3test />, document.getElementById('app'));
