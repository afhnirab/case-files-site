import { Link, useParams } from "react-router-dom";
import { books } from "../data/books";
import { Cover } from "../components/Cover";

export function VolumePage() {
  const { bookSlug, volumeNumber } = useParams();
  const book = books.find((b) => b.slug === bookSlug);
  const volume = book?.volumes.find((v) => v.number === Number(volumeNumber));

  if (!book || !volume) {
    return (
      <div className="container">
        <p style={{ padding: "40px 0" }}>That volume wasn't found.</p>
      </div>
    );
  }

  const sortedStories = [...volume.stories].sort((a, b) => a.part - b.part);

  return (
    <div className="container">
      <p className="breadcrumb">
        <Link to="/">Home</Link> / <Link to={`/${book.slug}`}>{book.titleRoman ?? book.title}</Link> /
        Volume {volume.number}
      </p>
      <div className="page-heading">
        <p className="eyebrow">VOLUME {volume.number}</p>
        <h1>{volume.title}</h1>
      </div>

      <div className="grid">
        {sortedStories.map((story) => (
          <Link
            key={story.part}
            to={`/${book.slug}/volume/${volume.number}/part/${story.part}`}
            className="dossier"
          >
            <Cover src={story.coverImage} label={`Part ${story.part}`} />
            <div className="dossier-label">Part {story.part}</div>
            <div className="dossier-title">{story.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
