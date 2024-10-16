
// File: CategoryForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Category, categoryValidationSchema } from './types';

interface CategoryFormProps {
  onSubmit: (data: Omit<Category, 'id'>) => void;
  initialData?: Omit<Category, 'id'>;
  onCancel?: () => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onSubmit, initialData, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Category, 'id'>>({
    resolver: yupResolver(categoryValidationSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          {...register('cat_name')}
          className={`border p-2 w-full ${errors.cat_name ? 'border-red-500' : ''}`}
        />
        {errors.cat_name && <p className="text-red-500">{errors.cat_name.message}</p>}
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Description"
          {...register('cat_desc')}
          className={`border p-2 w-full ${errors.cat_desc ? 'border-red-500' : ''}`}
        />
        {errors.cat_desc && <p className="text-red-500">{errors.cat_desc.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        {initialData ? 'Update' : 'Create'}
      </button>
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="ml-2 bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CategoryForm;