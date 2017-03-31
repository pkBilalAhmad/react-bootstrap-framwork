import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="">
                <nav className="navbar navbar-inverse bdr-r-0 mrgn-0  red-blood">
                    <div className="container">
                        <div className="header menu-mov-green">
                            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#wcs-nav">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="#" className="navbar-brand fnt-cr wcs-brnd t-white">Blood Bank</a>
                        </div>
                        <div className="collapse navbar-collapse" id="wcs-nav">
                            <ul className="nav navbar-nav navbar-right ">                                
                                <li className="bdr-l black "><a href="#" className="t-white hvr-white">Sign up</a></li>                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;