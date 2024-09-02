import '../styles/Components/Feature.css'
import React from 'react'


export default function Feature({ feature }) {
    return (
        <div className="feature-item">
            <img
                src={feature.src}
                alt={feature.altImg}
                className="feature-icon"
            />
            <h3 className="feature-item-title">{feature.title}</h3>
            <p>{feature.description}</p>
        </div>
    );
}
