# LoCo Pro sponsor site

Static sponsor pitch for `sponsors.locopro.pw`, built from the existing six-slide
Google Slides partnership deck and the original sponsor sheet sent September 12,
2026. HTML, CSS, JavaScript, locally hosted fonts and images. No build dependency.

## Content

- $500 per show comes from the original sponsor sheet.
- Three months of weekly recognition and the six benefits follow the September
  20 Google Slides deck and the sponsor partnership video.
- Aaron confirmed the campaign window on September 22: October 24, 2026 through
  the January 24, 2027 show. All three months lead into that show. The start and
  end dates are fixed, rather than calculated from a sponsor's signup date.
- The hero, package, weekly benefits, video introduction, download section, and
  contact copy use that window. Source slides, videos, and original PDFs retain
  their original wording; the website's dated campaign terms govern this offer.
- Source deck: https://docs.google.com/presentation/d/1PtCi8hnfREKsA5JTmnx5_9fGqGCpkZD5oXKbWQRa-0M/edit
- Sizzle reel: https://www.youtube.com/watch?v=h0koPU3gucA
- Partnership overview: https://www.youtube.com/watch?v=66EDY1ndmo8
- Both videos were read back as Unlisted and embedding disabled on September 22,
  2026. The page uses direct YouTube links and leaves those settings unchanged.
- Sponsorship contact is `sponsors@locoprowrestling.com` (Aaron, September 24).
  The native deck, downloadable PDFs, slide 6 image, and site contact links
  use this address. Existing YouTube video renders still require replacement;
  their Remotion sources have been updated, but no video was re-uploaded.
- The September 12 PDF original is preserved byte-for-byte under the excluded
  `source-assets/contact-update-2026-09-24/` directory. The public PDF changes
  only the sponsorship email, its fit, and adds its mailto link. It retains the
  September 12 wording otherwise, including the historical video-view claim. No audience
  metric from that document is presented as a current site metric.
- The deck is exported as a local PDF and six web images. Its Drive sharing
  settings are unchanged, and visitors do not need Drive access.
- Event photography is reused from the LoCo press kit. Retain the credit
  `Photo by CMRice Photography` and its Instagram link.
- Fonts are Barlow Condensed and DM Sans under the included OFL licenses.

## Preview and publish artifact

```sh
cd /Users/gecko/locoprowrestling/LoCoProWebsites/sponsors
./scripts/build-pages.sh . _site
python3 -m http.server 8118 --bind 127.0.0.1 --directory _site
```

GitHub Pages publishes from `main` using the included Actions workflow.
Repository: https://github.com/locoprowrestling/sponsors
Public site: https://sponsors.locopro.pw/

Porkbun DNS uses an `ALIAS` record named `sponsors`, pointing to
`locoprowrestling.github.io`, TTL 600. The Pages custom domain must match `CNAME`;
HTTPS enforcement is enabled after certificate issuance. Keep private
correspondence, API readbacks, drafts, and credentials outside this repository.
Change only the sponsors record, never sibling subdomains or mail records.

For a content rollback, revert the relevant commit and redeploy through the same
workflow. Before removing the site or its DNS record, obtain approval for that
live change and preserve the record and Pages settings.

## Verification

Run the shared static and browser checks from the workspace root, with `pwd`
before the checks. Also exercise all six slides, keyboard navigation, both video
destinations, PDF downloads, and narrow mobile widths. The shared browser check
captures 1280, 768, and 390 px layouts. Verify the built artifact excludes source
and repository files. After deployment, repeat the checks against the real host.
