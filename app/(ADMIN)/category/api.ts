// File: api.ts

import pb from '@/app/lib/pocketbase';
import { Category } from './types';


const tableName = 'category';

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    return await pb.collection(tableName).getFullList<Category>();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const createCategory = async (data: Omit<Category, 'id'>): Promise<Category> => {
  try {
    return await pb.collection(tableName).create<Category>(data);
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};

export const updateCategory = async (id: string, data: Omit<Category, 'id'>): Promise<Category> => {
  try {
    return await pb.collection(tableName).update<Category>(id, data);
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

export const deleteCategory = async (id: string): Promise<boolean> => {
  try {
    await pb.collection(tableName).delete(id);
    return true;
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};