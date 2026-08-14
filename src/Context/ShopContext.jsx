import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { addToCart as addCartRequest, getCart } from '../services/ProductService';
import { login as loginRequest } from '../services/AuthService';

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('shop-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('shop-user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => localStorage.getItem('shop-token') || '');
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('shop-wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('shop-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('shop-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('shop-user');
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('shop-token', token);
    } else {
      localStorage.removeItem('shop-token');
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem('shop-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + Number(item.quantity || 0), 0),
    [cart],
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + Number(item.price || 0) * Number(item.quantity || 0), 0),
    [cart],
  );

  const addToCart = (product, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...current, { ...product, quantity }];
    });
  };

  const addToWishlist = (product) => {
    setWishlist((current) => {
      if (current.find((p) => p.id === product.id)) return current;
      return [...current, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((current) => current.filter((p) => p.id !== productId));
  };

  const toggleWishlist = (product) => {
    setWishlist((current) => {
      if (current.find((p) => p.id === product.id)) return current.filter((p) => p.id !== product.id);
      return [...current, product];
    });
  };

  const isWishlisted = (productId) => wishlist.some((p) => p.id === productId);

  const removeFromCart = (productId) => {
    setCart((current) => current.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => setCart([]);

  const login = async (credentials) => {
    const result = await loginRequest(credentials);
    setUser({
      id: result.id,
      username: result.username,
      firstName: result.firstName,
      lastName: result.lastName,
      email: result.email,
      image: result.image,
    });
    setToken(result.token || '');
    return result;
  };

  const fetchCart = async (cartId = 1) => {
    const response = await getCart(cartId);
    setCart(response.products || []);
    return response;
  };

  const addCartRequestToServer = async (userId, productList) => {
    const result = await addCartRequest(userId, productList);
    if (result.products) {
      setCart(result.products.map((item) => ({ ...item.product, quantity: item.quantity })));
    }
    return result;
  };

  const value = useMemo(
    () => ({
      cart,
      user,
      token,
      wishlist,
      cartCount,
      cartTotal,
      addToCart,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isWishlisted,
      removeFromCart,
      updateQuantity,
      clearCart,
      login,
      fetchCart,
      addCartRequestToServer,
      setUser,
      setToken,
    }),
    [cart, user, token, wishlist, cartCount, cartTotal],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }

  return context;
}
