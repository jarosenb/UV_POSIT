import React from 'react';
import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well
} from 'react-bootstrap';

import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.min.css';

//Highcharts import
import Highcharts from 'highcharts'
import 'highcharts/css/highcharts.css'

import update from 'immutability-helper';


class HEMVis extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRow: 1
        }

    }

    componentDidMount() {
        this.hot = new Handsontable(this.hotDiv, {
            data: this.props.state.data.map(function (d) {
                return {
                    pos: d.pos,
                    charge: d.charge,
                    res: d.res,
                    hem: d.hem,
                    hem_hb: d.hem_hb,
                    hem_nhb: d.hem_nhb,
                    score: d.score,
                    warn: d.warn,
                    button: 'Visualize Fitting'
                }
            }),

            afterSelection: (row, col) => {
                console.log("row: " + row + " col: " + col)
                if(col === 8 && row > 0){
                this.setState(update(this.props.state, {
                    selectedRow: {$set: row}
                }))}

            }
            ,


            stretchH: "all"

        });


        this.chart = Highcharts.chart(this.highchart, {
            chart: {
                type: 'column'
            },

            title: {
                text: 'Isotope Fitting'
            },

            credits: {
                enabled: false
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

            series: [{name: 'Experimental', data: []},{name: 'Theoretical', data: []} ]

        });
    }


    componentDidUpdate() {
        const theoList = this.props.state.data[this.state.selectedRow].peaksTheo;
        const expList = this.props.state.data[this.state.selectedRow].peaksExp;
        const masses = this.props.state.data[this.state.selectedRow].masses;
        while(this.chart.series.length > 0) {
            this.chart.series[0].remove(true);
        }

        this.chart.addSeries({name: 'Experimental', data: expList, stack: 'Experimental'}, false)
        this.chart.addSeries({name: 'Theoretical', data: theoList, stack: 'Theoretical'})

        this.chart.update({xAxis: {categories: masses}})

        this.hot.loadData(this.props.state.data.map(function (d) {
                return {
                    pos: d.pos,
                    charge: d.charge,
                    res: d.res,
                    hem: d.hem,
                    hem_hb: d.hem_hb,
                    hem_nhb: d.hem_nhb,
                    score: d.score,
                    warn: d.warn,
                    button: 'Click to Visualize'
                }
            }))



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

export default HEMVis