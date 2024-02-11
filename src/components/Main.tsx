import { useState } from "react";
import Button from "./Button";
import GifDisplay from "./GifDisplay";
import please from "../assets/please.gif";
import iSaidPlease from "../assets/iSaidPlease.gif";
import sheSaidYES from "../assets/sheSaidYES.gif";

function Main() {
  const [noClicked, setNoClicked] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(16);
  const [showGif, setShowGif] = useState(false);
  const [gifSource, setGifSource] = useState(please);

  const handleNoButtonClick = () => {
    console.log("No");
    setNoClicked(true);
    setYesButtonSize((prevSize) => prevSize + 2);
    setGifSource(iSaidPlease);
    setShowGif(true);
  };

  const handleYesButtonClick = () => {
    console.log("Yes");
    setGifSource(sheSaidYES);
    setShowGif(true);
  };

  return (
    <>
      {showGif ? (
        <GifDisplay
          gifSource={gifSource}
          altText={noClicked ? "I said Please" : "She said YES"}
        /> 
      ) : (
        <GifDisplay gifSource={please} altText="Please" /> 
      )}
      <Button
        name="Yes"
        className={noClicked ? "bigger" : ""}
        style={{ fontSize: `${yesButtonSize}px` }}
        onClick={handleYesButtonClick}
      />
      <Button name="No" onClick={handleNoButtonClick} />
    </>
  );
}

export default Main;
