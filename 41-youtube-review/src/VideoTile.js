import React from "react";

const VideoTile = (props) => {
    return(<div onClick={() => props.changeMainVideo(props.etag)}>
        {/* VideoTile */}
        <img src={props.snippet.thumbnails.default.url}/>
        <h6>Title: {props.snippet.title}</h6>
        <p>Description:{props.snippet.description}</p>
    </div>)
}

export default VideoTile