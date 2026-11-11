# posapp

Monorepo untuk aplikasi POS: aplikasi mobile (Expo) dan web console (Vite) dipisah menjadi dua app, dengan kode bersama di satu package.

## Struktur

```
apps/
  mobile/   Expo SDK 58 — iOS dan Android
  web/      Vite + React 19 + React Router + Tailwind v4
packages/
  shared/   Token desain, tipe domain, formatter, API client
```

| Bagian | Tanggung jawab |
| --- | --- |
| `apps/mobile` | UI native, navigasi Expo Router + NativeTabs, animasi Reanimated |
| `apps/web` | UI browser, routing React Router, layout sidebar/topbar |
| `packages/shared` | `@posapp/shared` — hanya kode non-UI yang dipakai kedua app |

Aturan pemisahan:

- Tidak ada import langsung antar `apps/*`. Semua lewat `@posapp/shared`.
- `apps/mobile` tidak memakai `react-native-web`, `react-dom`, atau file `.web.tsx`.
- `apps/web` tidak memakai `react-native` atau modul Expo.
- Komponen UI tidak dibagi; tiap platform memakai primitifnya sendiri.
- Token warna, spacing, dan font hanya didefinisikan di `packages/shared/src/theme/tokens.css`.

## Menjalankan

Butuh Node.js 20.19+ dan npm 10+.

```bash
npm install
```

```bash
npm run dev:mobile   # Expo dev server (iOS/Android)
npm run dev:web      # Vite dev server
```

Perintah lain:

```bash
npm run lint         # lint semua workspace
npm run typecheck    # typecheck semua workspace
npm run build:web    # production build web
```

Menambah dependency Expo harus dari workspace mobile:

```bash
cd apps/mobile
npx expo install <package>
```

Jangan memakai `npm install <package>` langsung untuk library native.

## Design token

`packages/shared/src/theme/tokens.css` berisi `@theme` Tailwind v4, variabel warna light/dark, spacing, dan font. Kedua app meng-import file yang sama:

- `apps/mobile/src/global.css`
- `apps/web/src/styles/global.css`

Utility seperti `bg-theme-bg`, `text-theme-text-secondary`, dan `max-w-content` tersedia di mobile maupun web.

## Catatan monorepo

- Metro Expo mendeteksi workspace otomatis sejak SDK 52; tidak ada `watchFolders` manual.
- `expo-router` dipasang juga di root `devDependencies` agar CLI typed-routes bisa me-resolve package yang di-hoist npm. Versinya harus sama dengan yang dipakai `apps/mobile`.
- Asset tidak dibagi: mobile di `apps/mobile/assets`, web di `apps/web/public`.
