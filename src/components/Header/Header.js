import React, { Component } from 'react';
import './Header.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Header extends Component {

    componentDidMount(){
        axios.get('/auth/me').then(res => {
            console.log('status', res.status)
            console.log('authMe res: ', res.data)
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

export default withRouter(Header)