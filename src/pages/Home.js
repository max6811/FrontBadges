import React, { Component } from 'react';

import Logo_conf from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';
import './styles/Home.css';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Home">
                   <div className="container">
                        <div className="row">
                            <div className="Home__col col-6">
                                <img 
                                    src={Logo_conf} 
                                    alt="logo del home" 
                                />
                                <h1 className="text-uppercase">Print Your Badges</h1>
                                <p>The easiest way to manage your conference</p>
                                <Link to="/badges" className="btn btn-primary">Start Now</Link>
                            </div>
                            <div className="Home__col col-6">
                                <img 
                                        src={astronauts}
                                        alt="astronautas"
                                    />
                            </div>
                        </div>
                   </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;