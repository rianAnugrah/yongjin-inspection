'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import PocketBase from 'pocketbase';
import 'tailwindcss/tailwind.css';

// Initialize PocketBase client
const pb = new PocketBase('http://127.0.0.1:8090');

// Yup validation schema
const validationSchema = Yup.object().shape({
  cat_name: Yup.string().required('Name is required'),
  cat_desc: Yup.string().required('cat_desc is required'),
});

export default function CrudEXAmple() {
  const [records, setRecords] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const tableName = 'category';
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Fetch records on component load
  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const data = await pb.collection(tableName).getFullList();
      setRecords(data);
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (editingId) {
        // Update the record if editing
        await pb.collection(tableName).update(editingId, data);
        setEditingId(null);
      } else {
        // Create a new record if not editing
        await pb.collection(tableName).create(data);
      }
      reset();
      fetchRecords(); // Refresh the list after creating or updating
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    setValue('cat_name', record.cat_name);
    setValue('cat_desc', record.cat_desc);
  };

  const handleDelete = async (recordId) => {
    try {
      await pb.collection(tableName).delete(recordId);
      fetchRecords(); // Refresh the list after deleting
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CRUD Page</h1>

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
          {editingId ? 'Update' : 'Create'}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              reset();
              setEditingId(null);
            }}
            className="ml-2 bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-xl font-semibold mb-4">Records</h2>
      <ul className="space-y-2">
        {records.map((record) => (
          <li key={record.id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{record.cat_name}</p>
              
              <p className="text-gray-600">{record.cat_desc}</p>
            </div>
            <div>
              <button
                onClick={() => handleEdit(record)}
                className="bg-yellow-500 text-white p-1 rounded mr-2 hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(record.id)}
                className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
