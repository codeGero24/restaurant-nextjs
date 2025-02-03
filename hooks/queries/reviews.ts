// -- HOOKS
import { useQuery } from '@tanstack/react-query';
import { GET_REVIEWS_KEY, INVALIDATION_KEY, getReviews } from '@/services';

export const useGetReviews = () => {
  return useQuery({
    queryKey: [INVALIDATION_KEY, GET_REVIEWS_KEY],
    queryFn: getReviews,
    // - enabled: false, // ⚠️ Disabilita la chiamata automatica
    retry: 1, // ⚠️ Limita il numero di tentativi (default è 3)
    staleTime: 1000 * 60 * 5, // I dati sono considerati freschi per 5 minuti
    gcTime: 1000 * 60 * 10, // Mantiene i dati in cache per 10 minuti
    refetchOnWindowFocus: false, // Evita il refetch quando la finestra torna in focus
    refetchOnMount: false, // Evita il refetch quando il componente si rimonta
  });
};
