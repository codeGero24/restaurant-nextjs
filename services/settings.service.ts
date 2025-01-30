import type { settingsResp } from '@/types/api';

import { AxiosRequestConfig } from 'axios';
import { request } from '@/services';
import APIs from '@/constants/api';

export const normalizeHeaderItem = (
  settings: settingsResp
): settingsResp['headerItems'] | undefined =>
  settings?.headerItems?.map(item => {
    const path = item.path === 'home' ? '' : item.path;
    return {
      path: '/' + path,
      label: item.label,
      name: item.label,
      title: item.title,
      group: item.group,
    };
  });

export const normalizeSettings = (settings: settingsResp) => ({
  ...settings,
  headerItems: normalizeHeaderItem(settings),
});

export const getSettings = async (): Promise<settingsResp> => {
  const config: AxiosRequestConfig = {
    url: APIs.API.settings,
    method: 'get',
  };
  const res = await request({ config });
  return res.data;
};
