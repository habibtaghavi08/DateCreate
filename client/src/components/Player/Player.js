import React, {Component} from "react";
import ReactPlayer from "react-player";
import "./Player.css"




class Player extends Component {
    render() {
        return (
            <div className="player-wrapper">
                <ReactPlayer
                    className="react-player"
                    width="100%"
                    height="100%"

                    url="https://www.youtube.com/watch?v=enRPyn02fAY" />
            </div>
        );
    }
}

export default Player

