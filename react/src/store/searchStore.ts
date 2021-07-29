import { isEmpty } from 'lodash';
import { action, computed, makeAutoObservable } from 'mobx';

class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }

  search: string = '';
  filters: Array<'ONLY_HOSPITEL' | 'ONLY_HOSPITAL' | 'ONLY_AVAILABLE'> = [];
  sort: { field: string; direction: 'asc' | 'desc' } | null = null;

  @action
  setSearch(s: string) {
    this.search = s;
  }

  @action
  setFilters(f: Array<'ONLY_HOSPITEL' | 'ONLY_HOSPITAL' | 'ONLY_AVAILABLE'>) {
    this.filters = f;
  }

  @action
  setSort(s: { field: string; direction: 'asc' | 'desc' } | null) {
    this.sort = s;
  }

  @action
  reset() {
    this.setSearch('');
    this.setFilters([]);
    this.setSort(null);
  }

  @computed
  get isFiltering(): boolean {
    return this.filters.length > 0;
  }

  @computed
  get isSearching(): boolean {
    return !isEmpty(this.search);
  }
}

export const searchStore = new SearchStore();
