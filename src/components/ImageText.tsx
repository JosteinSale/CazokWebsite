import styled from "styled-components";

const ImageTextWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 40px;
    color: rgb(230, 114, 222);
    margin-bottom: 20px;
  }

  .content-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 20px;
  }

  .left-aligned-image {
    max-width: 500px;
    max-height: 500px;
    margin-left: 20px;
  }

  .content p {
    text-align: left;
    font-size: 25px;
    line-height: 1.5;
    margin: 0;
  }

  .image-description {
    text-align: left;
    font-size: 20px;
    margin-left: 550px;
  }
`;

interface ImageTextProps {
  text: string;
  src: string;
  title: string;
  imageDescription?: string;
}

const ImageText = ({ text, src, title, imageDescription }: ImageTextProps) => {
  const filePath: string = `./` + src;
  return (
    <ImageTextWrapper>
      <h2>{title}</h2>
      <div className="content-wrapper">
        <div className="content">
          <p>{text}</p>
        </div>
        <img src={filePath} className="left-aligned-image" />
      </div>
      {imageDescription && (
        <h3 className="image-description">{imageDescription}</h3>
      )}
    </ImageTextWrapper>
  );
};

export default ImageText;
