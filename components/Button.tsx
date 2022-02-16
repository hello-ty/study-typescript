import { useState } from "react";

type Style = {
  color: string;
};

export const Button = (props: Style) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleIsSelected = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <>
      {isSelected ? (
        <input
          type="radio"
          name="radio-2"
          className={`radio ${props.color}`}
          onClick={handleIsSelected}
          checked
        />
      ) : (
        <input
          type="radio"
          name="radio-2"
          className={`radio ${props.color}`}
          onClick={handleIsSelected}
        />
      )}
    </>
  );
};
