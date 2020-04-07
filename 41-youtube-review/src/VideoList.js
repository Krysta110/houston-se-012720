import React from "react";
import VideoTile from "./VideoTile";

const VideoList = (props) => {
    return(<div>
        {/* VideoList */}
        {props.videos.map(video => <VideoTile {...video} changeMainVideo={props.changeMainVideo}/> )}
        
    </div>)
}

export default VideoList