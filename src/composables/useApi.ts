import { ref } from 'vue';

export function useApi() {
  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const execute = async <T>(apiFunction: () => Promise<T>) => {
    isLoading.value = true;
    error.value = null;

    try {
      return await apiFunction();
    } catch (err) {
      error.value = err as Error;
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return { isLoading, error, execute };
}
