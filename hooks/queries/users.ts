import type { user } from '@/types/api';
// -- HOOKS
import { useQuery } from '@tanstack/react-query';
import { GET_USERS_KEY, INVALIDATION_KEY, getUsers, getFilterUsers } from '@/services';

// - Types

export interface paramsGetUser {
  limit?: number;
  select?: string;
  skip?: number;
  sortBy?: keyof user;
  order?: 'asc' | 'dsc';
}

export const useGetUsers = ({ params }: { params: paramsGetUser }) => {
  return useQuery({
    queryKey: [INVALIDATION_KEY, GET_USERS_KEY, params],
    queryFn: getUsers,
  });
};

export interface paramsFilterUser {
  limit?: number;
  select?: string;
  skip?: number;
  sortBy?: keyof user;
  order?: 'asc' | 'dsc';
}

export const useFilterUsers = ({ params }: { params: paramsFilterUser }) => {
  return useQuery({
    queryKey: [INVALIDATION_KEY, GET_USERS_KEY, params],
    queryFn: getFilterUsers,
  });
};
