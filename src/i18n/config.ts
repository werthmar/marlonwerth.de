export type Locale = (typeof locales)[number];

export const locales = ['en', 'de', 'es'] as const;
export const defaultLocale: Locale = 'en';

// Shown in the language pickers; flag is an ISO country code
export const languages: { code: Locale; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'GB' },
    { code: 'es', label: 'Español', flag: 'ES' },
    { code: 'de', label: 'Deutsch', flag: 'DE' },
];
