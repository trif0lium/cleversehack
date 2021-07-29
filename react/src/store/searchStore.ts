import { action, makeAutoObservable } from "mobx";

export class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }

  search: string = "";
  filters: Array<"ONLY_HOSPITEL" | "ONLY_HOSPITAL" | "ONLY_AVAILABLE"> = [];
  sort: { field: string; direction: "asc" | "desc" } | null = null;

  @action
  setSearch(s: string) {
    this.search = s;
  }

  @action
  setFilters(f: Array<"ONLY_HOSPITEL" | "ONLY_HOSPITAL" | "ONLY_AVAILABLE">) {
    this.filters = f;
  }

  @action
  setSort(s: { field: string; direction: "asc" | "desc" } | null) {
    this.sort = s;
  }

  @action
  reset() {
    this.setSearch("");
    this.setFilters([]);
    this.setSort(null);
  }
}
