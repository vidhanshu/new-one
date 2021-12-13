import React from 'react'
import Favorite from './Favorite'
import data from "../API/recommended.js"
import more_game from "../API/more_game.js"
function Home() {
    const [recom, setRecom] = React.useState(data);
    const [more, setMore] = React.useState(more_game);
    return (
        <div>
            <Favorite />
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

            <div className="Recommended-games-section">
                <h1 className="Heading">More Games</h1>
                <div className="recom-game-base">
                    {more.map(e => {
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
        </div>
    )
}

export default Home
