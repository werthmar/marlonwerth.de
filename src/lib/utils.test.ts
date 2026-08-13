import { cn } from './utils';

describe('cn', () => {
    it('merges plain class strings', () => {
        expect(cn('flex', 'items-center')).toBe('flex items-center');
    });

    it('deduplicates conflicting Tailwind classes, keeping the last one', () => {
        expect(cn('px-2', 'px-4')).toBe('px-4');
    });

    it('ignores falsy values', () => {
        expect(cn('flex', undefined, null, false, '')).toBe('flex');
    });

    it('supports conditional object syntax', () => {
        expect(cn({ 'class-a': true, 'class-b': false })).toBe('class-a');
    });

    it('returns an empty string when called with no arguments', () => {
        expect(cn()).toBe('');
    });
});
