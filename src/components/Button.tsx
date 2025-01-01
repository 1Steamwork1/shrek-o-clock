import { styled } from "@stitches/react";
import giftClosed from "../media/gift.png";
import giftOpen from "../media/gift-open.png";
import { useState } from "react";
import { isBefore, isToday } from "date-fns";

const Image = styled("img", {
  height: "128px",
  borderRadius: "5px",
});

const Wrapper = styled("button", {
  width: "128px",
  height: "128px",
  padding: 0,
  zIndex: 10,

  "&:focus": {
    outline: "none",
  },
});

interface ButtonProps {
  date: string;
  handleCallback: () => void;
}

function Button({ date, handleCallback }: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleGiftOpen = () => {
    if (isBefore(date, Date()) || isToday(date)) {
      setIsOpen(true);
      handleCallback();
    }
  };

  return (
    <>
      <Wrapper onClick={handleGiftOpen}>
        <Image
          src={isOpen ? giftOpen : giftClosed}
          alt="A top-down picture of a present"
        />
        {date}
      </Wrapper>
    </>
  );
}

export default Button;
