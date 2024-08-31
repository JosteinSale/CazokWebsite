interface ImageTextProps {
  text: string;
  src: string;
  title: string;
  imageDescription?: string;
}

const ImageText = ({ text, src, title, imageDescription }: ImageTextProps) => {
  const filePath: string = `./` + src;
  return (
    <div className="image-text-container">
      <h2 className="image-text-title">{title}</h2>
      <div className="image-text-content-wrapper">
        <div className="image-text-content">
          <p>{text}</p>
        </div>
        <img
          src={filePath}
          alt="Left Aligned Image"
          className="left-aligned-image"
        />
      </div>
      {imageDescription && (
        <h3 className="image-description">{imageDescription}</h3>
      )}
    </div>
  );
};

export default ImageText;
