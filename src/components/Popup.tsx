import { styled } from "@stitches/react";
import { GiftData } from "../data";
import { useEffect } from "react";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "580px",
  height: "340px",
  margin: "0 auto",
  position: "fixed",
  alignItems: "center",
  justifyContent: "center",
  padding: "32px",
  rowGap: "16px",
  backgroundColor: "#D5DE2D",
  border: "2px solid #795A2D",
  borderRadius: "32px",
  zIndex: 20,

  "& img": {
    height: "300px",
  },
});

type PopupProps = GiftData & {
  handleCallback: () => void;
};

function Popup({ imageUrl, audioUrl, quote, handleCallback }: PopupProps) {
  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.addEventListener("ended", handleCallback);
    audio.play();

    // Cleanup event listener when the component unmounts
    return () => {
      audio.removeEventListener("ended", handleCallback);
      audio.pause();
    };
  }, [audioUrl, handleCallback]);

  return (
    <Wrapper>
      <img src={imageUrl} />
      <div>{quote}</div>
    </Wrapper>
  );
}

export default Popup;
