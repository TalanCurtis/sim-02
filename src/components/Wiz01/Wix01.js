import React, { Component } from 'react';
import WizTracker from '../WizTracker/WizTracker';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import axios from 'axios';

class Wiz01 extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

     handleCancel() {
        console.log('props', this.props)
        axios.get('/auth/me').then(res => {
            if (res.data.username === "") { this.props.history.push('/') }
            else { this.props.history.push('/Dashboard/' + res.data.id) }
        })
    }

    render(){
        return (
            <div>
                <Header />
                <div className="DashboardContainer">
    
                    <div className='Wiz'>
                        <div>
                            <div className='WizHeader'>
                                <h2>Add New Listing</h2>
                                <button onClick={() => this.handleCancel()}>Cancel</button>
                            </div>
                            <WizTracker step={this.props.match.path.split('/').pop() * 1} />
                        </div>
                        <div>
                            <div>
                                <h2>Name:</h2>
                                <input type="text" />
                            </div>
                            <div>
                                <h2>Description:</h2>
                                <input type="text" />
                            </div>
                            <div className="WizButtons">
                                <button >Previous Step</button>
                                <button >Next Step </button>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(Wiz01)