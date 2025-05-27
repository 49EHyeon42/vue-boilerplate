import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useTheme } from 'vuetify';

export const useThemeStore = defineStore('theme', () => {
  const STORAGE_KEY = '49ehyeon42Key';

  const getThemeFromLocalStorage = (): string | null => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').theme ?? null;
    } catch {
      return null;
    }
  };

  const setThemeInLocalStorage = (theme: string) => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') ?? {};
    data.theme = theme;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const theme = useTheme();

  const savedTheme = getThemeFromLocalStorage();
  const defaultTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  theme.global.name.value = savedTheme || defaultTheme;

  const isDark = computed(() => theme.global.current.value.dark);

  const toggleTheme = () => {
    theme.global.name.value = isDark.value ? 'light' : 'dark';

    setThemeInLocalStorage(theme.global.name.value);
  };

  return {
    isDark,
    toggleTheme,
  };
});
