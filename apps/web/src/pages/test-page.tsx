import { Card } from '@/components/ui/card';

export function TestPage() {
  return (
    <div className="flex flex-col gap-four">
      <div>
        <h1 className="text-3xl font-semibold">Test</h1>
        <p className="mt-one text-sm text-theme-text-secondary">
          Halaman contoh untuk mengecek token dan komponen.
        </p>
      </div>

      <Card className="max-w-sm">
        <div className="size-4 rounded-full bg-theme-selected" />
        <div className="mt-three h-12 rounded-xl bg-theme-selected px-four py-two" />
      </Card>
    </div>
  );
}
