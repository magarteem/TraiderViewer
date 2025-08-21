export type Pagination = {
  limit: number;
  offset: number;
  page?: number;
};

export type Meta<T> = {
  items: T;
  page: number;
  total: number;
  limit: number;
  offset: number;
};
