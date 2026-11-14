import { readFileSync } from 'fs';
import path from 'path';
import { defaultLocale, locales } from './config';

type Messages = { [key: string]: string | Messages };

// Loads messages/<locale>.json flattened to { "Section.key": "text" }
function load(locale: string): Record<string, string> {
    const file = path.join(__dirname, '../../messages', `${locale}.json`);
    const flatten = (node: Messages, prefix = ''): [string, string][] =>
        Object.entries(node).flatMap(([key, value]) =>
            typeof value === 'string'
                ? [[prefix + key, value]]
                : flatten(value, `${prefix}${key}.`)
        );
    return Object.fromEntries(flatten(JSON.parse(readFileSync(file, 'utf8'))));
}

// ICU argument names, e.g. "Hi {name}" -> ["name"]
const placeholders = (text: string) =>
    [...text.matchAll(/\{\s*(\w+)/g)].map((m) => m[1]).sort();

const reference = load(defaultLocale);

describe.each(locales)('messages/%s.json', (locale) => {
    const messages = load(locale);

    it(`has the same keys as ${defaultLocale}.json`, () => {
        expect(Object.keys(messages).sort()).toEqual(
            Object.keys(reference).sort()
        );
    });

    it(`uses the same placeholders as ${defaultLocale}.json`, () => {
        for (const [key, text] of Object.entries(messages)) {
            if (key in reference) {
                expect([key, placeholders(text)]).toEqual([
                    key,
                    placeholders(reference[key]),
                ]);
            }
        }
    });

    it('has no empty strings', () => {
        const empty = Object.keys(messages).filter((k) => !messages[k].trim());
        expect(empty).toEqual([]);
    });
});
