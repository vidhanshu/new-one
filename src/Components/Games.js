import React from 'react'
import Favorite from './Favorite.js';
import data from "../API/recommended.js"
import Fav from "../API/favorite"
import All from "../API/All"
var count = 0;
function Games() {
    const [recom, setRecom] = React.useState(data);
    const [all, setAll] = React.useState(All);
    const [cat, setCat] = React.useState('All');
    return (<>
        <div className="Recommended-games-section">
            <h1 className="Heading">Recommended for you</h1>
            <div className="recom-game-base">
                {recom.map(e => {
                    return <>
                        <div className="recom-game-card">
                            <div className={(e.play_type == "Download Now") ? "recom-image-container2" : "recom-image-container"}>
                                <img src={e.img} />
                            </div>
                            <h1>{e.game_name}</h1>
                            <p>{e.category}</p>
                        </div>
                    </>
                })}
            </div>
        </div>
        <Favorite />
        <div className="Recommended-games-section">
            <div className="selection-bar">
                <span onClick={()=>{setCat('All')}}>All</span>
                <span onClick={()=>{setCat('Card')}}>Card</span>
                <span onClick={()=>{setCat('Puzzle')}}>Puzzle</span>
                <span onClick={()=>{setCat('Racing')}}>Racing</span>
                <span onClick={()=>{setCat('Fighting')}}>Fighting</span>
                <span onClick={()=>{setCat('Role Playing')}}>Role Playing</span>
                <span onClick={()=>{setCat('Action')}}>Action</span>
                <span onClick={()=>{setCat('Horror')}}>Horror</span>
                <span onClick={()=>{setCat('Simulation')}}>Simulation</span>
                <span onClick={()=>{setCat('Casual')}}>Casual</span>
                <span onClick={()=>{setCat('Strategy')}}>Strategy</span>
            </div>
            <h1 className="Heading">{cat} Games</h1>
            <div className="recom-game-base">
                {all.map(e => {
                    if (e.category === cat && cat!="All") {
                        return <>
                            {
                                <div className="recom-game-card">
                                    <div className={(e.play_type == "Download Now") ? "recom-image-container2" : "recom-image-container"}>
                                        <img src={e.img} />
                                    </div>
                                    <h1>{e.game_name}</h1>
                                    <p>{e.category}</p>
                                </div>
                            }

                        </>
                    }
                    if (cat === "All") {
                        return <>
                            {
                                <div className="recom-game-card">
                                    <div className={(e.play_type == "Download Now") ? "recom-image-container2" : "recom-image-container"}>
                                        <img src={e.img} />
                                    </div>
                                    <h1>{e.game_name}</h1>
                                    <p>{e.category}</p>
                                </div>
                            }

                        </>
                    }
                })}
            </div>
        </div>
    </>
    )
}

export default Games
