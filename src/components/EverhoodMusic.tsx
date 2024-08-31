import { useState } from "react";
import AlbumDiscography from "./AlbumDiscography";

const EverhoodMusic = () => {
  const albumTitle: string = "Everhood";
  const videoId: string = "h7pGABDCu2s";
  const [timeStamp, setTimeStamp] = useState<number>(1);
  const timeStamps: number[] = [
    854, 944, 1836, 2701, 3281, 3629, 4088, 5659, 5715, 5884, 5922, 6174, 6383,
    6888, 7311, 7729, 7936, 8014, 8171, 8725, 10122,
  ];
  const songNames: string[] = [
    "Seeing Red",
    "Psychedelic Breakdown",
    "Vampires Invading Heaven",
    "Paranoia Museum",
    "Flower Shop",
    "On An Adventure",
    "Born Chaos",
    "Echoing Steps",
    "The Abyss",
    "Betrayal",
    "Revenge",
    "Evil Scheme",
    "Pranks and Party Poppers",
    "Powers of Destruction",
    "Brown Mage's Theme",
    "Feisty Flowers",
    "The Playroom",
    "The Final Battle",
    "Hypedrums",
    "Soul Cottage",
    "Dark Eternity",
  ];

  return (
    <div>
      <h1>{albumTitle}</h1>
      <p>(Buttons not working / video not showing? Try refreshing the page!)</p>
      <AlbumDiscography
        title={albumTitle}
        videoId={videoId}
        timeStamp={timeStamp}
        setTimeStamp={setTimeStamp}
        songNames={songNames}
        timeStamps={timeStamps}
      ></AlbumDiscography>
    </div>
  );
};

export default EverhoodMusic;
