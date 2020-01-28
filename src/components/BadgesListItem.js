import React, { Component } from 'react';

import Gravatar from '../components/Gravatar';

class BadgesListItem extends Component {
    render() {
        return (
            <div className="BadgesList">
                <div className="BadgesListItem">
                    <Gravatar
                        className="BadgesListItem__avatar"
                        email={this.props.badge.email}
                        alt="Logo-s"
                    />
                    <p>
                        <b >{this.props.badge.firstName} {this.props.badge.lastName}</b>
                        <br />
                        <img alt="logo twitter" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAMFBMVEVHcEwdofIdofIdofIdofIdofIdofIdofIdofIdofIdofIdofIdofIdofIdofIdofKKRWesAAAAD3RSTlMAQxAjfq6SOsBf0eDvb1El5Gs5AAAAZElEQVQYlXWP2w7AIAhDi+J9G///t1Mkm1vieVBLKRFgizvZ9ROOp07Sic2DJGpBlHrCizTCuAahW1UfcRYugIIspCdsjGm06KzzwzcBxF9DD+WpD9Oe7VNmN7PLu1VhLn679A3VSQchdOreCgAAAABJRU5ErkJggg==" />
                        <span style={{ color: "skyBlue" }} >@{this.props.badge.twitter}</span>
                        <br />
                        {this.props.badge.jobTitle}
                    </p>
                </div>
            </div>
        );
    }
}

export default BadgesListItem;