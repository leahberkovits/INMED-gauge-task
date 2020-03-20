import React, { Component } from 'react';
import { ArcGauge, LinearGauge, RadialGauge } from '@progress/kendo-react-gauges';
import '@progress/kendo-theme-default/dist/all.css';
import { GaugeCard } from './GaugeCard'


class AllScales extends React.Component {


    componentDidMount() {
        console.log("componentDidMount")
    }


    render() {
        return (
            <div className="wrapper">
                <div className="wrapper1">
                    <span>All scales</span>

                    <div className="wrapper2">
                        <GaugeCard value={66} color={'rgb(180, 58, 150)'} title='Monotoring' icon='heart' />
                        <GaugeCard value={77} color={'rgb(180, 58, 150)'} title='Physical activity' icon='activity' />
                        <GaugeCard value={88} color={'rgb(180, 58, 150)'} title='Medications' icon='medicine' />
                        <GaugeCard value={55} color={'rgb(180, 58, 150)'} title='Nutrition' icon='nutrition' />
                    </div>
                </div>
            </div>
        )
    }

}

export default AllScales;






