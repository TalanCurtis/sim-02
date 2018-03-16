import React from 'react';
import step_active from '../../images/step_active.png';
import step_inactive from '../../images/step_inactive.png';
import step_completed from '../../images/step_completed.png';

function WizTracker(props) {

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
            <div>
                <h2>Step {props.step}</h2>
            </div>
            <div className='Markers'>
                {stepMarker(1)}{stepMarker(2)}{stepMarker(3)}{stepMarker(4)}{stepMarker(5)}
            </div>

        </div>
    )
}

export default WizTracker