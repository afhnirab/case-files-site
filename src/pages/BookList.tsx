import { Link, useParams } from "react-router-dom";
import { books } from "../data/books";
import { Cover } from "../components/Cover";

export function BookList() {
  const { bookSlug } = useParams();
  const book = books.find((b) => b.slug === bookSlug);

  if (!book) {
    return (
      <div className="container">
        <p style={{ padding: "40px 0" }}>That series wasn't found.</p>
      </div>
    );
  }

  const sortedVolumes = [...book.volumes].sort((a, b) => a.number - b.number);

  return (
    <div className="container">
      <p className="breadcrumb">
        <Link to="/">Home</Link> / {book.titleRoman ?? book.title}
      </p>
      <div className="page-heading">
        <p className="eyebrow">SERIES</p>
        <h1>{book.title}</h1>
      </div>
      {book.description && (
        <p style={{ color: "var(--parchment-dim)", maxWidth: "60ch", lineHeight: 1.6 }}>
          {book.description}
        </p>
      )}

      <div className="grid">
        {sortedVolumes.map((volume) => {
          const label = volume.label ?? `${volume.number}`;

          return (
            <Link
              key={volume.number}
              to={`/${book.slug}/volume/${volume.number}`}
              className="dossier"
            >
              <Cover src={volume.coverImage} label={label} />
              <div className="dossier-label">{label}</div>
              <div className="dossier-title">{volume.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}