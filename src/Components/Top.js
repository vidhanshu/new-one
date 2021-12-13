import React from 'react'

export default function Top(props) {
    return (
        <div className="top" >
            <div className="cover">
                <div className="info">
                    <h1 className="title">The Wartex : call of mission</h1>
                    <p className="availability">Available</p>
                    <p className="category">Action</p>
                    <button title="play now"> <i  className="fas fa-cloud" ></i>Play on cloud
                    </button><span title="download" className="fas fa-arrow-down"></span>
                </div>
                <div className="scroll-buttons">
                    <i title="prev" className="left fas fa-arrow-left"></i>
                    <i title="next" className="right fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}
