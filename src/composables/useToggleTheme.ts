import { useTheme } from 'vuetify';

export const useToggleTheme = () => {
  const theme = useTheme();

  theme.global.name.value = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  };

  return toggleTheme;
};
