import { Link } from "react-router-dom";
import BigImage from "./BigImage";

interface AlbumLinkProps {
  title: string;
  imageSrc: string;
  description?: string;
  link: string;
  linkLabel: string;
}

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
      <div className="album-link">
        <Link to={link} target="_blank" rel="noopener noreferrer">
          {linkLabel}
        </Link>
      </div>
      {linkLabel && <p>{description}</p>}
    </div>
  );
};

export default AlbumLink;
