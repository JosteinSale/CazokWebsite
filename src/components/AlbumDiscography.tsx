import TimestampButton from "./TimestampButton";
import YouTubeVideo from "./YouTubeVideo";

interface AlbumDiscographyProps {
  videoId: string;
  title: string;
  timeStamp: number;
  setTimeStamp: (nr: number) => void;
  songNames: string[];
  timeStamps: number[];
}

const AlbumDiscography = ({
  videoId,
  title,
  timeStamp,
  setTimeStamp,
  songNames,
  timeStamps,
}: AlbumDiscographyProps) => {
  return (
    <div>
      <YouTubeVideo videoId={videoId} title={title} start={timeStamp} />
      <div className="button-list">
        {songNames.map((label, index) => (
          <TimestampButton
            key={index}
            onClick={() => setTimeStamp(timeStamps[index])}
            label={label}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumDiscography;
