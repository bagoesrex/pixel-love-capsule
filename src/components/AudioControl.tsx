"use client";

import { useRef, useState } from "react";

type AudioControlProps = {
  src: string;
};

export function AudioControl({ src }: AudioControlProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setErrorMessage("");
    } catch {
      setErrorMessage("Musik belum dapat diputar di perangkat ini.");
    }
  }

  return (
    <div className="audio-control">
      <audio ref={audioRef} src={src} preload="none" loop />
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Hentikan musik" : "Putar musik"}
        aria-pressed={isPlaying}
      >
        <span aria-hidden="true">{isPlaying ? "Ⅱ" : "♪"}</span>
      </button>
      {errorMessage && (
        <span className="audio-control__error" role="status">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
