export interface ArrayResponse<T> {
  results: T[];
  page: Number;
  total_pages: Number;
  total_results: Number;
}
