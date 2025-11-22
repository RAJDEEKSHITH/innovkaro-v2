"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Rocket, ArrowLeft } from "lucide-react";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-y-auto bg-gray-50 py-10">
      <div className="absolute inset-0 w-full h-full bg-[radial-linear(ellipse_at_top,var(--tw-linear-stops))] from-blue-100 via-purple-50 to-white -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask:linear-linear(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10"></div>
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg p-2 hover:bg-white/50">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
        </Link>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md px-4 relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-2xl border border-white/60 p-8 md:p-10 rounded-3xl shadow-2xl shadow-blue-900/10">
          <div className="text-center mb-8">
             <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
                <div className="p-2 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
             </Link>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Create account</h1>
            <p className="text-gray-500 mt-2 text-sm">Start your journey with expert mentors today.</p>
          </div>
           <button className="w-full py-3 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 hover:border-gray-300 transition-all font-medium text-gray-700 shadow-sm hover:shadow-md mb-6">
            <GoogleIcon />
            <span>Sign up with Google</span>
          </button>
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200"></span></div>
            <div className="relative flex justify-center text-xs uppercase tracking-wider"><span className="bg-white/50 backdrop-blur-md px-3 text-gray-400 font-medium">Or continue with email</span></div>
          </div>

          <form className="space-y-5">
             <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="block w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input 
                  type="email" 
                  placeholder="you@example.com"
                  className="block w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Create a password"
                  className="block w-full pl-11 pr-11 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">Must be at least 8 characters.</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 mt-2 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Create Account <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </motion.button>
          </form>
          <div className="text-center mt-8 space-y-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-blue-600 hover:text-purple-600 transition-colors hover:underline">
                Log in
              </Link>
            </p>
            <p className="text-xs text-gray-400">
               By signing up, you agree to our Terms and Privacy Policy.
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;