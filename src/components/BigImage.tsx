export interface ImageProps {
  fileName: string;
  style: "rounded" | "regular";
}

const BigImage = ({ fileName, style }: ImageProps) => {
  const filePath: string = "/" + fileName;
  const styleName: string = style + "-image";

  return (
    <div className="image-container">
      <img
        src={filePath}
        alt="My Image"
        className={styleName}
        onClick={() => console.log("Clicked")}
      />
    </div>
  );
};

export default BigImage;
