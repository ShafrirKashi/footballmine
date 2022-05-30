import React from 'react'
import './PitchVis.css'
import percents from '../../Assets/Data/Precentage.json'

function PitchVis() {
  return (
    <div className="pitch-background">
        <div className="stats-wrapper">
            <div className="fieldP">{percents[0].mid}</div>
            <div className="OSix">{percents[0].close}</div>
            <div className="Center">{percents[0].sixteen}</div>
            <div className="SixLeft">{percents[0].left}</div>
            <div className="SixRight">{percents[0].right}</div>
        </div>
    </div>
  )
}

export default PitchVis