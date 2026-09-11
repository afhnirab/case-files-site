export interface Story {
  /** Part number within the volume, e.g. 1, 2, 3 */
  part: number;
  /** Bengali title of this part/story */
  title: string;
  /** Romanized / English rendering of the title */
  titleRoman?: string;
  coverImage?: string;
  /** Short, non-spoiler premise (a few sentences). No resolution/ending. */
  synopsis: string;
  /** Optional longer teaser building suspense, still non-spoiler. */
  teaser?: string;
}

export interface Volume {
  /** Volume number, e.g. 1, 2, 3 */
  number: number;
  label?: string; 
  /** Bengali title shared across the volume's parts, if any */
  title: string;
  titleRoman?: string;
  originalAuthor?: string;
  publisher?: string;
  year?: number;
  /** Path to a cover image the user supplies later; falls back to a generated placeholder */
  coverImage?: string;
  stories: Story[];
}

export interface Book {
  slug: string;
  title: string;
  titleRoman?: string;
  description?: string;
  coverImage?: string;
  volumes: Volume[];
}
