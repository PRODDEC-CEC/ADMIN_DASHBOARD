import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

        if (password === adminPassword) {
            onLogin();
        } else {
            setError('Password onnoode onnu nokkikke');
            setPassword('');
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="max-w-md w-full backdrop-blur-xl bg-white/5 p-8 rounded-3xl shadow-2xl border border-white/10 text-center transform transition-all">
                <div className="inline-flex p-4 rounded-2xl bg-linear-to-tr from-[#FFA200] to-yellow-500 mb-6 shadow-xl shadow-[#FFA200]/20 ring-1 ring-white/20">
                    <FaLock className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#FFA200] to-yellow-500 mb-2 tracking-tight">
                    Admin Access
                </h2>
                <p className="text-slate-400 mb-8 font-light">
                    Enter the admin password to continue
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-transparent/50 border border-white/10 p-3 rounded-xl focus:border-[#FFA200] outline-none text-white transition-colors"
                            required
                        />
                    </div>
                    {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                    <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-xl bg-linear-to-r from-[#FFA200] to-yellow-500 text-black font-bold shadow-lg shadow-[#FFA200]/25 hover:shadow-[#FFA200]/40 hover:from-yellow-500 hover:to-[#FFA200] transition-all duration-300 active:scale-[0.98] ring-1 ring-white/10 hover:ring-white/30"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
