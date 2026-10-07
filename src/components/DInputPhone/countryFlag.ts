/**
 * A country's flag, as text.
 *
 * `react-international-phone` draws flags with
 * `<img src="https://cdnjs.cloudflare.com/.../twemoji/14.0.2/svg/{code}.svg">`
 * — one network request per flag. Opening the selector asks for 217 of them,
 * which is the pause a reader feels on focus.
 *
 * It is worse than slow for the pages this library is for. Every flag is a GET
 * to a third party at runtime: a Content-Security-Policy to widen, a request
 * that leaves the bank's origin, and nothing at all behind a corporate
 * firewall or offline — where the control silently loses its flags.
 *
 * A flag emoji is just two Unicode regional indicators, so this costs no bytes
 * and no requests.
 *
 * ## Where it does not work
 *
 * Windows ships no flag glyphs in Segoe UI Emoji, so `🇨🇱` renders there as the
 * two letters `CL` in boxes. That is a real limitation and it is why the
 * selector shows the ISO code beside the flag rather than relying on it: the
 * country is identifiable either way, and a reader on Windows sees a letter
 * pair instead of a picture rather than seeing nothing.
 */

/** The offset from an ASCII capital to its regional indicator. */
const REGIONAL_INDICATOR_A = 0x1f1e6;
const ASCII_A = 'A'.codePointAt(0) as number;

export default function countryFlag(iso2: string): string {
  /*
   * Two letters exactly. An ISO 3166-1 alpha-2 code is always two, and
   * anything else — an empty string mid-render, a three-letter code from a
   * consumer's own list — would produce a pair of unrelated symbols rather
   * than failing visibly.
   */
  if (!/^[a-zA-Z]{2}$/.test(iso2)) return '';

  return [...iso2.toUpperCase()]
    .map((letter) => String.fromCodePoint(
      (letter.codePointAt(0) as number) - ASCII_A + REGIONAL_INDICATOR_A,
    ))
    .join('');
}
