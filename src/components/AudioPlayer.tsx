import React from "react";

interface AuioPlayerProps {
  src: string;
  title: string;
}

const AudioPlayer: React.FC<AuioPlayerProps> = ({
  src,
  title,
}: AuioPlayerProps) => {
  return (
    <div>
      {title && <h3>{title}</h3>}
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element
      </audio>
    </div>
  );
};

export default AudioPlayer;
