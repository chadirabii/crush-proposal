import { useState } from "react";
import Button from "./Button";

function Main() {
  const [noClicked, setNoClicked] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(16);

  const handleNoButtonClick = () => {
    console.log("No");
    setNoClicked(true);
    setYesButtonSize((prevSize) => prevSize + 2);
  };

  return (
    <>
      <Button
        name="Yes"
        className={noClicked ? "bigger" : ""}
        style={{ fontSize: `${yesButtonSize}px` }}
        onClick={() => {
          console.log("Yes");
        }}
      />
      <Button name="No" onClick={handleNoButtonClick} />
    </>
  );
}

export default Main;
