'use client';

import Link from 'next/link';
import {
    type MouseEvent,
    useEffect,
    useState,
    useSyncExternalStore,
    useTransition,
} from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Mail, Moon, Sun } from 'lucide-react';

import { setUserLocale } from '@/services/locale';
import { Locale, defaultLocale, locales } from '@/i18n/config';
import ContactDialog from './ContactDialog';

const noopSubscribe = () => () => {};

interface NavbarProps {
    initialLocale?: Locale;
}

export default function Navbar({ initialLocale }: NavbarProps) {
    const t = useTranslations('Navbar');
    const pathname = usePathname();
    const onHome = pathname === '/';
    const [scrolled, setScrolled] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    // The server can't know the theme: render as light until hydrated so the
    // first client render matches the server HTML.
    const hydrated = useSyncExternalStore(
        noopSubscribe,
        () => true,
        () => false
    );
    const isDark = hydrated && resolvedTheme === 'dark';
    const [locale, setLocale] = useState<Locale>(
        initialLocale ?? defaultLocale
    );
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 4);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

    const selectLocale = (next: Locale) => {
        if (next === locale) return;
        setLocale(next);
        startTransition(() => setUserLocale(next));
    };

    const anchor = (id: string) => (onHome ? `#${id}` : `/#${id}`);

    // On the home page the name scrolls back to the top. A plain link to "/"
    // would be a same-page navigation that keeps the scroll position.
    const toTop = (event: MouseEvent<HTMLAnchorElement>) => {
        if (!onHome) return;
        event.preventDefault();
        if (window.location.hash) {
            history.replaceState(null, '', window.location.pathname);
        }
        window.scrollTo({ top: 0 });
        document.getElementById('main')?.focus({ preventScroll: true });
    };

    return (
        <header
            className="site-header sticky top-0 z-40"
            data-scrolled={scrolled}
        >
            <div className="wrap flex h-16 items-center justify-between gap-3">
                <Link
                    href="/"
                    onClick={toTop}
                    className="flex min-h-11 items-center rounded-md"
                >
                    <span className="text-[1.0625rem] font-semibold tracking-[-0.01em]">
                        Marlon Werth
                    </span>
                </Link>

                <nav
                    aria-label="Main"
                    className="hidden items-center gap-7 text-[0.9375rem] lg:flex"
                >
                    <a href={anchor('services')} className="link">
                        {t('services')}
                    </a>
                    <a href={anchor('work')} className="link">
                        {t('work')}
                    </a>
                    <a href={anchor('background')} className="link">
                        {t('background')}
                    </a>
                </nav>

                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div
                        role="group"
                        aria-label={t('language')}
                        aria-busy={isPending}
                        className="flex rounded-full bg-surface p-1 text-[0.8125rem] font-semibold"
                    >
                        {locales.map((code) => (
                            <button
                                key={code}
                                type="button"
                                lang={code}
                                aria-pressed={code === locale}
                                onClick={() => selectLocale(code)}
                                className="min-h-9 min-w-9 rounded-full px-2 uppercase text-muted transition-colors duration-200 hover:text-ink aria-pressed:bg-bg aria-pressed:text-ink aria-pressed:shadow-[0_1px_2px_rgb(0_0_0/0.12)]"
                            >
                                {code}
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={
                            isDark ? t('themeToLight') : t('themeToDark')
                        }
                        className="grid size-11 place-items-center rounded-full text-ink transition-[background-color,transform] duration-200 hover:bg-surface active:scale-95"
                    >
                        {isDark ? (
                            <Sun size={19} strokeWidth={1.75} />
                        ) : (
                            <Moon size={19} strokeWidth={1.75} />
                        )}
                    </button>

                    <ContactDialog
                        triggerClassName="btn btn-primary !min-h-10 !px-3 sm:!px-4"
                        trigger={
                            <>
                                <Mail
                                    size={17}
                                    strokeWidth={1.9}
                                    aria-hidden
                                    className="sm:hidden"
                                />
                                <span className="sr-only sm:not-sr-only">
                                    {t('contact')}
                                </span>
                            </>
                        }
                    />
                </div>
            </div>
        </header>
    );
}
