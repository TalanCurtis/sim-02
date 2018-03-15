import React from 'react';
import step_active from '../../images/step_active.png';
import step_inactive from '../../images/step_inactive.png';
import step_completed from '../../images/step_completed.png';

function WizTracker (props){

    function stepMarker(step) {
        if (step === props.step) {
            return (<img src={step_active} alt="" />)
        } else if (step <= props.step) {
            return (<img src={step_completed} alt="" />)
        } else if (step >= props.step) {
            return (<img src={step_inactive} alt="" />)
        }
    }

        return (
            <div className="WizTracker">
                <h1>Step {props.step}</h1>
                <div className='Markers'>
                    {stepMarker(1)}{stepMarker(2)}{stepMarker(3)}{stepMarker(4)}{stepMarker(5)}
                </div>

            </div>
        )
}

export default WizTracker