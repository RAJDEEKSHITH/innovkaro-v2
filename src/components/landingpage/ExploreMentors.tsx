"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import MentorCard from "@/components/mentors/MentorCard"; 

// Mock Data (Same as before)
const topMentors = [
  { id: 1, name: "Aditya Sharma", role: "Senior SDE", company: "Google", logoUrl: "https://logo.clearbit.com/google.com", domain: "Tech", experience: "6+ Years", rating: "4.9", skills: ["System Design", "React", "Node.js"], image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=faces" },
  { id: 2, name: "Priya Verma", role: "Product Manager", company: "Microsoft", logoUrl: "https://logo.clearbit.com/microsoft.com", domain: "Product", experience: "8+ Years", rating: "5.0", skills: ["Product Strategy", "Agile", "Roadmap"], image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces" },
  { id: 3, name: "Rohan Gupta", role: "Marketing Lead", company: "Zomato", logoUrl: "https://logo.clearbit.com/zomato.com", domain: "Marketing", experience: "5+ Years", rating: "4.8", skills: ["Brand Building", "SEO", "Growth"], image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" },
  { id: 4, name: "Sneha Reddy", role: "UX Designer", company: "Airbnb", logoUrl: "https://logo.clearbit.com/airbnb.com", domain: "Design", experience: "4+ Years", rating: "4.9", skills: ["Figma", "Prototyping", "User Research"], image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=faces" },
  { id: 5, name: "Vikram Singh", role: "Founder", company: "Stripe", logoUrl: "https://logo.clearbit.com/stripe.com", domain: "Startup", experience: "10+ Years", rating: "5.0", skills: ["Fundraising", "GTM", "Pitching"], image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces" },
  { id: 6, name: "Anjali Mehta", role: "Data Scientist", company: "Amazon", logoUrl: "https://logo.clearbit.com/amazon.com", domain: "Data", experience: "5+ Years", rating: "4.8", skills: ["Python", "ML", "SQL"], image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces" },
  { id: 7, name: "Rahul Nair", role: "Backend Lead", company: "Uber", logoUrl: "https://logo.clearbit.com/uber.com", domain: "Tech", experience: "7+ Years", rating: "4.9", skills: ["Go", "Microservices", "AWS"], image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces" },
  { id: 8, name: "Kavya Iyer", role: "HR Manager", company: "Deloitte", logoUrl: "https://logo.clearbit.com/deloitte.com", domain: "HR", experience: "9+ Years", rating: "4.7", skills: ["Recruitment", "Soft Skills", "Resume"], image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces" },
];

const ExploreMentors = () => {
  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8 relative z-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2"
            >
              <Sparkles size={14} />
              <span>Top Rated</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
            >
              Meet Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Mentors</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base text-gray-600"
            >
              Get 1-on-1 guidance from professionals who have walked the path before you.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Link href="/mentors">
              <button className="group flex items-center gap-2 px-5 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all duration-300 text-sm">
                View All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topMentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="h-full"
            >
              <MentorCard mentor={mentor} />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/mentors">
            <button className="w-full py-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 text-sm">
              Explore All Mentors
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ExploreMentors;