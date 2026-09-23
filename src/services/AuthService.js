import { API_URL } from '../utils/apiUrl';

const LOCAL_USERS_KEY = 'shop-local-users';

function readLocalUsers() {
  try {
    const saved = localStorage.getItem(LOCAL_USERS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function writeLocalUsers(users) {
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
}

function toUserRecord(user) {
  return {
    id: user.id,
    username: user.username,
    firstName: user.firstName || user.name || user.username,
    lastName: user.lastName || '',
    email: user.email || `${user.username}@example.com`,
    image: user.image || '',
    password: user.password || '',
  };
}

export async function login(credentials) {
  const username = String(credentials?.username || '').trim();
  const password = String(credentials?.password || '').trim();

  if (!username || !password) {
    throw new Error('Please enter your username and password.');
  }

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      return response.json();
    }

    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Login failed');
  } catch (error) {
    const localUser = readLocalUsers().find(
      (user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password,
    );

    if (localUser) {
      return {
        ...toUserRecord(localUser),
        token: `local-${localUser.id}`,
      };
    }

    if (error instanceof Error) {
      throw error;
    }

    throw new Error('Login failed');
  }
}

export async function register(userData) {
  const username = String(userData?.username || '').trim();
  const password = String(userData?.password || '').trim();
  const firstName = String(userData?.firstName || '').trim();
  const lastName = String(userData?.lastName || '').trim();
  const email = String(userData?.email || '').trim();

  if (!username || !password) {
    throw new Error('Username and password are required.');
  }

  const users = readLocalUsers();
  const exists = users.some((user) => user.username.toLowerCase() === username.toLowerCase());

  if (exists) {
    throw new Error('An account with that username already exists.');
  }

  const newUser = toUserRecord({
    id: Date.now(),
    username,
    firstName,
    lastName,
    email: email || `${username}@example.com`,
    image: '',
    password,
  });

  users.push(newUser);
  writeLocalUsers(users);

  return {
    ...newUser,
    token: `local-${newUser.id}`,
  };
}

export default { login, register };
