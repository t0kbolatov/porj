import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  balance: number; 
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean | string;
  logout: () => void;
  updateUserBalance: (newBalance: number) => void; 
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<
    Record<string, { name: string; password: string; balance: number }>
  >({});

  const login = (email: string, password: string) => {
    const existingUser = registeredUsers[email];
    if (existingUser && existingUser.password === password) {
      setUser({
        id: email,
        email,
        name: existingUser.name,
        balance: existingUser.balance,
      });
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string) => {
    if (registeredUsers[email]) {
      return 'This email is already registered.';
    }
    const initialBalance = 1000000; 
    setRegisteredUsers((prev) => ({
      ...prev,
      [email]: { name, password, balance: initialBalance },
    }));
    setUser({ id: email, email, name, balance: initialBalance }); 
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const updateUserBalance = (newBalance: number) => {
    if (user) {
      setUser({ ...user, balance: newBalance });
      
      setRegisteredUsers((prev) => ({
        ...prev,
        [user.email]: {
          ...prev[user.email],
          balance: newBalance,
        },
      }));
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, updateUserBalance }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
