export interface Storage<T> {
  key: string;
  value?: T;
}

export const setLocalStorage = <T>({ key, value }: Storage<T>): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T>({ key }: Storage<T>): T | null => {
  const result = localStorage.getItem(key);
  return typeof result === 'string' ? JSON.parse(result) : null;
};
