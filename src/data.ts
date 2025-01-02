import donkeyImage from "./media/donkey.png";
import donkeyAudio from "./media/donkey.mp3";
import pussImage from "./media/puss.png";
import pussAudio from "./media/puss.mp3";
import ogreImage from "./media/ogre.png";
import ogreAudio from "./media/ogre.mp3";

export type GiftData = {
  date: string;
  imageUrl: string;
  audioUrl: string;
  quote: string;
};

export const data: GiftData[] = [
  {
    date: "01 Jan 2025",
    imageUrl: donkeyImage,
    audioUrl: donkeyAudio,
    quote: "Don't be an onion, shrek!",
  },
  {
    date: "02 Jan 2025",
    imageUrl: pussImage,
    audioUrl: pussAudio,
    quote: "I owe you my life sir!",
  },
  {
    date: "03 Jan 2025",
    imageUrl: ogreImage,
    audioUrl: ogreAudio,
    quote: "I am head ogre heels for you.",
  },
];
