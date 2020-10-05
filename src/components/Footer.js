import React from 'react'
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import track from "../assets/track.png";

function Footer() {
    return (
        <div className={"footer_container"}>
            <p className={"footer_info"}>see us on</p>
            <div>
                <img className={"footer_icon"}src={insta}></img>
                <img className={"footer_icon"}src={facebook}></img>
                <img className={"footer_icon"}src={track}></img>
            </div>
        </div>
    )
}

export default Footer
