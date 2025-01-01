export type GiftData = {
  date: string;
  imageUrl: string;
  audioUrl: string;
  quote: string;
};

export const data: GiftData[] = [
  {
    date: "01 Jan 2025",
    imageUrl: "/src/media/donkey.png",
    audioUrl: "/src/media/donkey.mp3",
    quote: "Don't be an onion, shrek!",
  },
  {
    date: "02 Jan 2025",
    imageUrl: "/src/media/puss.png",
    audioUrl: "/src/media/puss.mp3",
    quote: "I owe you my life sir!",
  },
  {
    date: "03 Jan 2025",
    imageUrl: "/src/media/ogre.png",
    audioUrl: "/src/media/ogre.mp3",
    quote: "I am head ogre heels for you.",
  },
];
