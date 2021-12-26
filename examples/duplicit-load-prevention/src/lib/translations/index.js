import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'lang',
      loader: () => lang,
    },
    {
      locale: 'en',
      key: 'menu',
      loader: async () => (await import('./en/menu.json')).default,
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./en/about.json')).default,
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./en/home.json')).default,
    },
    {
      locale: 'cs',
      key: 'lang',
      loader: () => lang,
    },
    {
      locale: 'cs',
      key: 'menu',
      loader: async () => (await import('./cs/menu.json')).default,
    },
    {
      locale: 'cs',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./cs/about.json')).default,
    },
    {
      locale: 'cs',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./cs/home.json')).default,
    },
  ],
});

export const { t, locales, locale, loadTranslations, translations, addTranslations, initialized } = new i18n(config);