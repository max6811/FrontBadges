import React, { Component } from 'react';

import "./styles/BadgesList.css";
import { Link } from 'react-router-dom';


class BadgesList extends Component {
    render() {
        if (this.props.badges.length === 0) {
            return(
                <div>
                    <h3>No Badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create New Badge
                    </Link>
                </div>
            )
        }
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {
                        this.props.badges.map((badge) => {
                            return (
                                <li key={badge.id} >
                                    <br />
                                    <div className="BadgesList">
                                        <div className="BadgesListItem">
                                            <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="Logo-s" />
                                            <p>
                                                <b >{badge.firstName} {badge.lastName}</b>
                                                <br />
                                                <img alt="logo twitter" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAMFBMVEVHcEwdofIdofIdofIdofIdofIdofIdofIdofIdofIdofIdofIdofIdofIdofIdofKKRWesAAAAD3RSTlMAQxAjfq6SOsBf0eDvb1El5Gs5AAAAZElEQVQYlXWP2w7AIAhDi+J9G///t1Mkm1vieVBLKRFgizvZ9ROOp07Sic2DJGpBlHrCizTCuAahW1UfcRYugIIspCdsjGm06KzzwzcBxF9DD+WpD9Oe7VNmN7PLu1VhLn679A3VSQchdOreCgAAAABJRU5ErkJggg==" />
                                                <span style={{ color: "skyBlue" }} >@{badge.twitter}</span>
                                                <br />
                                                {badge.jobTitle}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default BadgesList;