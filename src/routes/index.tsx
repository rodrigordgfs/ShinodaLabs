import { createFileRoute } from "@tanstack/react-router";
import { RustInspiredSite } from "@/components/site/RustInspiredSite";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_KEYWORDS,
  buildCanonicalLink,
  buildMetaTags,
} from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: RustInspiredSite,
  head: () => ({
    meta: buildMetaTags({
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      keywords: SITE_KEYWORDS,
      path: "/",
    }),
    links: [buildCanonicalLink("/")],
  }),
});
