import React, { useState } from "react";
import '../styles/global.css';
import { ChallengesProvider } from "../contexts/ChallengesContext";

export default function App({ Component, pageProps }) {
  const [level, setLevel] = useState(1);
  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <Component {...pageProps} />
  );
}
