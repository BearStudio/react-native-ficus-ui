export function getProperty(
  value: any,
  themeScope: Record<string, any> | undefined
) {
  if (themeScope?.[value]) {
    return themeScope[value];
  }

  return value;
}

export * from './color';
