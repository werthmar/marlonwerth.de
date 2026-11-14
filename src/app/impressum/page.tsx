import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';

export default function Impressum() {
    const t = useTranslations('Imprint');

    const sections = [
        ['contentLiabilityTitle', 'contentLiability'],
        ['linkLiabilityTitle', 'linkLiability'],
        ['copyrightTitle', 'copyright'],
        ['privacyTitle', 'privacy'],
    ] as const;

    return (
        <article className="wrap max-w-[46rem] py-16 md:py-24">
            <Link
                href="/"
                className="link inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-medium"
            >
                <ArrowLeft size={16} aria-hidden />
                {t('back')}
            </Link>
            <h1 className="h2 mt-6">{t('title')}</h1>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                    <h2 className="text-sm font-semibold text-muted">
                        {t('section1')}
                    </h2>
                    <p className="mt-2">
                        {t('name')}
                        <br />
                        {t('addressLine1')}
                        <br />
                        {t('addressLine2')}
                    </p>
                    <p className="mt-4">
                        <span className="text-muted">
                            {t('representedByTitle')}
                        </span>{' '}
                        {t('representedBy')}
                    </p>
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-muted">
                        {t('contactTitle')}
                    </h2>
                    <p className="mt-2">
                        {t('phone')}: +49-17642186633
                        <br />
                        {t('email')}:{' '}
                        <a
                            href="mailto:werthmar@gmail.com"
                            className="link-quiet"
                        >
                            werthmar@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            <h2 className="h3 mt-14">{t('disclaimerTitle')}</h2>
            {sections.map(([title, body]) => (
                <section key={title} className="mt-6">
                    <h3 className="font-semibold">{t(title)}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                        {t(body)}
                    </p>
                </section>
            ))}

            <p className="mt-12 text-sm text-muted">
                {t('impressumGenerator')}{' '}
                <a
                    href="https://www.impressum-generator.de"
                    className="link-quiet"
                >
                    impressum-generator.de
                </a>
            </p>
        </article>
    );
}
