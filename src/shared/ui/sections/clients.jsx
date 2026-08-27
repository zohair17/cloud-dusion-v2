import Image from "next/image";
import { Container } from "../primitives/container";
import { Reveal } from "../motion/reveal";
import { RevealText } from "../motion/reveal-text";
import { PartnerCoverflow } from "./partner-coverflow";

/**
 * Clients and partners.
 *
 * Two registers of one claim. The partners run passes a single card at a time,
 * large enough to read the mark; the client roster is a wall, where the point
 * is the count rather than any one name. Neither paints a background — the
 * page's own surface carries through both.
 */
export function Clients({ section }) {
  const partners = section?.partners;
  const roster = section?.roster;
  if (!partners && !roster) return null;

  return (
    <section id="clients" className="section-y scroll-mt-28 overflow-x-clip">
      {partners?.items?.length ? (
        <>
          <Container size="wide">
            <h2 className="mx-auto max-w-[46rem] text-center font-display text-[1.5rem] font-semibold leading-[1.2] tracking-tight sm:leading-[1.15] text-balance sm:text-4xl lg:text-5xl">
              <RevealText>{partners.heading}</RevealText>{" "}
              {partners.headingAccent ? (
                <RevealText
                  className="text-brand-600"
                  delay={partners.heading.split(" ").length * 0.055}
                >
                  {partners.headingAccent}
                </RevealText>
              ) : null}
            </h2>
          </Container>

          <Reveal delay={0.12}>
            <div className="mt-10 sm:mt-12">
              <PartnerCoverflow
                items={partners.items}
                label={`${partners.heading} ${partners.headingAccent ?? ""}`.trim()}
              />
            </div>
          </Reveal>
        </>
      ) : null}

      {roster?.items?.length ? (
        <Container size="wide" className={partners?.items?.length ? "mt-16 sm:mt-20" : undefined}>
          <div className="mx-auto max-w-[46rem] text-center">
            {roster.eyebrow ? (
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                  {roster.eyebrow}
                </p>
              </Reveal>
            ) : null}

            <h2 className="mt-4 font-display text-[1.5rem] font-semibold leading-[1.2] tracking-tight sm:leading-[1.15] text-balance sm:text-4xl lg:text-5xl">
              <RevealText delay={0.08}>{roster.heading}</RevealText>{" "}
              {roster.headingAccent ? (
                <RevealText
                  className="text-brand-600"
                  delay={0.08 + roster.heading.split(" ").length * 0.055}
                >
                  {roster.headingAccent}
                </RevealText>
              ) : null}
            </h2>

            {roster.intro ? (
              <Reveal delay={0.14}>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{roster.intro}</p>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={0.18}>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-[clamp(0.55rem,1vw,1.1rem)] [perspective:1600px] [--tile-h:clamp(3.1rem,3.8vw,4rem)] [--tile-w:clamp(5.5rem,9vw,9rem)] sm:mt-12">
              {Array.from({ length: roster.tiles ?? roster.items.length }, (_, index) => {
                const logo = roster.items[index % roster.items.length];

                return (
                  <li key={index} className="group/tile [transform-style:preserve-3d]">
                    <span className="relative flex h-[var(--tile-h)] w-[var(--tile-w)] items-center justify-center overflow-hidden rounded-[clamp(0.75rem,1.2vw,1.15rem)] bg-[linear-gradient(150deg,#ffffff_0%,#ffffff_55%,#f2f3fa_100%)] shadow-[0_18px_30px_-18px_rgb(11_11_42/0.45),0_2px_4px_rgb(11_11_42/0.06),inset_0_1px_0_rgb(255_255_255/0.9)] ring-1 ring-black/[0.06] transition-[transform,box-shadow] duration-500 ease-out group-hover/tile:[transform:translateZ(34px)] group-hover/tile:shadow-[0_30px_50px_-22px_rgb(11_11_42/0.5),0_4px_8px_rgb(11_11_42/0.08)]">
                      <Image
                        src={`/asset/clients/${logo.file}`}
                        alt={logo.name}
                        width={logo.width}
                        height={logo.height}
                        sizes="(min-width: 768px) 11vw, 8rem"
                        className="relative h-auto w-auto max-h-[calc(var(--tile-h)*0.48)] max-w-[calc(var(--tile-w)*0.78)] object-contain"
                      />

                      {/*
                        Some of this wall came to us through a partner rather
                        than direct. The tile says so on hover: a brand panel
                        rises over the mark and names who brought them, so the
                        relationship is readable without a second legend.
                      */}
                      {/* Where the client is, if the record says. */}
                      {logo.country ? (
                        <Image
                          src={`/asset/flags/${logo.country.code}.png`}
                          alt={logo.country.name}
                          width={80}
                          height={53}
                          sizes="2rem"
                          className="absolute bottom-[0.3rem] right-[0.35rem] h-[0.7rem] w-[1.05rem] rounded-[0.15rem] object-cover shadow-sm ring-1 ring-black/15"
                        />
                      ) : null}

                      {/*
                        Some of this wall came to us through a partner rather
                        than direct. The tile says so on hover: a brand panel
                        rises over the mark and shows whose client they are,
                        so the relationship is readable without a second legend.
                      */}
                      {logo.via ? (
                        <span className="absolute inset-0 flex flex-col items-center justify-center gap-[0.2em] rounded-[inherit] bg-brand-600 px-2 text-center opacity-0 transition-opacity duration-300 ease-out group-hover/tile:opacity-100">
                          <span className="text-[0.45rem] font-semibold uppercase leading-none tracking-[0.14em] text-white/70">
                            Client of
                          </span>
                          <span className="inline-flex items-center justify-center rounded-[0.3rem] bg-white px-1.5 py-1">
                            <Image
                              src={`/asset/clients/${logo.via.file}`}
                              alt={logo.via.name}
                              width={logo.via.width}
                              height={logo.via.height}
                              sizes="6rem"
                              className="h-auto w-auto max-h-[calc(var(--tile-h)*0.3)] max-w-[calc(var(--tile-w)*0.66)] object-contain"
                            />
                          </span>
                        </span>
                      ) : null}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </Container>
      ) : null}
    </section>
  );
}

export default Clients;
