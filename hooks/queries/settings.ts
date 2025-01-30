// -- HOOKS
import { useQuery } from '@tanstack/react-query';
import { GET_SETTINGS_KEY, INVALIDATION_KEY, getSettings } from '@/services';

export const useGetSettings = () => {
  return useQuery({
    queryKey: [INVALIDATION_KEY, GET_SETTINGS_KEY],
    queryFn: getSettings,
  });
};
