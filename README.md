# LoCo Pro sponsor site

Static sponsor pitch for `sponsors.locopro.pw`, built from the existing six-slide
Google Slides partnership deck and the original sponsor sheet sent September 12,
2026. HTML, CSS, JavaScript, locally hosted fonts and images. No build dependency.

## Content

- $500 per show comes from the original sponsor sheet.
- Three months of weekly recognition and the six benefits follow the September
  20 Google Slides deck and the sponsor partnership video.
- Source deck: https://docs.google.com/presentation/d/1PtCi8hnfREKsA5JTmnx5_9fGqGCpkZD5oXKbWQRa-0M/edit
- Sizzle reel: https://www.youtube.com/watch?v=h0koPU3gucA
- Partnership overview: https://www.youtube.com/watch?v=66EDY1ndmo8
- Both videos were read back as Unlisted and embedding disabled on September 22,
  2026. The page uses direct YouTube links and leaves those settings unchanged.
- The original PDF is preserved byte-for-byte. It contains its original
  September 12 wording, including the historical video-view claim. No audience
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

GitHub Pages workflow follows the existing LoCo static-site pattern. Keep private
correspondence, API readbacks, drafts, and credentials outside this repository.
Publish only after Aaron approves the reviewable site. Create only the sponsors
DNS record; never change sibling subdomains or mail records.

## Verification

Run the shared static and browser checks from the workspace root, with `pwd`
before the checks. Also exercise all six slides, keyboard navigation, both video
destinations, PDF downloads, and narrow mobile widths. The shared browser check
captures 1280, 768, and 390 px layouts. Verify the built artifact excludes source
and repository files. After deployment, repeat the checks against the real host.
