/* This component was written with the aid of ChatGPT*/
import React, { useEffect, useRef } from "react";

interface VideoProps {
  videoId: string;
  title: string;
  start: number;
}

const YouTubeVideo: React.FC<VideoProps> = ({
  videoId,
  title,
  start,
}: VideoProps) => {
  const playerRef = useRef<YT.Player | null>(null); // The YouTube player
  const iframeRef = useRef<HTMLIFrameElement>(null); // Timestamp the video will start at

  // This code will be run whenever videoID changes / component unmounts.
  useEffect(() => {
    // Create a dynamic tag for the YouTube IFrame API and insert into the DOM
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    // When the API is ready, make a new YouTube player.
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        videoId,
        playerVars: { autoplay: 0 },
      });
    };

    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  // This code will be run whenever start-time changes
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(start, true);
      playerRef.current.playVideo();
    }
  }, [start]);

  return (
    <div className="video-container">
      <iframe
        ref={iframeRef}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
