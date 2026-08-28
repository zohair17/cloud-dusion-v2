import { getClosingCta, getCompanyProfile } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { routes } from "@/shared/config/routes";
import { PageHero } from "@/shared/ui/sections/page-hero";
import { HeroMarquee } from "@/shared/ui/sections/hero-marquee";
import { AboutIntro } from "@/shared/ui/sections/about-intro";
import { AboutBeliefs } from "@/shared/ui/sections/about-beliefs";
import { AboutEngagement } from "@/shared/ui/sections/about-engagement";
import { AboutWhyCfg } from "@/shared/ui/sections/about-why-cfg";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateMetadata() {
  return buildMetadata(getCompanyProfile().seo);
}

/**
 * About.
 *
 * The one page whose subject is the company itself, so it is also the page that
 * moves differently: the statement lights under the reader, the convictions are
 * dealt as a deck, the engagement arc is walked sideways, and the differences
 * open as one instrument. Every section here is composed for this page and
 * appears nowhere else; the hero and the closing invitation are the site's, so
 * the page still arrives and departs like the rest of it.
 *
 * This segment resolves the aggregate and hands each section its slice. No copy
 * lives here.
 */
export default function AboutPage() {
  const profile = getCompanyProfile();

  return (
    <>
      <PageHero
        trail={[
          { label: "Home", href: routes.home() },
          { label: profile.navLabel },
        ]}
        eyebrow={profile.title}
        heading={profile.tagline}
        headingAccent={profile.taglineAccent}
        intro={profile.summary}
        ctas={profile.ctas}
      >
        <HeroMarquee
          images={[
            "/asset/CloudFusion/cf-01.jpeg",
            "/asset/CloudFusion/cf-02.jpeg",
            "/asset/CloudFusion/cf-04.jpeg",
            "/asset/CloudFusion/cf-06.jpeg",
            "/asset/CloudFusion/cf-07.jpeg",
            "/asset/CloudFusion/cf-08.jpeg",
            "/asset/CloudFusion/cf-11.jpeg",
          ]}
          label="The Cloud Fusion Global team at work"
        />
      </PageHero>

      <AboutIntro paragraphs={profile.intro} />

      <AboutBeliefs section={profile.beliefs} />

      <AboutEngagement section={profile.engagementModel} />

      <AboutWhyCfg section={profile.differentiators} />

      <ClosingCta section={getClosingCta()} />
    </>
  );
}
