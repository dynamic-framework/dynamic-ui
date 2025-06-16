export default function getKeyboardFocusableElements(
  container?: HTMLElement,
): HTMLElement[] {
  if (!container) {
    return [];
  }
  return [
    ...container.querySelectorAll<HTMLElement>(
      'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((element) => !element.hasAttribute('disabled'));
}
