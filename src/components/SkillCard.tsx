import React from "react";

interface SkillCardProps {
  title: string;
  description: string;
  iconUrl?: string; 
  bgColor: string; 
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, iconUrl, bgColor }) => {
  return (
    <div className={`group bg-gray-800 rounded-lg p-6 shadow-lg hover:${bgColor} transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center gap-4">
        {iconUrl && (
          <img
            src={iconUrl}
            alt={`${title} icon`}
            className="w-10 h-10 object-contain group-hover:opacity-80 transition-opacity duration-300"
          />
        )}
        <h2 className="text-xl font-bold group-hover:text-black">{title}</h2>
      </div>
      <p className="mt-4 text-gray-400 group-hover:text-black">{description}</p>
    </div>
  );
};

export default SkillCard;
