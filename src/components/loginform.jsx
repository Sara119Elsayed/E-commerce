import React, { useState } from 'react';
import { useShop } from '../Context/ShopContext';

export default function LoginForm({ onClose }) {
  const { login } = useShop();
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login({ username, password });
      onClose?.();
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-card">
      <h3>Sign in</h3>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        {error && <div className="error-text">{error}</div>}

        <div>
          <button className="ui-button primary" type="submit" disabled={loading}>{loading ? 'Signing...' : 'Sign in'}</button>
        </div>
      </form>
    </div>
  );
}
