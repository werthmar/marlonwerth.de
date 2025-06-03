// Localization
import { useTranslations } from 'next-intl';

export default function Impressum() {
    const t = useTranslations('Imprint');
    return (
        <div className="impressum mx-auto max-w-prose p-4">
            <h1 className="mb-4 text-2xl font-bold">{t('title')}</h1>
            <p>{t('section1')}</p>
            <p>
                {t('name')} <br />
                {t('addressLine1')}
                <br />
                {t('addressLine2')} <br />
            </p>
            <p>
                <strong>{t('representedByTitle')} </strong>
                <br />
                {t('representedBy')}
                <br />
            </p>
            <p>
                <strong>{t('contactTitle')}</strong> <br />
                {t('phone')}: +49-17642186633
                <br />
                {t('email')}:{' '}
                <a
                    href="mailto:werthmar@gmail.com"
                    className="text-blue-500 underline"
                >
                    werthmar@gmail.com
                </a>
                <br />
            </p>
            <br />
            <p>
                <strong>{t('disclaimerTitle')}</strong>
                <br />
                <br />
                <strong>{t('contentLiabilityTitle')}</strong>
                <br />
                {t('contentLiability')}
                <br />
                <br />
                <strong>{t('linkLiabilityTitle')}</strong>
                <br />
                {t('linkLiability')}
                <br />
                <br />
                <strong>{t('copyrightTitle')}</strong>
                <br />
                {t('copyright')}
                <br />
                <br />
                <strong>{t('privacyTitle')}</strong>
                <br />
                {t('privacy')}
                <br />
            </p>
            <br />
            <p>
                {t('impressumGenerator')}{' '}
                <a
                    href="https://www.impressum-generator.de"
                    className="text-blue-500 underline"
                >
                    impressum-generator.de
                </a>
            </p>
        </div>
    );
}
