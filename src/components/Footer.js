import React from 'react'
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import track from "../assets/track.png";

function Footer() {
    return (
        <div className={"footer_container"}>
            <p className={"footer_info"}>see us on</p>
            <div>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img alt={"insta"}className={"footer_icon"}src={insta}></img></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img alt={"facebook"}className={"footer_icon"}src={facebook}></img></a>
                <a href="https://www.rover.com/blog/" target="_blank" rel="noopener noreferrer"><img alt={"dog"}className={"footer_icon"}src={track}></img></a>
            </div>
        </div>
    )
}

export default Footer
