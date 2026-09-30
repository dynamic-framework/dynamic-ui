/**
 * The custom-property prefix components write at runtime.
 *
 * One prefix, since `src/style/` and the Bootstrap dependency were removed.
 */
export const PREFIX = 'df-';

/**
 * The 2.x prefix, kept only for the four components still wrapping third-party
 * CSS: DCarousel, DDatePicker, DInputPhone and DSelect.
 *
 * Those libraries own their own markup and variables, and 3.x renames neither —
 * so `--bs-input-phone-*` is still what DInputPhone actually emits, and their
 * docs would be wrong to claim otherwise. This constant exists so those four
 * can say the truth, and it goes when they are ported.
 *
 * @deprecated Nothing new should reach for this. Use {@link PREFIX}.
 */
export const PREFIX_BS = 'bs-';
