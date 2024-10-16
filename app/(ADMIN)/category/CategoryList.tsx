

// File: CategoryList.tsx
import React from 'react';
import { Category } from './types';

interface CategoryListProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onEdit, onDelete }) => {
  return (
    <ul className="space-y-2">
      {categories.map((category) => (
        <li key={category.id} className="border p-3 rounded flex justify-between items-center">
          <div>
            <p className="font-semibold">{category.cat_name}</p>
            <p className="text-gray-600">{category.cat_desc}</p>
          </div>
          <div>
            <button
              onClick={() => onEdit(category)}
              className="bg-yellow-500 text-white p-1 rounded mr-2 hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(category.id)}
              className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
