import React from "react";

const MainVideo = (props) => {
    console.log(props)
    const embedUrl = `https://www.youtube.com/embed/${props.mainVideo.id.videoId}`
    return(<div>
        {/* MainVideo */}
        <iframe src={embedUrl} />
        <h4>Title: {props.mainVideo.snippet.title}</h4>
        <p>Description: {props.mainVideo.snippet.description}</p>

    </div>)
}

export default MainVideo