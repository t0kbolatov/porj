import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, login, register, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegister) {
      const result = register(name, email, password);
      if (result !== true) setError(result as string);
    } else {
      if (!login(email, password)) {
        setError('Invalid email or password.');
      }
    }
  };

  if (user) {
    return (
      <div className="max-w-md mx-auto mt-10 bg-gray-800 p-6 rounded-lg text-white">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h1>
        <p>Email: {user.email}</p>
        <p>Balance: ${user.balance.toLocaleString()}</p> {/* Отображение баланса */}
        <button
          onClick={logout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-800 p-6 rounded-lg text-white">
      <h1 className="text-2xl font-bold mb-4">{isRegister ? 'Register' : 'Login'}</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleAuth}>
        {isRegister && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-700 text-white mb-4 p-2 rounded-md"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-700 text-white mb-4 p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-700 text-white mb-4 p-2 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md"
        >
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      <button
        onClick={() => {
          setIsRegister(!isRegister);
          setError('');
        }}
        className="w-full mt-4 text-blue-400"
      >
        {isRegister ? 'Switch to Login' : 'Switch to Register'}
      </button>
    </div>
  );
}
