import React, { Component } from 'react';
class Main extends Component {
    render() {
        return (
            <div className="container-fluid bg-primary pd-15 mrgn-0">
                <div className="jumbotron container t-black t-center ">
                    <h2 className="bdr-b pd-15">Blood Bank</h2>
                    <form action="" className="">
                        <div className="form-group">
                            <label htmlFor="email">
                                <input type="email" id="email" placeholder="Email" className="form-control" />
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">
                                <input type="email" id="pwd" placeholder="Password" className="form-control" />
                            </label>
                        </div>
                        <button type="submit" className="btn btn-default red-blood t-white">Login</button>
                    </form>
                    <hr/>
                    <button type="btn" className="btn btn-default"> or Create new account</button>
                    <button type="btn" className="btn btn-default">Guest user click here</button>
                </div>
            </div>

        );
    }
}

export default Main;