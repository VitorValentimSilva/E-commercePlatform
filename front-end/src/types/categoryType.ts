export interface CategoryAll {
  id: number;
  name: string;
  order: number;
  isActive: boolean;
  imageUrl: string;
  metaTitle: string;
  metaDescription: string;
  createdAt: string;
  updateAt: string;
}

export interface SubCategory {
  id: number;
  name: string;
}

export interface ListCategory {
  id: number;
  name: string;
  order: number;
  isActive: boolean;
  imageUrl: string;
}

export interface CategoryActive {
  isActive: boolean;
}
