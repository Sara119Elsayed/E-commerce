import React, { useState } from 'react';
import { useShop } from '../Context/ShopContext';

export default function Signup() {
	const { setUser, setToken } = useShop();
	const [form, setForm] = useState({ username: '', password: '', firstName: '', lastName: '' });
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// Mock signup: set user locally
		setTimeout(() => {
			setUser({ id: Date.now(), username: form.username, firstName: form.firstName, lastName: form.lastName });
			setToken('');
			setLoading(false);
		}, 500);
	};

	return (
		<div className="info-card">
			<h3>Create an account</h3>
			<form onSubmit={handleSubmit} className="login-form">
				<label>
					Username
					<input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
				</label>
				<label>
					First name
					<input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
				</label>
				<label>
					Last name
					<input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
				</label>
				<label>
					Password
					<input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
				</label>

				<button className="ui-button primary" type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
			</form>
		</div>
	);
}
