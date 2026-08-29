import { getClosingCta, getCompanyProfile } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { AboutHero } from "@/shared/ui/sections/about-hero";
import { AboutIntro } from "@/shared/ui/sections/about-intro";
import { AboutBeliefs } from "@/shared/ui/sections/about-beliefs";
import { AboutEngagement } from "@/shared/ui/sections/about-engagement";
import { AboutWhyCfg } from "@/shared/ui/sections/about-why-cfg";
import { Offices } from "@/shared/ui/sections/offices";
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
      <AboutHero
        eyebrow={profile.title}
        heading={profile.tagline}
        headingAccent={profile.taglineAccent}
        intro={profile.summary}
        ctas={profile.ctas}
        images={[
          "/asset/CloudFusion/cf-01.jpeg",
          "/asset/CloudFusion/cf-03.jpeg",
          "/asset/CloudFusion/cf-04.jpeg",
          "/asset/CloudFusion/cf-05.jpeg",
          "/asset/CloudFusion/cf-08.jpeg",
          "/asset/CloudFusion/cf-10.jpeg",
          "/asset/CloudFusion/cf-11.jpeg",
          "/asset/CloudFusion/cf-12.jpeg",
          "/asset/CloudFusion/cf-13.jpeg",
        ]}
        label="The Cloud Fusion Global team at work"
      />

      <AboutIntro paragraphs={profile.intro} />

      <AboutBeliefs section={profile.beliefs} />

      <AboutEngagement section={profile.engagementModel} />

      <AboutWhyCfg section={profile.differentiators} />

      <Offices />

      <ClosingCta section={getClosingCta()} />
    </>
  );
}
