import type {
  CategoryActive,
  CategoryAll,
  ListCategory,
  SubCategory,
} from "../types/categoryType";
import { api } from "../utils/api";

export function useCategory() {
  async function getAllCategory(): Promise<CategoryAll[]> {
    const res = await api.get("/category");
    return res.data as CategoryAll[];
  }

  async function getSubCategory(): Promise<SubCategory[]> {
    const res = await api.get("/category");
    return res.data as SubCategory[];
  }

  async function getListCategory(): Promise<ListCategory[]> {
    const res = await api.get("/category");
    return res.data as ListCategory[];
  }

  async function getCategoryActive(): Promise<CategoryActive[]> {
    const res = await api.get("category");
    return res.data as CategoryActive[];
  }

  return { getAllCategory, getSubCategory, getListCategory, getCategoryActive };
}
