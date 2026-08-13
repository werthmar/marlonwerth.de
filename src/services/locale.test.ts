import { cookies } from 'next/headers';
import { getUserLocale, setUserLocale } from './locale';
import { defaultLocale } from '@/i18n/config';

jest.mock('next/headers', () => ({
    cookies: jest.fn(),
}));

const mockedCookies = cookies as jest.Mock;

describe('locale service', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('returns the cookie value when NEXT_LOCALE is set', async () => {
        const get = jest.fn().mockReturnValue({ value: 'de' });
        mockedCookies.mockResolvedValue({ get, set: jest.fn() });

        const locale = await getUserLocale();

        expect(get).toHaveBeenCalledWith('NEXT_LOCALE');
        expect(locale).toBe('de');
    });

    it('falls back to the default locale when no cookie is set', async () => {
        const get = jest.fn().mockReturnValue(undefined);
        mockedCookies.mockResolvedValue({ get, set: jest.fn() });

        expect(await getUserLocale()).toBe(defaultLocale);
    });

    it('sets the NEXT_LOCALE cookie', async () => {
        const set = jest.fn();
        mockedCookies.mockResolvedValue({ get: jest.fn(), set });

        await setUserLocale('es');

        expect(set).toHaveBeenCalledWith('NEXT_LOCALE', 'es');
    });
});
