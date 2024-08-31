import BigImage from "./BigImage";
import AudioPlayer from "./AudioPlayer";

const Home = () => {
  return (
    <div className="home">
      <p>Composer, multi-instrumentalist & certified Funny Boi</p>
      <BigImage fileName="cazok_instruments.png" style="regular"></BigImage>
      <h1>Top tracks</h1>
      <AudioPlayer
        src="/Everhood - Revenge.mp3"
        title="Everhood - Revenge"
      ></AudioPlayer>
      <AudioPlayer
        src="/CAG - Welcome to The Band.mp3"
        title="Circus and Games - Welcome To The Band"
      ></AudioPlayer>
      <AudioPlayer
        src="/Everhood - Feisty Flowers.mp3"
        title="Everhood - Feisty Flowers"
      ></AudioPlayer>
      <AudioPlayer
        src="/Everhood - The Final Battle.mp3"
        title="Everhood - The Final Battle"
      ></AudioPlayer>
    </div>
  );
};

export default Home;
