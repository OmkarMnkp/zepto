// src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";


// authcontext file
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // stores { name, email }

    const login = (email, password) => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            setUser(storedUser);
            return true;
        } else {
            return false;
        }
    };

    const register = (name, email, password) => {
        const newUser = { name, email, password };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
    };

    const logout = () => {
        setUser(null);
    };

    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) {
            setUser(JSON.parse(saved));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
