# Mounts Bay Roofing website

Static one-page site for Mounts Bay Roofing, Penzance. Live at https://mountsbayroofing.co.uk via GitHub Pages.

## Files

- `index.html`, `styles.css`, `script.js` are the whole site. No build step.
- `images/` holds the logo and job photos (sourced from the business's Facebook and Instagram pages).
- `mounts-bay-roofing-10-year-guarantee.pdf` is linked from the guarantee section.
- `CNAME` (currently absent) tells GitHub Pages which custom domain to serve. Once mountsbayroofing.co.uk is registered, add a file called `CNAME` containing just `mountsbayroofing.co.uk` and push.
- `serve.js` is a tiny local preview server: `node serve.js 4190`.

## Deploying

Push to `main`. GitHub Pages serves the repo root. Nothing else to do.

## Pointing the domain at GitHub Pages

At the registrar for mountsbayroofing.co.uk, add these DNS records:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | surrealsucculents.github.io |

Then in the repo Settings > Pages, confirm the custom domain is `mountsbayroofing.co.uk` and tick "Enforce HTTPS" once the certificate has been issued (usually within an hour of DNS propagating).

## Editing

- Phone, email and social links appear in the header, hero, contact section, footer and the JSON-LD block at the top of `index.html`. Search for `07803` and `andrec6` to find every instance.
- To add a photo, drop it in `images/` and add a `<figure>` to the gallery in `index.html`.
