import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/ProductService';
import ProductDetail from '../components/product';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    setLoading(true);
    getProductById(id)
      .then((p) => { if (active) setProduct(p); })
      .catch((e) => { if (active) setError(e.message || 'Failed'); })
      .finally(() => { if (active) setLoading(false); });

    return () => { active = false };
  }, [id]);

  if (loading) return <div className="panel-state">Loading product...</div>;
  if (error) return <div className="panel-state error">{error}</div>;

  return <ProductDetail product={product} />;
}
