import React, { Component } from 'react';
import './Nav.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse, Navbar, NavbarBrand} from 'reactstrap';

class Nav extends Component {

    constructor(props) {
        super(props);

        this.toggleMenubar = this.toggleMenubar.bind(this);
        this.toggleSettingsbar = this.toggleSettingsbar.bind(this);
        this.state = {
            menuCollapsed: true,
            settingsCollapsed: true
        };
    }

    toggleMenubar() {

        if (this.state.settingsCollapsed === false) {
            this.setState({
                settingsCollapsed: !this.state.settingsCollapsed,
                menuCollapsed: !this.state.menuCollapsed
            });
        } else {
            this.setState({
                menuCollapsed: !this.state.menuCollapsed
            });
        }
    }

    toggleSettingsbar() {

        if (this.state.menuCollapsed === false) {
            this.setState({
                menuCollapsed: !this.state.menuCollapsed,
                settingsCollapsed: !this.state.settingsCollapsed
            });
        } else {
            this.setState({
                settingsCollapsed: !this.state.settingsCollapsed
            });
        }
    }

    render() {
        return (
            <Navbar className="d-flex justify-content-between navbar-fixed-top" color="faded" light>
                <Button className="fa fa-user fa-lg m-1" id="menuButton" onClick={this.toggleMenubar}> </Button>
                <NavbarBrand id="brand" href="/" className="m-auto">McCondochie</NavbarBrand>
                <Button className="fa fa-cog fa-lg m-1" id="settingsButton" onClick={this.toggleSettingsbar}> </Button>
                <Collapse isOpen={!this.state.menuCollapsed} navbar>
                    <div className="d-flex align-items-start justify-content-md-start justify-content-sm-center">
                        <div className="col-xs-10 col-sm-8 col-md-4">
                            <Card id="cardMenu" className="">
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Collapse>
                <Collapse isOpen={!this.state.settingsCollapsed} navbar>
                    <div className="d-flex align-items-start justify-content-md-end justify-content-sm-center">
                        <div className="col-xs-10 col-sm-8 col-md-4">
                            <Card id="cardMenu" className="">
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Collapse>
            </Navbar>
        );
    }
}

export default Nav;