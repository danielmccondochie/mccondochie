import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-xs-1 p-l-0 p-r-0 collapse in" id="sidebar">
                        <div className="list-group panel">
                            <a href="#menu1" className="list-group-item collapsed" data-toggle="collapse"
                               data-parent="#sidebar" aria-expanded="false"><i className="fa fa-dashboard"></i> <span
                                className="hidden-sm-down">Item 1</span> </a>
                            <div className="collapse" id="menu1">
                                <a href="#menu1sub1" className="list-group-item" data-toggle="collapse"
                                   aria-expanded="false">Subitem 1 </a>
                                <div className="collapse" id="menu1sub1">
                                    <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 1 a</a>
                                    <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 2 b</a>
                                    <a href="#menu1sub1sub1" className="list-group-item" data-toggle="collapse"
                                       aria-expanded="false">Subitem 3 c </a>
                                    <div className="collapse" id="menu1sub1sub1">
                                        <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem 3
                                            c.1</a>
                                        <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem 3
                                            c.2</a>
                                    </div>
                                    <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 4 d</a>
                                    <a href="#menu1sub1sub2" className="list-group-item" data-toggle="collapse"
                                       aria-expanded="false">Subitem 5 e </a>
                                    <div className="collapse" id="menu1sub1sub2">
                                        <a href="#" className="list-group-item" data-parent="#menu1sub1sub2">Subitem 5
                                            e.1</a>
                                        <a href="#" className="list-group-item" data-parent="#menu1sub1sub2">Subitem 5
                                            e.2</a>
                                    </div>
                                </div>
                                <a href="#" className="list-group-item" data-parent="#menu1">Subitem 2</a>
                                <a href="#" className="list-group-item" data-parent="#menu1">Subitem 3</a>
                            </div>
                            <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i
                                className="fa fa-film"></i> <span className="hidden-sm-down">Item 2</span></a>
                            <a href="#menu3" className="list-group-item collapsed" data-toggle="collapse"
                               data-parent="#sidebar" aria-expanded="false"><i className="fa fa-book"></i> <span
                                className="hidden-sm-down">Item 3 </span></a>
                            <div className="collapse" id="menu3">
                                <a href="#" className="list-group-item" data-parent="#menu3">3.1</a>
                                <a href="#menu3sub2" className="list-group-item" data-toggle="collapse"
                                   aria-expanded="false">3.2 </a>
                                <div className="collapse" id="menu3sub2">
                                    <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 a</a>
                                    <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 b</a>
                                    <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 c</a>
                                </div>
                                <a href="#" className="list-group-item" data-parent="#menu3">3.3</a>
                            </div>
                            <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i
                                className="fa fa-heart"></i> <span className="hidden-sm-down">Item 4</span></a>
                            <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i
                                className="fa fa-list"></i> <span className="hidden-sm-down">Item 5</span></a>
                            <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i
                                className="fa fa-clock-o"></i> <span className="hidden-sm-down">Link</span></a>
                            <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i
                                className="fa fa-th"></i> <span className="hidden-sm-down">Link</span></a>
                            <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i
                                className="fa fa-gear"></i> <span className="hidden-sm-down">Link</span></a>
                            <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i
                                className="fa fa-calendar"></i> <span className="hidden-sm-down">Link</span></a>
                            <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i
                                className="fa fa-envelope"></i> <span className="hidden-sm-down">Link</span></a>
                            <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i
                                className="fa fa-bar-chart-o"></i> <span className="hidden-sm-down">Link</span></a>
                            <a href="#" className="list-group-item collapsed" data-parent="#sidebar"><i
                                className="fa fa-star"></i> <span className="hidden-sm-down">Link</span></a>
                        </div>
                    </div>
                    <main className="col-md-9 col-xs-11 p-l-2 p-t-2">
                        <a href="#sidebar" data-toggle="collapse"><i className="fa fa-navicon fa-lg"></i></a>

                            <div className="page-header">
                                <h1>Bootstrap 4 Sidebar Menu</h1>
                            </div>
                            <p className="lead">A responsive, multi-level vertical accordion.</p>
                    </main>
                </div>
            </div>
        );
    }
}

export default Sidebar;