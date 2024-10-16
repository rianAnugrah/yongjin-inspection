// File: types.ts
import * as Yup from 'yup';

export interface Category {
  id: string;
  cat_name: string;
  cat_desc: string;
}

export const categoryValidationSchema = Yup.object().shape({
  cat_name: Yup.string().required('Name is required'),
  cat_desc: Yup.string().required('Description is required'),
});