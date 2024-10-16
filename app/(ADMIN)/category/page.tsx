
// File: CrudExample.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Category } from './types';
import { fetchCategories, createCategory, updateCategory, deleteCategory } from './api';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

const CrudExamplePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  useEffect(() => {
    fetchAndSetCategories();
  }, []);

  const fetchAndSetCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (data: Omit<Category, 'id'>) => {
    try {
      if (editingCategory) {
        await updateCategory(editingCategory.id, data);
      } else {
        await createCategory(data);
      }
      setEditingCategory(null);
      fetchAndSetCategories();
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteCategory(id);
      fetchAndSetCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Category Page</h1>

      <CategoryForm
        onSubmit={handleSubmit}
        initialData={editingCategory ? { cat_name: editingCategory.cat_name, cat_desc: editingCategory.cat_desc } : undefined}
        onCancel={editingCategory ? () => setEditingCategory(null) : undefined}
      />

      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <CategoryList
        categories={categories}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CrudExamplePage;