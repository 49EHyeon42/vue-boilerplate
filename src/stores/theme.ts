import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useTheme } from 'vuetify';

export const useThemeStore = defineStore('theme', () => {
  const theme = useTheme();

  theme.global.name.value = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const isDark = computed(() => theme.global.current.value.dark);

  const toggleTheme = () => {
    theme.global.name.value = isDark.value ? 'light' : 'dark';
  };

  return {
    isDark,
    toggleTheme,
  };
});
