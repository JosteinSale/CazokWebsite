import BigImage from "./BigImage";
import ImageText from "./ImageText";

const originsText: string =
  "Cazok first started composing music in 2006 at the age of 13, drawing inspiration from the PS1-games he played, as well as classical composers such as Danny Elfman. He started developing his unique and playful style, using simple tools to record his music. Over the course of the next 8 years he regularly posted songs on the website newgrounds.com, where he also received invaluable feedback and support.";

const everhood1Text: string =
  "In 2020, Cazok contributed with 21 tracks to the musical rpg Everhood. Of these, 11 were made specifically for the game. Cazok's songs added to the game's eventual success, and the tracks 'Revenge' and 'Feisty Flowers' are currently amongst the top 5 most streamed tracks for the 97-song OST. Cazok also made a cameo appearance in the game, featuring a few lines of dialogue.";

const everhood2Text: string =
  "Following the success of Everhood a sequel was made, called Everhood 2. This time Cazok was the primary songwriter, composing and recording over [x] songs during 2021-2024. In addition Cazok appeared as an in-game boss that the player could fight. (Game has yet to be released).";

const circusText: string =
  "Circus and Games is Cazok's solo project, where he plays all the instruments himself and also sings. The music has a fundament in rock, but draws influence from video games, classical-, metal- and dance music. There are currently two albums: Puppet Story (2019) and Cursed Carousel (2022). The band has a small, but dedicated fanbase.";

const saveText: string =
  "In 2021 and 2022, Cazok made appearances at the Save and Sound Online Music Festival. This featured video of Cazok playing his 3 top tracks from Everhood 1, as well as a custom made cover of You Want Gnomes (original song by Chris Nordgren). This cover was later included in the Everhood Eternity Edition (now titled 'Have More Gnomes'), which was released in 2023.";

const AboutMe = () => {
  return (
    <div>
      <BigImage fileName="cazok_portrait.png" style="rounded"></BigImage>
      <p>
        Cazok is a music composer and multi instrumentalist, most commonly known
        for his contributions to the Everhood 1- and Everhood 2- soundtracks.
        His music is is known for being colorful, fun, energetic and varied,
        including such genres as rock, metal, funk, classical, chiptune, techno
        and ambient. In addition to his video game music, he also has a solo
        project called Circus and Games, which is a circus-themed one-man-band
        with a fundament in Rock. He plays piano, guitar, bass, drums, and can
        also sing.
      </p>
      <ImageText
        title="Early Years"
        src="cazok_origins.png"
        text={originsText}
        imageDescription="Cazok's musical platform in the early years"
      ></ImageText>
      <ImageText
        title="Everhood 1"
        src="cazok_everhood1.png"
        text={everhood1Text}
        imageDescription="Cazok's in-game cameo in Everhood 1"
      ></ImageText>
      <ImageText
        title="Everhood 2"
        src="cazok_everhood2.png"
        text={everhood2Text}
        imageDescription="Cazok's in-game boss battle in Everhood 2"
      ></ImageText>
      <ImageText
        title="Circus and Games"
        src="cazok_cag.png"
        text={circusText}
        imageDescription="Circus and Games profile picture"
      ></ImageText>
      <ImageText
        title="Save and Sound Concert"
        src="cazok_save.png"
        text={saveText}
        imageDescription="Appearance at the 2022 Save and Sound festival "
      ></ImageText>
    </div>
  );
};

export default AboutMe;
