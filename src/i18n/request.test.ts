import { getUserLocale } from '@/services/locale';
import requestConfig from './request';
import { locales } from './config';

jest.mock('next-intl/server', () => ({
    getRequestConfig: (fn: unknown) => fn,
}));
jest.mock('@/services/locale', () => ({ getUserLocale: jest.fn() }));

const loadConfig = requestConfig as unknown as () => Promise<{
    locale: string;
    messages: Record<string, unknown>;
}>;

describe('i18n request config', () => {
    it.each(locales)(
        'loads messages/%s.json for that locale',
        async (locale) => {
            (getUserLocale as jest.Mock).mockResolvedValue(locale);

            const config = await loadConfig();

            expect(config.locale).toBe(locale);
            expect(config.messages).toEqual(
                (await import(`../../messages/${locale}.json`)).default
            );
        }
    );
});
