import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="flex flex-col gap-three">
      <h1 className="text-3xl font-semibold">404</h1>
      <p className="text-sm text-theme-text-secondary">
        Halaman tidak ditemukan.
      </p>
      <Link to="/" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
        Kembali ke Home
      </Link>
    </div>
  );
}
