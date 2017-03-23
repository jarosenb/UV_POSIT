import React from 'react';
import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well
} from 'react-bootstrap';

var core = require('mathjs/core');
var math = core.create();
math.import(require('mathjs/lib/type/matrix'));
math.import(require('mathjs/lib/function/matrix'));
math.import(require('mathjs/lib/function/arithmetic'));

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
        this.updateChart = this.updateChart.bind(this)
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
                text: 'Fragmentation Intensity Map'
            },

            xAxis: {
                categories: ['hey', 'hi', 'hello']
            },

            yAxis: {
                title: {
                    text: 'Normalized Intensity'
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
        let apoMatrix = math.matrix(this.props.state.searchResult.apo);
        let dataMatrix = math.zeros(math.size(apoMatrix));
        let matrices_to_add = []
        switch(this.props.state.activeKey){
            case 1: //all
                matrices_to_add = this.props.state.selectedMods.map(
                    (m) => math.matrix(this.props.state.searchResult[m]));

                matrices_to_add.forEach(
                    (m) => dataMatrix = math.add(dataMatrix, m)
                );
                dataMatrix = math.add(dataMatrix, apoMatrix)

                break;
            case 2: //apo
                dataMatrix = apoMatrix;
                break;

            case 3: //holo
                case 1: //all
                matrices_to_add = this.props.state.selectedMods.map(
                    (m) => math.matrix(this.props.state.searchResult[m]));

                matrices_to_add.forEach(
                    (m) => dataMatrix = math.add(dataMatrix, m)
                );

                break;
        }

        const hcData = dataMatrix.valueOf()

        this.chart.update({
            series: [{
                name: 'All ions',
                data: hcData[0]
                },
                {name: 'N-terminal',
                data: hcData[1]
                },
                {name: 'C-terminal',
                data: hcData[2]
                }
            ]
        })


    }

    updateChart(dataObject){
        this.chart.update(dataObject)
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
