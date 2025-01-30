// -- HOOKS
import { useQuery } from '@tanstack/react-query';
import { GET_REVIEWS_KEY, INVALIDATION_KEY, getReviews } from '@/services';

export const useGetReviews = () => {
  return useQuery({
    queryKey: [INVALIDATION_KEY, GET_REVIEWS_KEY],
    queryFn: getReviews,
  });
};
