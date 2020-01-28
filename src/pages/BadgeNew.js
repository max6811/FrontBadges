import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import maxAvatar from "../images/max.jpg";

import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component {
	state = {
		loading: false,
		error: null,
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: '',
		}
	};
	handleChange = (e) => {
		// const formCon = this.state.form;
		// formCon[e.target.name] = e.target.value;
		this.setState({
			// form: formCon
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = async e => {
		e.preventDefault()
		try {
			await api.badges.create(this.state.form);
			this.setState({ loading: false });
			this.props.history.push('/badges');
		} catch (error) {
			this.setState({ loading: false, error: error })
		}

	}
	render() {
		if (this.state.loading) {
			return <PageLoading />
		}

		return (
			<React.Fragment>
				<div className='BadgeNew__hero'>
					<img className='BadgeNew__hero-image img-fluid' src={header} alt='Logo' />
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<Badge
								firstName={this.state.form.firstName || 'FIRST_NAME'}
								lastName={this.state.form.lastName || 'LAST_NAME'}
								jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
								email={this.state.form.email || 'EMAIL'}
								twitter={this.state.form.twitter || 'TWITTER'}
								avatar={maxAvatar}
							/>
						</div>
						<div className='col-6'>
							<h1>New Attendant</h1>
							<BadgeForm
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								formValues={this.state.form}
								error={this.state.error}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew;
