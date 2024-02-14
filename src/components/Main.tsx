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
  const [textIndex, setTextIndex] = useState(-1);

  const handleNoButtonClick = () => {
    setNoClicked(true);
    setYesButtonSize((prevSize) => prevSize + 14);
    setGifSource(iSaidPlease);
    setShowGif(true);
    setTextIndex(Math.floor(Math.random() * noText.length));
  };

  const handleYesButtonClick = () => {
    setGifSource(sheSaidYES);
    setShowGif(true);
    setTextIndex(Math.floor(Math.random() * yesText.length));
    setNoClicked(false);
  };

  const yesText = [
    "Couldn't be happier! 😊",
    "I'm so lucky! 🍀",
    "I love you so much! 😘",
    "You're the best! ❤️",
    "My heart is full! ❤️",
    "I'm so happy! 😊",
    "Absolutely thrilled! 🎉",
    "Forever grateful! 🙏",
  ];

  const noText = [
    "I still love you! 😘",
    "I'll keep trying! 💪",
    "I'm sorry to hear that 😞",
    "I still love you though! 😘",
    "I'll keep trying! 💪",
    "No matter what, I adore you! 💕",
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen p-5">
      {showGif ? (
        <GifDisplay
          gifSource={gifSource}
          altText={noClicked ? "I said Please" : "She said YES"}
        />
      ) : (
        <GifDisplay gifSource={please} altText="Please" />
      )}
      <h1 className="text-2xl font-bold mt-5">Will you be my Valentine?</h1>
      {textIndex !== -1 && (
        <h2>{noClicked ? noText[textIndex] : yesText[textIndex]}</h2>
      )}
      <div className=" ">
        <Button
          name="Yes"
          className={noClicked ? "bigger" : ""}
          style={{ fontSize: `${yesButtonSize}px` }}
          onClick={handleYesButtonClick}
        />
        <Button
          name="No"
          style={{ fontSize: `16px` }}
          onClick={handleNoButtonClick}
        />
      </div>
    </div>
  );
}

export default Main;
