type ButtonProps = {
  name: string;
};

function Button({ name }: ButtonProps) {
  const buttonColor =
    name === "YES" || name === "Yes" ? "bg-green-500" : "bg-red-500";

  return (
    <button
      className={`px-4 py-2 rounded-md text-white ${buttonColor}`}
      type="button"
    >
      {name}
    </button>
  );
}

export default Button;
