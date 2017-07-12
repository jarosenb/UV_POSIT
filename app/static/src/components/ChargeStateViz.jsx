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


class ChargeStateViz extends React.Component {

    constructor(props) {
        super(props);

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
            chart: {
        type: 'column'
    },

            title: {
                text: 'Charge State Contributions'
            },

            credits: {
                enabled: false
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

            plotOptions: {
        column: {
            stacking: 'percent'
        }
    },

            series: [{name: '1+', data: []}]

        });
    }


    componentDidUpdate() {
        this.chart.destroy()

        let activeData = '';
        let activeData_hot = ''

        switch(this.props.state.activeKey){
            case 1:
                activeData = 'nterm_chart';
                activeData_hot = 'nterm_hot'
                break;
            case 2:
                activeData = 'cterm_chart';
                activeData_hot = 'cterm_hot'
                break;
        }

        this.chart = Highcharts.chart(this.highchart, {
            chart: {
        type: 'column'
    },

            title: {
                text: 'Charge State Visualization'
            },

            credits: {
                enabled: false
            },

            xAxis: {
                categories: this.props.state.searchResult['sequence']
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

            plotOptions: {
        column: {
            stacking: 'percent'
        }
    },

            series: this.props.state.searchResult[activeData]

        });

    this.hot.loadData(this.props.state.searchResult[activeData_hot])


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


};

export default ChargeStateViz