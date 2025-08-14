import type { CategoryAll } from "../types/categoryType";
import { api } from "../utils/api";

export function useCategory() {
  async function getAllCategory(): Promise<CategoryAll[]> {
    const res = await api.get("/category");
    return res.data as CategoryAll[];
  }

  return { getAllCategory };
}
