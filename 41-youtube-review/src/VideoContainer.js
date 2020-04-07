import React from "react";
import MainVideo from "./MainVideo";
import VideoList from "./VideoList";

const VideoContainer = (props) => {
    return(<div>
        {/* VideoContainer */}
        <MainVideo mainVideo={props.mainVideo} />
        <VideoList 
        videos={props.videos}
        changeMainVideo={props.changeMainVideo}
        />
    </div>)
}

export default VideoContainer