# Ocean Dash

A one-button underwater runner. Jump the submarine over the sharks and collect coins.

## Play it now

**[Play Ocean Dash in your browser](https://mukhtarolarinde.github.io/Ocean_dash/)**. There is nothing to download or install.

To keep it as an app with its own icon and window, install it from that page:

- **Chrome or Edge:** press the install icon at the right of the address bar.
- **Safari on a Mac:** File, then Add to Dock.
- **Phone or tablet:** Share, then Add to Home Screen.

Once installed it works offline.

## Download it

If you would rather have a file, **[download ocean_dash.html](../../releases/latest/download/ocean_dash.html)** and double-click it. The whole game is that one file, and it runs offline.

## Controls

| Key | What it does |
| --- | --- |
| `Space` | Jump |
| `Space` or `R` | Restart after game over |

## For developers

Everything is in `ocean_dash.html`: the markup, the styles and the game code. Edit the file and reload the page.

To publish a new version, go to Releases, press "Draft a new release", type a new tag such as `v1.0.1` and press "Publish release". The workflow in `.github/workflows/release.yml` attaches the file by itself. `.github/workflows/pages.yml` publishes the browser version on every change to `main`, once Pages is switched on (Settings, Pages, Source: GitHub Actions).
