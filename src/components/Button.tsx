import { useState } from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  onChange?: (id: number) => void;
  objArr?: ObjArr[];
  setState?: React.Dispatch<React.SetStateAction<string>>;
};

interface ObjArr {
  id: string;
  title: string;
}

function Button({ title, onClick, disabled, setState }: ButtonProps) {
  const [counter, setCounter] = useState<number>(0);
  const string = disabled
    ? "disabled"
    : (title = title + " - " + "Clicks: " + counter);

  function handleClick() {
    onClick();
    setCounter(counter + 1);
    if (setState) setState("Hello");
  }

  return (
    <button disabled={disabled} onClick={handleClick}>
      {string}
    </button>
  );
}
export default Button;
