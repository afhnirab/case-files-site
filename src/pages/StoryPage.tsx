import { Link, useParams } from "react-router-dom";
import { books } from "../data/books";
import { StarRating } from "../components/StarRating";

export function StoryPage() {
  const { bookSlug, volumeNumber, partNumber } = useParams();
  const book = books.find((b) => b.slug === bookSlug);
  const volume = book?.volumes.find((v) => v.number === Number(volumeNumber));
  const story = volume?.stories.find((s) => s.part === Number(partNumber));

  if (!book || !volume || !story) {
    return (
      <div className="container">
        <p style={{ padding: "40px 0" }}>That story wasn't found.</p>
      </div>
    );
  }

  const ratingKey = `${book.slug}-v${volume.number}-p${story.part}`;

  return (
    <div className="container">
      <p className="breadcrumb">
        <Link to="/">Home</Link> /{" "}
        <Link to={`/${book.slug}`}>{book.titleRoman ?? book.title}</Link> /{" "}
        <Link to={`/${book.slug}/volume/${volume.number}`}>Volume {volume.number}</Link> / Part{" "}
        {story.part}
      </p>

      <article className="story-page">
        <p className="story-meta">
          VOLUME {volume.number} · PART {story.part}
        </p>
        <h1>{story.title}</h1>

        <div className="story-body">
          {(story.teaser ?? story.synopsis).split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="story-note">
          This is a short, non-spoiler premise only — written to point you
          toward the original book, not to replace it. For the full story,
          read the original edition by Rakib Hasan (Sheba Prokashani).
        </div>

        <StarRating storageKey={ratingKey} />
      </article>
    </div>
  );
}
