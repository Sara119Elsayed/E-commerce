import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../Context/ShopContext';

export default function Signup() {
	const { register } = useShop();
	const navigate = useNavigate();
	const [form, setForm] = useState({ username: '', email: '', password: '', firstName: '', lastName: '' });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		if (!form.username.trim() || !form.password.trim()) {
			setError('Username and password are required.');
			return;
		}

		setLoading(true);
		try {
			await register(form);
			navigate('/');
		} catch (err) {
			setError(err.message || 'Unable to create account.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="info-card">
			<h3>Create an account</h3>
			<form onSubmit={handleSubmit} className="login-form">
				<label>
					Username
					<input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} placeholder="Choose a username" />
				</label>
				<label>
					Email
					<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
				</label>
				<label>
					First name
					<input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="First name" />
				</label>
				<label>
					Last name
					<input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Last name" />
				</label>
				<label>
					Password
					<input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Create a password" />
				</label>

				{error && <div className="error-text">{error}</div>}

				<button className="ui-button primary" type="submit" disabled={loading}>{loading ? 'Creating account...' : 'Create account'}</button>
				<p className="auth-switch">
					Already have an account? <Link to="/login">Sign in</Link>
				</p>
			</form>
		</div>
	);
}
