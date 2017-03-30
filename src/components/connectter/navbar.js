import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">\
                    <div className="header menu-mov-green">
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#wcs-nav">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="#" className="navbar-brand fnt-cr wcs-brnd ">BCS</a>
                    </div>
                    <div className="collapse navbar-collapse" id="wcs-nav">
                        <ul className="nav navbar-nav navbar-right menu-red">
                            <li className="dropdown"><a href="" data-toggle="dropdown" className="t-white">Web Courses <span className="caret"></span></a>
                                <ul className="dropdown-menu menu-mov-green">
                                    <li><a href="html/index.html" className="">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                    <li><a href="#">JAVASCRIPT</a></li>
                                </ul>
                            </li>
                            <li><a href="">Blogs</a></li>
                            <li><a href="">Videos</a></li>
                            <li><a href="">Programs</a></li>
                            <li><a href="">Contect</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;