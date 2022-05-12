export type Response<T> = { data: T };

export type Pageable<T> = { page: number; per_page: number; total: number; total_pages: number; data: T[] };
