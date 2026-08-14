import { API_URL } from '../utils/apiUrl';

async function request(url, options = {}) {
  const response = await fetch(`${API_URL}${url}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Request failed');
  }

  return response.json();
}

export async function getProducts(params = {}) {
  const search = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      search.append(key, String(value));
    }
  });

  const query = search.toString();
  return request(`/products${query ? `?${query}` : ''}`);
}

export async function getProductById(id) {
  return request(`/products/${id}`);
}

export async function searchProducts(query) {
  return request(`/products/search?q=${encodeURIComponent(query)}`);
}

export async function getCategories() {
  return request('/products/categories');
}

export async function getProductsByCategory(category) {
  return request(`/products/category/${encodeURIComponent(category)}`);
}

export async function getCart(cartId = 1) {
  return request(`/carts/${cartId}`);
}

export async function addToCart(userId, products) {
  return request('/carts/add', {
    method: 'POST',
    body: JSON.stringify({ userId, products }),
  });
}

export default {
  getProducts,
  getProductById,
  searchProducts,
  getCategories,
  getProductsByCategory,
  getCart,
  addToCart,
};
