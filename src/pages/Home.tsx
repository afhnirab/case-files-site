import { Link } from "react-router-dom";
import { books } from "../data/books";
import { Cover } from "../components/Cover";

export function Home() {
  return (
    <>
      <section className="hero container">
        <p className="hero-eyebrow">ARCHIVE — EST. READER PROJECT</p>
        <h1>An index of open case files.</h1>
        <p>
          A fan-made browsing index for Bengali mystery series. Pick a series
          below to see its volumes, in order.
        </p>
      </section>

      <section className="container">
        <div className="grid">
          {books.map((book) => (
            <Link key={book.slug} to={`/${book.slug}`} className="dossier">
              <Cover src={book.coverImage} label={book.titleRoman ?? book.title} />
              <div className="dossier-label">{book.volumes.length} volumes</div>
              <div className="dossier-title">{book.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
