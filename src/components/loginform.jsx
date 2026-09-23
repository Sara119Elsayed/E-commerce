import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../Context/ShopContext';

export default function LoginForm({ onClose }) {
  const { login } = useShop();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.username.trim() || !form.password.trim()) {
      setError('Please enter your username and password.');
      return;
    }

    setLoading(true);
    try {
      await login({ username: form.username, password: form.password });
      onClose?.();
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-card">
      <div className="login-header">
        <h3>Sign in</h3>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username
          <input value={form.username} onChange={handleChange('username')} placeholder="Enter your username" />
        </label>
        <label>
          Password
          <input type="password" value={form.password} onChange={handleChange('password')} placeholder="Enter your password" />
        </label>

        {error && <div className="error-text">{error}</div>}

        <button className="ui-button primary" type="submit" disabled={loading}>
          {loading ? 'Signing you in...' : 'Sign in'}
        </button>

        <p className="auth-switch">
          Need an account? <Link to="/signup">Create one</Link>
        </p>
      </form>
    </div>
  );
}
