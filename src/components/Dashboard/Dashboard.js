import React, {Component} from 'react';
import axios from 'axios';

class Dashboard extends Component{

    componentDidMount(){
        console.log('mounted')
        axios.get('/auth/me').then(res =>{
            console.log('status',res.status)
            console.log('authMe res: ', res.data)
            if (res.data.username ===""){ this.props.history.push('/')}

        })
    }

    handleLogout(){
        axios.get('/api/logout').then(res=>{
            console.log('handleLogout', res.data)
            this.props.history.push('/')
        })
    }
    
    render(){
        return(
            <div className="Dashboard">
                Dashboard Comp
                <div>
                {JSON.stringify('hello')}
                <button onClick={()=>this.handleLogout()}>logout</button>
                </div>
                
            </div>
        )
    }
}

export default Dashboard