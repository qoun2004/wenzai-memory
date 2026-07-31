"use client";

import { useState } from "react";

function getYouTubeId(url: string) {
  try {
    return new URL(url).searchParams.get("v");
  } catch {
    return null;
  }
}

export default function YouTubePreview({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeId(url);

  if (!videoId) return null;

  return (
    <div className="youtube-preview">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={`播放影片：${title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          className="youtube-poster"
          onClick={() => setIsPlaying(true)}
          aria-label={`在本頁播放影片：${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
          />
          <span className="youtube-shade" />
          <span className="youtube-play" aria-hidden="true">
            <span />
          </span>
          <span className="youtube-play-label">點擊播放</span>
        </button>
      )}
    </div>
  );
}
