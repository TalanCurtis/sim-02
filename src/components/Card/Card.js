import React from 'react';
import './Card.css';

function Card (props){
    return(
        <div className="Card">
            <div className="Image">
                <img src={props.info.image} alt="" height='100px' width='100px'/>
            </div>
            <div className='Title'>
                <h2>Name:{props.info.name}</h2>
                <h2>Description:{props.info.description}</h2>
            </div>
            <div className='Info'>
                <h2>Loan:{props.info.loan}</h2>
                <h2>Monthly Mortgage:{props.info.name}</h2>
                <h2>Recommended Rent:{props.info.recommended_rent}</h2>
                <h2>Desired Rent:{props.info.desired_rent}</h2>
                <h2>Address:{props.info.address}</h2>
                <h2>City:{props.info.city}</h2>
                <h2>State:{props.info.state}</h2>
                <h2>Zip:{props.info.zip}</h2>
            </div>
        </div>
    )
}

export default Card