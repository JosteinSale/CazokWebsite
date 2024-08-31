import { Link } from "react-router-dom";
import BigImage from "./BigImage";
import styled from "styled-components";

interface AlbumLinkProps {
  title: string;
  imageSrc: string;
  description?: string;
  link: string;
  linkLabel: string;
}

const AlbumLinkWrapper = styled.div`
  a {
    background-color: #1d187a;
    text-decoration: none;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 30px;
    padding: 20px;
    border-radius: 30px;
    display: inline-block; /* Aligns properly and enables enlargement */
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    background-color: #4f48d9;
    transform: scale(1.2);
  }
`;

const AlbumLink = ({
  title,
  imageSrc,
  description,
  link,
  linkLabel,
}: AlbumLinkProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <BigImage fileName={imageSrc} style="rounded" />
      <AlbumLinkWrapper>
        <Link to={link} target="_blank" rel="noopener noreferrer">
          {linkLabel}
        </Link>
      </AlbumLinkWrapper>
      {linkLabel && <p>{description}</p>}
    </div>
  );
};

export default AlbumLink;
