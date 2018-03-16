import React, { Component } from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            error: false
        }
    }

    handleLogin() {
        // console.log('handle login')
        let { username, password } = this.state
        // Create body to send in the post
        let body = {
            username: username,
            password: password
        }
        // console.log('body to sign in', body)
        // make a call to the api
        axios.post('/api/auth/login', body)
            // if i get a good response run then
            .then(res => { console.log('login response: ', res.data); this.props.history.push(`/Dashboard/${res.data.id}`) })
            // if its an error or bad response run catch
            .catch(() => { this.setState({ error: true }) })
    }

    handleRegister() {
        // console.log('handle register')
        let { username, password } = this.state
        // Create body to send in the post
        let body = {
            username: username,
            password: password
        }
        // console.log('body: ', body)
        axios.post('/api/auth/register', body)
            .then(res => { console.log('login response: ', res.data); this.props.history.push(`/Dashboard/${res.data.id}`) })
            // if its an error or bad response run catch
            .catch(() => {
                this.setState({ error: true })
            })
    }

    render() {
        let disabled = !!this.state.username && !!this.state.password
        // console.log(disabled)
        return (
            <div className="Auth">
                {/* <img src={logo} alt=''></img> */}
                <div>
                    <h2>User Name</h2>
                    <input type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                    <h2>Password</h2>
                    <input type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    <div>
                        <button disabled={!disabled} onClick={() => (this.handleLogin())}>Login</button>
                        <button disabled={!disabled} onClick={() => (this.handleRegister())}>Register</button>
                    </div>
                    {this.state.error ? <h3>Error: Wrong name or Password.</h3> : null}
                </div>
            </div>
        )
    }
}

export default Auth