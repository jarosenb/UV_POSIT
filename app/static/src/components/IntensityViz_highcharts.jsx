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

//Highcharts import
import Highcharts from 'highcharts'
import 'highcharts/css/highcharts.css'

import $ from 'jquery'


class IntensityViz extends React.Component {

    constructor(props) {
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
            preventOverflow: 'horizontal'
        });

        this.chart = Highcharts.chart(this.highchart, {

            title: {
                text: 'Solar Employment Growth by Sector, 2010-2016'
            },

            subtitle: {
                text: 'Source: thesolarfoundation.com'
            },

            xAxis: {
                categories: ['hey', 'hi', 'hello']
            },

            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            series: [{
                name: 'All ions',
                color: '#1f77b4',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
            }, {
                name: 'N-terminal',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
                color: '#ff7f0e',
                visible: false
            }, {
                name: 'C-terminal',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
                color: '#2ca02c',
                visible: false
            }]

        });
    }

    dataCallback(data) {
        this.hot.loadData(data.HOTdata);
        this.chart.update(data.HighchartsData)
    }


    componentDidUpdate() {
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
            error: function () {
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
                         this.highchart = chart;
                     }}/>

                <div id="hot"
                     ref={hotdiv => {
                         this.hotDiv = hotdiv;
                     }}/>

            </div>

        );
    }


}
;

export default IntensityViz
