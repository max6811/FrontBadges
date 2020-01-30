import React from 'react';

import { Link } from 'react-router-dom';


import './styles/BadgeDetail.css'
import confLogo from '../images/platziconf-logo.svg';

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';


function BadgeDetails(props) {

    const badge = props.badge;
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6" >
                            <img src={confLogo} alt="logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {badge.firstName} {badge.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            jobTitle={badge.jobTitle}
                            email={badge.email}
                            twitter={badge.twitter}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                                Edit
                                </Link>
                        </div>
                        <div>
                            <button
                                onClick={props.onOpenModal}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                            <DeleteBadgeModal
                            onDeleteBadge={props.onDeleteBadge}
                                isOpen={props.modalIsOpen}
                                onClose={props.onCloseModal}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BadgeDetails;