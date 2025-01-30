import type { reviewesResp } from '@/types/api';
import type { review } from '@/types/render.data';

import { AxiosRequestConfig } from 'axios';

import { request } from '@/services';
import APIs from '@/constants/api';

export const normalizeReviews = (res: reviewesResp): review[] | undefined => {
  if (res.data) {
    return res.data.map((item, index) => ({
      id: item.id,
      name: item.customer_name,
      profession: item.customer_job,
      review: item.text,
      img: {
        src: `https://themewagon.github.io/restoran/img/testimonial-${index + 1}.jpg`,
        alt: `testimonial-${item.id}`,
      },
    }));
  }
};

export const getReviews = async (): Promise<review[] | undefined> => {
  const config: AxiosRequestConfig = {
    url: APIs.API.reviews,
    method: 'get',
  };
  const res = await request({ config });
  const reviews = normalizeReviews(res.data);
  return reviews;
};
