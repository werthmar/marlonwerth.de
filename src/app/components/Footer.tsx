import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { SiGithub, SiLinkedin, SiOrcid } from 'react-icons/si';

export const SOCIAL = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/marlon-werth',
        icon: SiLinkedin,
    },
    { label: 'GitHub', href: 'https://github.com/werthmar', icon: SiGithub },
    {
        label: 'ORCID',
        href: 'https://orcid.org/0009-0000-9027-6059',
        icon: SiOrcid,
    },
];

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <footer className="border-t border-line">
            <div className="wrap grid gap-10 py-14 md:grid-cols-12 md:py-16">
                <div className="md:col-span-6">
                    <span className="text-lg font-semibold tracking-[-0.01em]">
                        Marlon Werth
                    </span>
                    <p className="mt-4 max-w-sm text-muted">{t('tagline')}</p>
                </div>

                <div className="flex flex-col gap-6 md:col-span-6 md:items-end">
                    <ul className="flex gap-2">
                        {SOCIAL.map(({ label, href, icon: Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="grid size-11 place-items-center rounded-full bg-surface text-ink transition-[background-color,transform] duration-200 hover:bg-surface-2 active:scale-95"
                                >
                                    <Icon size={18} aria-hidden />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
                        <a
                            href="/marlon-werth-cv.pdf"
                            download="Marlon_Werth_CV.pdf"
                            className="link-quiet inline-flex min-h-11 items-center"
                        >
                            {t('cv')}
                        </a>
                        <Link
                            href="/impressum"
                            className="link-quiet inline-flex min-h-11 items-center"
                        >
                            {t('imprint')}
                        </Link>
                        <span className="inline-flex min-h-11 items-center tabular-nums text-muted">
                            © {new Date().getFullYear()} Marlon Werth
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
