import { WebBadge } from '@/components/web-badge';
import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/ui/external-link';

export function ExplorePage() {
  return (
    <div className="flex flex-col gap-four">
      <div className="flex flex-wrap items-end justify-between gap-three">
        <div>
          <h1 className="text-3xl font-semibold">Explore</h1>
          <p className="mt-one text-sm text-theme-text-secondary">
            Contoh kode dan tautan untuk memulai.
          </p>
        </div>
        <WebBadge />
      </div>

      <ExternalLink href="https://docs.expo.dev">
        Expo documentation ↗
      </ExternalLink>

      <div className="flex flex-col gap-three">
        <Collapsible title="Routing">
          <p className="text-sm text-theme-text-secondary">
            Web memakai React Router. Route didefinisikan di{' '}
            <code className="font-mono text-xs">src/router.tsx</code>:{' '}
            <code className="font-mono text-xs">/</code>,{' '}
            <code className="font-mono text-xs">/explore</code>, dan{' '}
            <code className="font-mono text-xs">/test</code>.
          </p>
          <ExternalLink href="https://reactrouter.com/start/data/routing">
            Learn more
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Mobile dan web terpisah">
          <p className="text-sm text-theme-text-secondary">
            Repo ini monorepo: <code className="font-mono text-xs">apps/mobile</code>{' '}
            untuk iOS/Android dan <code className="font-mono text-xs">apps/web</code>{' '}
            untuk browser. Kode bersama ada di{' '}
            <code className="font-mono text-xs">packages/shared</code>.
          </p>
        </Collapsible>

        <Collapsible title="Images">
          <p className="text-sm text-theme-text-secondary">
            Asset web disimpan di <code className="font-mono text-xs">public/images</code>{' '}
            dan dipakai lewat path absolut.
          </p>
          <img
            src="/images/react-logo.png"
            alt="React logo"
            className="mt-two size-25 self-center"
          />
          <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">
            Learn more
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Light and dark mode">
          <p className="text-sm text-theme-text-secondary">
            Token warna ada di{' '}
            <code className="font-mono text-xs">packages/shared/src/theme/tokens.css</code>.
            Toggle di sidebar mengubah class <code className="font-mono text-xs">dark</code>{' '}
            pada elemen html.
          </p>
          <img
            src="/images/tutorial-web.png"
            alt="Tutorial web"
            className="mt-two w-full rounded-lg"
          />
        </Collapsible>

        <Collapsible title="Shared package">
          <p className="text-sm text-theme-text-secondary">
            <code className="font-mono text-xs">@posapp/shared</code> berisi token,
            tipe domain, formatter, dan API client. Komponen UI sengaja tidak dibagi
            agar tiap platform bebas memakai primitifnya sendiri.
          </p>
        </Collapsible>
      </div>
    </div>
  );
}
