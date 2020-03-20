import React, { Component } from 'react';
import { ArcGauge, LinearGauge, RadialGauge } from '@progress/kendo-react-gauges';
import '@progress/kendo-theme-default/dist/all.css';



class GeneralScales extends React.Component {



    componentDidMount() {
        console.log("componentDidMount")
    }


    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="container3">
                        <ArcGauge color='rgb(180, 58, 150)' style={gaugeStyles} value={77} arcCenterRender={arcCenterRenderer} />
                        <a href="/allScales" className='general-button-wrapper'>
                            <span className='general-button'> All scales</span>
                        </a>
                    </div>
                </div>
            </div>

        );
    }

}

export default GeneralScales;


const arcCenterRenderer = (currentValue, color) => {
    return (
        <div className='arcCenterRenderer'  >
            <span style={{ marginTop: "20px", fontSize: '20px', fontWeight: 'bold', marginTop: '10px' }}>General <br /><span>health scale</span></span><br />
            <span style={{ color: 'black', textAlign: 'center', fontSize: '40px', fontWeight: 'bold' }}> {currentValue}</span>

        </div>
    );
};

const gaugeStyles = {
    display: 'block',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
};



