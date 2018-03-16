import React, { Component } from 'react';
import './Header.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateWizard } from '../../ducks/reducer';


class Header extends Component {

    componentDidMount(){
        axios.get('/auth/me').then(res => {
            // add user id to redux store
                let property = { ...this.props.wizard, user_id:res.data.id }
                this.props.updateWizard(property)
            if (res.data.username === "") { this.props.history.push('/') }
        })
    }

    handleLogout(){
        axios.post('/api/auth/logout').then(res => {
            console.log('handleLogout', res.data)
            this.props.history.push('/')
        })
    }

    render(){
        return (
            <div className='Header'>
                Header comp
            <button onClick={() => this.handleLogout()}>logout</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default withRouter(connect(mapStateToProps, {updateWizard:updateWizard})(Header))