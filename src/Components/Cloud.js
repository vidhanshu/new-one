import React from 'react'
import Data from "../API/scrollgames"




export default function Cloud() {
    const [game, setGame] = React.useState(Data);
    return (
        <div className="games-section">

            {

                /* little bit complex to understand but not that much tha Api i'm using here is the array of objects of objects hence two map functions i have used */
                game.map((m) => {
                    /*m is an obj */
                    return <>
                        <h1 class="Heading">{m.title}</h1>
                        <div title="scroll" className="game-scroller">
                            <div className="game-card-scroller">
                                {m.info.map(s => { 
                                    /*s is an object*/
                                    return <div className="game-card">
                                        <div className={(m.id==1)?"image-container":"image-container2"}>
                                            <img src={s.img} />
                                        </div>
                                        <div className="game-info-container"> <h1>{s.game_name}</h1>
                                            <p>{s.category}</p></div>
                                    </div>
                                })}
                            </div>
                        </div>
                        </>
                })}

        </div>
    )
}


