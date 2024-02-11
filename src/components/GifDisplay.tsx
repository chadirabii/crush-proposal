type GifDisplayProps = {
    gifSource: string;
    altText: string;
};

const GifDisplay = ({ gifSource, altText }: GifDisplayProps) => {
    return <img src={gifSource} alt={altText} />;
};

export default GifDisplay;
