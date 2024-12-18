/**
 * Config file for the localization using i18next
 * new locales can be added under public/locales
 * add localization to pages with:
 * import { useTranslation } from 'react-i18next';
 * const Navbar: React.FC = () => {
 *      const { t } = useTranslation();
 *      return <p>{t('home')}</p>
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es', 'de'], // Add your supported languages
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    backend: {
      // Translation file path
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;