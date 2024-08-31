import styled from "styled-components";

const BigImageWrapper = styled.div`
  .regular-image {
    max-width: 1000px;
    max-height: 1000px;
  }

  .rounded-image {
    max-width: 1000px;
    max-height: 1000px;
    border-radius: 75px;
  }
`;

export interface ImageProps {
  fileName: string;
  style: "rounded" | "regular";
}

const BigImage = ({ fileName, style }: ImageProps) => {
  const filePath: string = "/" + fileName;
  const styleName: string = style + "-image";

  return (
    <BigImageWrapper>
      <img
        src={filePath}
        alt="My Image"
        className={styleName}
        onClick={() => console.log("Clicked")}
      />
    </BigImageWrapper>
  );
};

export default BigImage;
