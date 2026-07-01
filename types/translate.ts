export type TranslationKey = string;

export type TranslationAriaKey = string;

export interface TranslateProps {
  translationKey: TranslationKey;
  values?: Record<string, string | number | Date>;
}

export interface OptionalTranslateProps {
  translationKey?: TranslationKey;
  values?: Record<string, string | number | Date>;
}
