import React from 'react'
import Cloud from './Cloud';
import Games from "./Games";
import Settings from './Settings';
import Home from "./Home";
import Fav from "../API/favorite";
var count = 0;
export default function Body(props) {
  
    return (
        <>
            <div className="container">
                <div className="side-bar-container">
                    {/*                 <!-- just to make space on left for fixed nav bar -->
 */}            </div>
                <div className="side-bar">
                    <div className="active actual-logo fa-home-b">
                        <i className="fas fa-home"></i>
                        <p>Home</p>
                    </div>
                    <div className="actual-logo fa-cloud-b">
                        <i className="cloud fas fa-cloud"></i>
                        <p>Cloud</p>
                    </div>
                    <div className="actual-logo fa-dice-b">
                        <i className="fas fa-dice"></i>
                        <p>Games</p>
                    </div>
                    <div className="actual-logo fa-cog-b">
                        <i className="fas fa-cog"></i>
                        <p>settings</p>
                    </div>
                </div>
                <div className="website-container">
                    {
                        (props.value == 0) ? <Home /> : (props.value == 1) ? <Cloud /> : (props.value == 2) ? <Games /> : (props.value == 3) ? <Settings /> : <Cloud />}
                </div>
            </div>
        </>
    )
}
