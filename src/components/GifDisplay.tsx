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
        maxWidth: "300px",
        maxHeight: "300px",
      }}
    />
  );
};

export default GifDisplay;
