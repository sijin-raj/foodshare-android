import i18next from 'i18next';
import en from './en';
import tr from './tr';
import { format } from 'date-fns';
import { enGB as English, tr as Turkish } from 'date-fns/locale';

export const resources = {
  en,
  tr,
} as const;

export type Languages = keyof typeof resources;

const getDateLocale = (lng?: string) => {
  switch (lng) {
    case 'tr':
      return Turkish;
    case 'en':
    default:
      return English;
  }
};

const i18n = i18next.createInstance();
i18n.init({
  fallbackLng: 'en',
  lng: 'en',
  supportedLngs: ['en', 'tr'],
  defaultNS: 'common',
  resources,
  react: {
    useSuspense: false,
  },
  interpolation: {
    format: (value, pattern, lng) => {
      if (value instanceof Date && pattern) {
        return format(value, pattern, { locale: getDateLocale(lng) });
      }
      return value;
    },
  },
});

declare module 'react-i18next' {
  type DefaultResources = typeof resources['en'];
  interface Resources extends DefaultResources {}
}

export default i18n;
