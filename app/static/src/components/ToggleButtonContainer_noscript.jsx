import React from 'react';
import {
    Modal, Popover, Tooltip, Button,
    OverlayTrigger, Grid, Row, Col, Clearfix, FormControl,
    ButtonGroup, DropdownButton, MenuItem, InputGroup, ListGroup,
    ListGroupItem, Glyphicon, ButtonToolbar, Nav, NavItem, Well
} from 'react-bootstrap';


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
                        <ToggleButton name="a" title="aaa" tval={this.props.state.a}
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

export default ToggleButtonContainer