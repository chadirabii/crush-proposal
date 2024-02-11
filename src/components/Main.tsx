import Button from "./Button";

function Main() {
  return (
    <>
      <Button name="Yes" onClick={() => console.log("Yes")} />
      <Button name="No" onClick={() => console.log("No")} />
    </>
  );
}

export default Main;
