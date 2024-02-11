import React from "react";

type GifDisplayProps = {
  gifSource: string;
  altText: string;
};

const GifDisplay = ({ gifSource, altText }: GifDisplayProps) => {
  return (
    <img
      src={gifSource}
      alt={altText}
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "200px",
        maxHeight: "200px",
      }}
    />
  );
};

export default GifDisplay;
