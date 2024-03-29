import { CSSProperties } from "react";

type ButtonProps = {
  name: string;
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
};

function Button({ name, onClick, className = "", style }: ButtonProps) {
  const buttonColor =
    name === "YES" || name === "Yes" ? "bg-green-500" : "bg-red-500";

  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={`rounded-md text-white ${buttonColor} px-4 py-2 m-1 ${className}`}
      type="button"
      onClick={handleClick}
      style={style}
    >
      {name}
    </button>
  );
}

export default Button;
