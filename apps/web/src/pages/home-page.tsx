import { Card } from '@/components/ui/card';

export function HomePage() {
  return (
    <div className="flex flex-col gap-four">
      <div>
        <h1 className="text-3xl font-semibold">Home</h1>
        <p className="mt-one text-sm text-theme-text-secondary">
          posapp web console
        </p>
      </div>

      <Card>
        <p className="font-mono text-sm">Tailwind v4 Clean Setup</p>
        <p className="mt-one text-sm text-theme-text-secondary">
          Mode gelap &amp; terang ditangani CSS secara native.
        </p>
      </Card>
    </div>
  );
}
