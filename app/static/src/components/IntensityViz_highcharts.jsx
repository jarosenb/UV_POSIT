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

import _ from 'lodash'

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
            rowHeaders: false,
            colHeaders: true,
            stretchH: 'all',
            preventOverflow: 'horizontal'
        });

        this.chart = Highcharts.chart(this.highchart, {

            title: {
                text: 'Fragment Abundance Map'
            },

            credits: {
                enabled: false
            },

            yAxis: {
                title: {
                    text: 'Normalized Abundance'
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
                data: [],
            }, {
                name: 'N-terminal',
                data: [],
                color: '#ff7f0e',
                visible: false
            }, {
                name: 'C-terminal',
                data: [],
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
        console.log(this.props.state.selectedMods)
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

             xAxis: {
                    categories: this.props.state.searchResult['sequence'], title: {text: 'Residue'}},
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


        let hotData = dataMatrix.valueOf()
        hotData = [this.props.state.searchResult.sequence]
            .concat([_.range(1, this.props.state.searchResult.sequence.length + 1)])
            .concat(hotData);
        hotData = _.zip.apply(_, hotData)
        hotData = [this.props.state.searchResult.titles].concat(hotData)

        this.hot.loadData(hotData)

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
