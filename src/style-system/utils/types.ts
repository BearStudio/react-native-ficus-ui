export type ResponsiveValue<T> = T | Record<string, T> | T[];

export type Dict<T = any> = { [key: string]: T };

export type Transform = (value: any, themeScope: { [key: string]: any }) => any;
