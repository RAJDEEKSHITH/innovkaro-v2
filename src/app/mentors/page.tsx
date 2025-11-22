"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search, Filter, Trophy } from "lucide-react";
import Navbar from "@/components/shared/Navbar"; // ✅ Imported Navbar
import Footer from "@/components/shared/Footer";
import MentorCard, { Mentor } from "@/components/mentors/MentorCard";

// --- MOCK DATA ---
const baseProfiles = [
  { role: "Senior SDE", company: "Google", logoUrl: "https://logo.clearbit.com/google.com", domain: "Tech", skills: ["System Design", "React", "Node.js"] },
  { role: "Product Manager", company: "Microsoft", logoUrl: "https://logo.clearbit.com/microsoft.com", domain: "Product", skills: ["Strategy", "Roadmap", "Agile"] },
  { role: "Marketing Lead", company: "Zomato", logoUrl: "https://logo.clearbit.com/zomato.com", domain: "Marketing", skills: ["SEO", "Branding", "Ads"] },
  { role: "UX Designer", company: "Airbnb", logoUrl: "https://logo.clearbit.com/airbnb.com", domain: "Design", skills: ["Figma", "Prototyping", "User Research"] },
  { role: "Founder", company: "Stripe", logoUrl: "https://logo.clearbit.com/stripe.com", domain: "Startup", skills: ["Fundraising", "GTM", "Pitching"] },
  { role: "Data Scientist", company: "Amazon", logoUrl: "https://logo.clearbit.com/amazon.com", domain: "Data", skills: ["Python", "ML", "SQL"] },
  { role: "HR Manager", company: "Deloitte", logoUrl: "https://logo.clearbit.com/deloitte.com", domain: "HR", skills: ["Recruiting", "Soft Skills", "Negotiation"] },
  { role: "Investment Banker", company: "Goldman Sachs", logoUrl: "https://logo.clearbit.com/goldmansachs.com", domain: "Finance", skills: ["Valuation", "M&A", "Modeling"] },
  { role: "Backend Lead", company: "Uber", logoUrl: "https://logo.clearbit.com/uber.com", domain: "Tech", skills: ["Go", "Microservices", "Distributed Systems"] },
];

const firstNames = ["Aditya", "Priya", "Rohan", "Sneha", "Vikram", "Anjali", "Rahul", "Kavya", "Arjun", "Meera", "Zain", "Ishaan", "Fatima", "Kabir", "Tara"];
const lastNames = ["Sharma", "Verma", "Gupta", "Reddy", "Singh", "Mehta", "Nair", "Iyer", "Khan", "Malik", "Chopra", "Das", "Patel"];

const generateMentors = (): Mentor[] => {
  return Array.from({ length: 50 }, (_, i) => {
    const base = baseProfiles[i % baseProfiles.length];
    const firstName = firstNames[i % firstNames.length];
    const lastName = lastNames[(i * 2) % lastNames.length];
    return {
      id: i + 1,
      name: `${firstName} ${lastName}`,
      role: base.role,
      company: base.company,
      logoUrl: base.logoUrl,
      domain: base.domain,
      experience: `${3 + (i % 12)}+ Years`,
      rating: (4.5 + Math.random() * 0.5).toFixed(1),
      skills: base.skills,
      image: `https://source.unsplash.com/collection/8664635/400x400?sig=${i}`,
    };
  });
};

const mentorsData = generateMentors();
const categories = ["All", "Tech", "Product", "Marketing", "Design", "Startup", "Data", "HR", "Finance"];

// --- ANIMATIONS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.1 } }
};

const MentorsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMentors = useMemo(() => {
    return mentorsData.filter((mentor) => {
      const matchesCategory = selectedCategory === "All" || mentor.domain === selectedCategory;
      const matchesSearch = 
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-gray-50/30 relative">
      {/* Global Background */}
      <div className="fixed inset-0 w-full h-full -z-50 bg-white">
        <div className="absolute inset-0 w-full h-full bg-[radial-linear(circle_at_top_right,var(--tw-linear-stops))] from-purple-50/40 via-white to-white" />
      </div>

      {/* ✅ Navbar Included */}
      <Navbar />

      {/* Layout Container 
          - pt-8: Small padding top to separate content from Navbar (assuming sticky navbar)
          - pb-24: Space before footer
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          
          {/* Featured Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
          >
            <Trophy className="w-3.5 h-3.5 fill-purple-700" />
            <span>Featured Mentors</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Connect with <br className="hidden md:block" />
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Get personalized guidance from top professionals at leading companies.
          </motion.p>
        </div>

        {/* --- SEARCH & FILTER BAR --- */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search by name, company, or role..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm hover:shadow-md"
              />
            </div>

            {/* Result Count */}
            <div className="hidden md:block text-sm font-medium text-gray-500">
              {filteredMentors.length} mentors available
            </div>
          </div>

          {/* Filter Categories */}
          <div className="w-full overflow-x-auto pb-4 no-scrollbar">
            <div className="flex gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border
                    ${selectedCategory === category 
                      /* Active State: Blue/Purple linear */
                      ? "bg-linear-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-md scale-105" 
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory + searchQuery} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMentors.length > 0 ? (
              filteredMentors.map((mentor) => (
                <motion.div
                  key={mentor.id}
                  layout 
                  variants={cardVariants} 
                  className="h-full"
                >
                  <MentorCard mentor={mentor} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="col-span-full py-32 text-center"
              >
                <div className="inline-flex items-center justify-center p-6 bg-white rounded-full shadow-sm mb-6">
                  <Filter className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No mentors found</h3>
                <p className="text-gray-500 max-w-xs mx-auto">
                  We couldn't find anyone matching your current filters. Try clearing them.
                </p>
                <button 
                  onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}
                  className="mt-6 text-blue-600 font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
      
      <Footer />
    </main>
  );
};

export default MentorsPage;