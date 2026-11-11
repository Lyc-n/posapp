# posapp monorepo

Monorepo berisi aplikasi mobile Expo dan web Vite. Pemisahan platform adalah aturan utama.

## Struktur

- `apps/mobile` — Expo SDK 58, target **iOS dan Android saja**.
- `apps/web` — Vite + React 19 + React Router + Tailwind v4, SPA.
- `packages/shared` — `@posapp/shared`: token desain, tipe domain, formatter, API client. Tanpa UI.

## Aturan pemisahan

- Jangan import antar `apps/*`. Pakai `@posapp/shared`.
- `apps/mobile` tidak boleh memakai `react-native-web`, `react-dom`, file `.web.tsx`, atau komponen web-only.
- `apps/web` tidak boleh memakai `react-native` atau modul Expo.
- Komponen UI tetap di app masing-masing. Hanya token, tipe, util, dan API client yang dibagi.
- Token desain hanya di `packages/shared/src/theme/tokens.css`. Jangan duplikasi nilai warna/spacing.
- Asset mobile di `apps/mobile/assets`; asset web di `apps/web/public`.

## Commands

Jalankan dari root repo.

```bash
npm install
npm run dev:mobile
npm run dev:web
npm run lint
npm run typecheck
npm run build:web
```

Expo-specific:

```bash
cd apps/mobile
npx expo install <package>   # selalu ini, bukan npm install
npx expo start -c            # clear Metro cache
npx expo-doctor
```

`expo-router` juga terpasang di root `devDependencies` agar CLI typed-routes bisa me-resolve package hasil hoisting npm. Jaga versinya sama dengan `apps/mobile`.

## Expo: jangan percaya training data

Expo merilis breaking changes tiap SDK. Sebelum menulis kode yang menyentuh API Expo/EAS/React Native:

1. Baca major version `expo` di `apps/mobile/package.json`.
2. Buka docs versi tersebut: `https://docs.expo.dev/versions/v<major>.0.0/`.
3. Untuk topik lain, mulai dari https://docs.expo.dev/llms.txt.

## Navigation & routing

- Mobile memakai Expo Router. Route di `apps/mobile/src/app/`.
- Web memakai React Router. Route di `apps/web/src/router.tsx`.
- Jangan menambahkan route web ke app mobile, atau sebaliknya.

## Styling

- Mobile: Tailwind via uniwind (`apps/mobile/src/global.css`).
- Web: Tailwind v4 via `@tailwindcss/vite` (`apps/web/src/styles/global.css`).
- Keduanya meng-import token yang sama dari `@posapp/shared/theme/tokens.css`.

## Build & deploy

- Mobile dibuild lewat EAS (`eas build`, `eas update`). Jalankan `bunx eas-cli` atau `npx eas-cli@latest`.
- Web dibuild dengan `npm run build:web` (output `apps/web/dist`).
