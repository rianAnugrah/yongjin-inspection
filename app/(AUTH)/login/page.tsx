"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import pb from '@/app/lib/pocketbase';


export default function LoginPage() {
  
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      console.log(authData);
      // Redirect to dashboard or home page after successful login
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please check your credentials.');
    }
  };
  
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
    <div className="card mx-auto w-full max-w-5xl shadow-xl">
      <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
        <div className='py-24 px-10'>
          <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="label">
                <span className=" label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="label">
                <span className=" label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-error mb-4">{error}</div>}
            <div>
              <button type="submit" className="btn btn-primary w-full mt-4">Login</button>
            </div>
          </form>
          <div className="text-center mt-4">
            <a href="#" className="text-sm hover:underline hover:text-blue-600">Forgot Password?</a>
          </div>
        </div>
        <div className='py-24 px-10 flex items-center bg-base-200'>
          <div>
            <h2 className='text-2xl font-semibold mb-2 text-center'>Welcome Back!</h2>
            <div className='text-center'>
              <p>Don't have an account?</p>
              <a href="#" className="inline-block hover:text-primary hover:underline mt-2">Sign up here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
