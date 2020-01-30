import React, { Component } from 'react';

import "./styles/BadgesList.css";
import { Link } from 'react-router-dom';
import BadgesListItem from './BadgesListItem';


class BadgesList extends Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
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
                                    <Link
                                        className="text-reset text-decoration-none"
                                        to={`/badges/${badge.id}/detail`}
                                    >
                                        <br />
                                        <BadgesListItem badge={badge} />
                                    </Link>
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