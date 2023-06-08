interface ITableMeta {
  current_page: number;
  from: null;
  last_page: number;
  links: {
    first: string;
    last: string;
    prev: string;
    next: string;
  };
  path: string;
  per_page: number;
  to: null;
  total: number;
}

interface ITableHeaderItem {
  text?: string;
  key: string;
  index?: number;
  align?: number;
}
