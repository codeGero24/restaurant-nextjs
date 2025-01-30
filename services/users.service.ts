import type { usersResp, user } from '@/types/api';

import { AxiosRequestConfig } from 'axios';
import { request } from '@/services';
import APIs from '@/constants/api';

// - Mock
import { profession, review } from '@/mock/testimonial';

export const normalizeUser = (res: usersResp): Array<user> | undefined => {
  if (res.users) {
    return res.users.map(item => ({
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      name: item.firstName + item.lastName,
      review: item.review || review,
      profession: item.profession || profession,
      role: item.role,
      email: item.email,
      img: {
        src: item.image || 'https://placehold.co/60x60',
        alt: `user-${item.firstName + item.lastName}`,
      },
    }));
  }
};

// ----------------------------------------------------------------
// -     GET
// ----------------------------------------------------------------
export const getUsers = async (): Promise<user[] | undefined> => {
  const config: AxiosRequestConfig = {
    url: APIs.API_DUMMY.users,
    method: 'get',
  };
  const res = await request({ config });
  const users = normalizeUser(res.data);
  return users;
};

export const getFilterUsers = async (): Promise<user[] | undefined> => {
  const config: AxiosRequestConfig = {
    url: '/users/filter',
    method: 'get',
  };
  const res = await request({ config });
  const users = normalizeUser(res.data);
  return users;
};

export const getSearchrUsers = async (): Promise<user[] | undefined> => {
  const config: AxiosRequestConfig = {
    url: '/users/search',
    method: 'get',
  };
  const res = await request({ config });
  const users = normalizeUser(res.data);
  return users;
};

// ----------------------------------------------------------------
// -     POST
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// -     PUT
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// -     DELETE
// ----------------------------------------------------------------
