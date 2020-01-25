import React from 'react';

import error from '../images/error.jpg';
import './styles/Home.css';

function NotFound(props) {
    return (
        <React.Fragment>
            <div className="Home">
                <div className="error_info col-12">
                    <img
                        src={error}
                        className="imgRedonda"
                        alt=" img redonda"
                        />
                    <h1>404: Not Found</h1>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NotFound;