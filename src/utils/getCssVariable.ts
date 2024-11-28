export default function getCssVariable(variable: string) {
  const computedStyle = getComputedStyle(document.documentElement);
  return computedStyle.getPropertyValue(variable).trim();
}
