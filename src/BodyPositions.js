import React, { Component } from 'react'
import './BodyPositions.css'

class BodyPositions extends Component {
    render() {
        return (
            <div className="body-positions">
                <img 
                    className="nine-positions" 
                    src="https://balletclassroom.files.wordpress.com/2012/03/ballet-8-positions-of-the-body-large.jpg"
                    alt="nine positions of the body" 
                />
            </div>
        )
    }
}

export default BodyPositions