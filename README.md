# Jason Hong — Portfolio

A responsive, single-page data science portfolio built with plain HTML, CSS, and JavaScript. It includes persistent light and dark color modes. No build step is required, so it can be hosted directly with GitHub Pages.

## Preview locally

Open `index.html` directly, or run a small local server:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personal photo

The homepage portrait is stored at `assets/headshot.png`. The layout uses `object-fit: cover` and a custom focal position so the landscape photo remains well composed inside the portrait frame on responsive layouts.

## Deploy with GitHub Pages

1. Create a GitHub repository and push this folder to the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main`, choose `/ (root)`, then save.

GitHub will publish the site at `https://<username>.github.io/<repository>/`.

## Files

- `index.html` — page content and semantic structure
- `styles.css` — layout, color system, responsive behavior, and motion
- `script.js` — mobile menu, active navigation, and scroll reveal effects
- `assets/resume-zhi-jun-hong.pdf` — downloadable résumé
- `assets/headshot.png` — homepage portrait
