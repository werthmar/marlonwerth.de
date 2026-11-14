'use server';

import { cookies } from 'next/headers';
import { Locale, defaultLocale, locales } from '@/i18n/config';

const COOKIE_NAME = 'NEXT_LOCALE';

// The cookie is user-controlled, so only accept known locales. Anything else
// would be used to import messages/<value>.json and crash every page.
export async function getUserLocale(): Promise<Locale> {
    const value = (await cookies()).get(COOKIE_NAME)?.value;
    return locales.find((locale) => locale === value) ?? defaultLocale;
}

export async function setUserLocale(locale: Locale) {
    (await cookies()).set(COOKIE_NAME, locale);
}
