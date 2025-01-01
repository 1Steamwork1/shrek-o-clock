import "./App.css";
import Button from "./components/Button";
import { styled } from "@stitches/react";
import shrekImage from "./media/shrek.png";
import musicTrack from "./media/believer.mp3";
import { useEffect, useRef, useState } from "react";
import Popup from "./components/Popup";
import { data, GiftData } from "./data.ts";

const Container = styled("div", {
  display: "flex",
  width: "100vw",
  height: "100vh",
  background: "#B0C400",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "48px",
});

const BackgroundImage = styled("img", {
  position: "absolute",
  height: "800px",
  opacity: 0.8,
});

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState<GiftData | null>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handleShowPopup(id: number) {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setPopupData(data[id]);
    setShowPopup(true);
  }

  function handleHidePopup() {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setShowPopup(false);
    setPopupData(null);
  }

  useEffect(() => {
    const audio = new Audio(musicTrack);
    audio.loop = true;
    audioRef.current = audio;
    audioRef.current.play();

    // Cleanup when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [hasUserInteracted]);

  if (!hasUserInteracted) {
    return (
      <Container>
        <button onClick={() => setHasUserInteracted(true)}>
          Get ogre here!
        </button>
      </Container>
    );
  }

  return (
    <>
      <Container>
        {data.map((item, id) => (
          <Button date={item.date} handleCallback={() => handleShowPopup(id)} />
        ))}

        {showPopup && popupData && (
          <Popup {...popupData} handleCallback={() => handleHidePopup()} />
        )}

        <BackgroundImage src={shrekImage} />
      </Container>
    </>
  );
}

export default App;
