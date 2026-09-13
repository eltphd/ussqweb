# Self-hosted faces

`newsreader-italic.woff2` — Newsreader Italic, variable (opsz 6–72, wght 200–800),
latin subset, from Google Fonts (SIL Open Font License 1.1). It is loaded through
`next/font/local` with `preload: false` so the italic phrase in headlines does not
compete with the roman face and body font for the first paint. The roman face,
Archivo, and IBM Plex Mono are self-hosted by `next/font/google` at build time.
