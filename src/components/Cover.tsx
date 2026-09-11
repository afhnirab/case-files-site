interface CoverProps {
  src?: string;
  label: string;
}

/**
 * Renders a cover thumbnail at a fixed 3:4 aspect ratio, cropped
 * consistently via object-fit. Falls back to a plain text placeholder
 * when no image has been supplied yet, so every card looks the same
 * before real cover art is dropped into /public/covers.
 */
export function Cover({ src, label }: CoverProps) {
  return (
    <div className="dossier-cover">
      {src ? (
        <img src={src} alt={label} loading="lazy" />
      ) : (
        <div className="dossier-cover-placeholder">{label}</div>
      )}
    </div>
  );
}
