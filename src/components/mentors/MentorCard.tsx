"use client";

import { Star, ArrowRight } from "lucide-react";

export interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  logoUrl: string; // <--- New Field for the Logo Image
  domain: string;
  experience: string;
  rating: string;
  skills: string[];
  image: string;
}

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard = ({ mentor }: MentorCardProps) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      
      {/* Top linear Line (Visible on Hover) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Header: Image + Rating */}
      <div className="flex justify-between items-start mb-4">
        <div className="relative">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md bg-gray-100"
          />
          <div className="absolute -bottom-1 -right-1 bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded-md border border-blue-100">
            {mentor.experience}
          </div>
        </div>
        <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span className="text-xs font-bold text-amber-700">{mentor.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
          {mentor.name}
        </h3>
        <p className="text-sm text-gray-600 font-medium mb-3 truncate">{mentor.role}</p>
        
        {/* --- REAL COMPANY LOGO --- */}
        <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 border border-gray-100 w-fit transition-colors group-hover:bg-blue-50/50 group-hover:border-blue-100">
          <div className="w-6 h-6 flex items-center justify-center bg-white rounded-md p-0.5 shadow-sm">
            <img 
              src={mentor.logoUrl} 
              alt={mentor.company} 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback if logo fails to load
                (e.target as HTMLImageElement).style.display = 'none'; 
              }} 
            />
          </div>
          <span className="text-xs font-bold text-gray-700 truncate">{mentor.company}</span>
        </div>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mb-6 flex-1 content-start">
        {mentor.skills.slice(0, 3).map((skill, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-white text-gray-500 text-[10px] uppercase tracking-wider font-semibold rounded-md border border-gray-100 shadow-xs"
          >
            {skill}
          </span>
        ))}
        {mentor.skills.length > 3 && (
           <span className="px-2 py-1 text-gray-400 text-[10px] font-semibold">+{mentor.skills.length - 3}</span>
        )}
      </div>

      {/* Action Button */}
      <button className="mt-auto w-full py-2.5 rounded-xl bg-white border border-blue-100 text-blue-600 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn shadow-sm">
        View Profile
        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default MentorCard;