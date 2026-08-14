import { useEffect, useState } from 'react';
import { getProducts, searchProducts, getProductsByCategory, getCategories } from '../services/ProductService';

export function useProducts({ query = '', category = '', sortBy = '', order = 'asc', limit = 12, skip = 0 } = {}) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoryData = await getCategories();
        setCategories(Array.isArray(categoryData) ? categoryData : []);
      } catch (err) {
        console.error(err);
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    let active = true;

    const loadProducts = async () => {
      setLoading(true);
      setError('');

      try {
        let result;

        if (query) {
          result = await searchProducts(query);
        } else if (category) {
          result = await getProductsByCategory(category);
        } else {
          result = await getProducts({ limit, skip, sortBy, order });
        }

        if (!active) return;

        setProducts(Array.isArray(result.products) ? result.products : Array.isArray(result) ? result : []);
      } catch (err) {
        if (!active) return;
        setError(err.message || 'Unable to load products');
        setProducts([]);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadProducts();

    return () => {
      active = false;
    };
  }, [query, category, sortBy, order, limit, skip]);

  return { products, categories, loading, error };
}

export default useProducts;
