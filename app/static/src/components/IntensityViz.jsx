import React from 'react';
import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well
} from 'react-bootstrap';

//HOT import
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.min.css';

//c3 import
import c3 from 'c3'
import 'c3/c3.min.css'

import $ from 'jquery'


class IntensityViz extends React.Component {

    constructor(props){
        super(props);
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
            height: 600,
            preventOverflow: 'false'
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
        this.hot.loadData(data.HOTdata);
        this.chart.load(data.C3data)
    }


    componentDidUpdate(){
        $.ajax({
         type: 'GET',
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

export default IntensityViz
