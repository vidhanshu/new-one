import React, { useRef } from 'react'
import Fav from "../API/favorite"
var count = 0;
function Favourite() {
    const fav_info_box = useRef(null);
    const fav_img = useRef(null);
    const fav_ava = useRef(null);
    const fav_game_name = useRef(null);
    const fav_dev = useRef(null);
    const [fav, setFav] = React.useState(Fav);
    const left = () => {
        count = (count > 0) ? count - 1 : fav.length - 1;
        fav_ava.current.innerHTML = fav[count].availability;
        fav_img.current.src = fav[count].img;
        fav_dev.current.innerHTML = fav[count].developer;
        fav_info_box.current.style.backgroundImage = `url(${fav[count].bg_img})`
        fav_info_box.current.style.backgroundRepeat = ``
        fav_info_box.current.style.backgroundPosition = `center`
        fav_info_box.current.style.backgroundSize = `cover`
        fav_game_name.current.innerHTML=fav[count].game_name;
    }
    const right = () => {
        count = (count < fav.length-1) ? count + 1 : 0;
        fav_ava.current.innerHTML = fav[count].availability;
        fav_img.current.src = fav[count].img;
        fav_dev.current.innerHTML = fav[count].developer;
        fav_info_box.current.style.backgroundImage = `url(${fav[count].bg_img})`
        fav_info_box.current.style.backgroundRepeat = `no-repeat`
        fav_info_box.current.style.backgroundPosition = `center`
        fav_info_box.current.style.backgroundSize = `cover`
        fav_game_name.current.innerHTML=fav[count].game_name;
    }
    return (
        /* pending work */
        <div className="favorite-section">
            <div ref={fav_info_box} className="favorite-info-box">
                <div className="fav-nav"> <h1 className="fav-heading-left">Our New Favourites</h1>
                    <span>
                        <i onClick={left} title="prev" className="fav-left fas fa-arrow-left"></i>
                        <i title="next" onClick={right} className="fav-right fas fa-arrow-right"></i>
                    </span></div>

                <div className="info-card">
                    <img ref={fav_img} className="fav-img" src={fav[0].img} />
                    <div className="info-fav-card">
                        <p ref={fav_ava} className="fav-availability">{fav[0].availability}</p>
                        <h1 ref={fav_game_name} className="fav-game-name">{fav[0].game_name}</h1>
                        <p ref={fav_dev} class="fav-developer">{fav[0].developer}</p>
                        <button ><i className="fas fa-cloud"></i> Play on Cloud</button>
                        <span><i className="fas fa-arrow-down"></i></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Favourite
