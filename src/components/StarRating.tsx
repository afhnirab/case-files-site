import { useEffect, useState } from "react";

interface StarRatingProps {
  /** Unique key for what's being rated, e.g. "tin-goyenda-v1-p1" */
  storageKey: string;
}

const STORAGE_PREFIX = "rating:";

export function StarRating({ storageKey }: StarRatingProps) {
  const fullKey = STORAGE_PREFIX + storageKey;
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  useEffect(() => {
    const saved = window.localStorage.getItem(fullKey);
    if (saved) setRating(Number(saved));
  }, [fullKey]);

  function handleRate(value: number) {
    setRating(value);
    window.localStorage.setItem(fullKey, String(value));
  }

  return (
    <div className="rating">
      <span className="rating-label">Your rating</span>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            className={"rating-star" + (value <= (hovered || rating) ? " filled" : "")}
            onMouseEnter={() => setHovered(value)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => handleRate(value)}
            aria-label={`Rate ${value} out of 5`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}
