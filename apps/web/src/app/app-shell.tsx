import { NavLink, Outlet } from 'react-router';

import { ThemeToggle } from '@/components/theme-toggle';

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const navItems: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/explore', label: 'Explore' },
  { to: '/test', label: 'Test' },
  { to: '/coba', label: 'Coba' },
];

function navLinkClassName({ isActive }: { isActive: boolean }) {
  return [
    'rounded-lg px-three py-two text-sm transition-colors',
    isActive
      ? 'bg-theme-selected font-medium text-theme-text'
      : 'text-theme-text-secondary hover:bg-theme-element hover:text-theme-text',
  ].join(' ');
}

export function AppShell() {
  return (
    <div className="min-h-screen bg-theme-bg text-theme-text">
      <div className="mx-auto flex min-h-screen w-full">
        {/* Desktop Web */}
        <aside className="hidden w-60 shrink-0 flex-col border-r border-theme-selected bg-theme-element p-four md:flex">
          <div className="mb-six">
            <p className="font-mono text-2xl italic font-bold">Posa<span className='text-red-600'>pp</span></p>
            <p className="text-xs text-theme-text-secondary">web console</p>
          </div>

          <nav className="flex flex-col gap-one">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={navLinkClassName}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-four">
            <ThemeToggle />
          </div>
        </aside>

        {/* Mobile Web */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between gap-three border-b border-theme-selected px-four py-three md:hidden">
            <div>
              <p className="font-mono text-lg italic font-bold">Posa<span className='text-red-600'>pp</span></p>
              <p className="text-xs text-theme-text-secondary">web console</p>
            </div>
            <ThemeToggle />
          </header>

          <nav className="flex gap-one overflow-x-auto border-b border-theme-selected px-four py-two md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={navLinkClassName}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Content */}
          <main className="flex-1">
            <div className="mx-auto w-full">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
