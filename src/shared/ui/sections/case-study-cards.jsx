import { Container } from "../primitives/container";
import { SpotlightBento } from "./spotlight-bento";

/**
 * The case study catalogue, as a spotlight bento.
 *
 * Tiles of unequal width so the wall has a rhythm, each set on the vertical the
 * work was done in — the industry photograph the rest of the site already uses,
 * held colourless until the pointer picks the tile out.
 *
 * A case study carries no picture of its own (the clients are anonymised), so
 * the sector is what supplies one. That is a mapping, not a decoration: the tile
 * shows the world the work happened in.
 */
export function CaseStudyCards({ items }) {
  return (
    <section className="section-y">
      <Container size="wide">
        <SpotlightBento
          items={items.map((item) => ({
            key: item.slug,
            href: item.href,
            image: item.image ?? (item.industrySlug ? `/asset/industries/${item.industrySlug}.webp` : null),
            eyebrow: item.sectorLabel,
            title: item.title,
            summary: item.summary,
            meta: item.client,
          }))}
        />
      </Container>
    </section>
  );
}

export default CaseStudyCards;
