import React, { Component } from 'react';
import { ArcGauge, LinearGauge, RadialGauge } from '@progress/kendo-react-gauges';
import '@progress/kendo-theme-default/dist/all.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faHeart,faArrowsAltH,faAppleAlt,faTablets
} from "@fortawesome/free-solid-svg-icons";

export class GaugeCard extends React.Component {


    componentDidMount() {
        console.log("componentDidMount")
    }


    render() {
        return (
            <div className="gauge-card-wrapper">
                <div className='gauge-card-icon'>
                    <div className='gauge-card-icon-wrapper'>
                        <div className='icon'>
                            <FontAwesomeIcon color='rgb(145, 112, 136)' size='1x' icon={this.props.icon=='heart'?faHeart:(this.props.icon=='activity'?faArrowsAltH:(this.props.icon=='medicine'?faTablets:(this.props.icon=='nutrition'?faAppleAlt:'')))} />
                        </div>
                    </div>
                </div>
                <div className='gauge-card-title'>{this.props.title}</div>
                <div className='gauge-card-gauge'>
                    <ArcGauge color={this.props.color}  style={gaugeStyles} value={this.props.value} arcCenterRender={arcCenterRenderer} />
                </div>
                <div className='gauge-card-buttom'><span>More</span></div>
            </div>

        );
    }

}

export default GaugeCard;



const arcCenterRenderer = (currentValue, color) => {
    return (<h2 style={{ color: color,textAlign:'center' }}>{currentValue}</h2>);
};

const gaugeStyles = {
    display: 'block',
    height: '100px'
};



