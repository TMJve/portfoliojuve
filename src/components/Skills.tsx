import React from "react";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="bg-gradient-to-b from-black to-gray-900 text-white py-12 px-4 sm:py-16 sm:px-6"
    >
      {/* Section Title */}
      <h1 className="text-3xl sm:text-5xl text-amber-500 font-title text-center mb-8 sm:mb-10">
        Skills
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <SkillCard
          title="Python"
          description="Used Python for various projects, making python scripts for some task automation."
          iconUrl="/images/python.png"
          bgColor="bg-white"
        />
        <SkillCard
          title="Wazuh"
          description="Setting Wazuh Server and Agent up, from making custom dashboards to analysing logs."
          iconUrl="/images/wazuh.png"
          bgColor="bg-white"
        />
        <SkillCard
          title="Kali Linux"
          description="Explored penetration testing tools and basic security assessments."
          iconUrl="/images/kali.png"
          bgColor="bg-white"
        />
        <SkillCard
          title="Burp Suite"
          description="Experienced with Burp Suite, done few CTFs with this tool, and gained valuable knowledge."
          iconUrl="/images/burp.png"
          bgColor="bg-white"
        />
        <SkillCard
          title="Linux"
          description="An intermediate linux user, learnt by accessing linux servers in HackTheBox machines, and from linux system administration course in university."
          iconUrl="/images/linux.png"
          bgColor="bg-white"
        />
        <SkillCard
          title="C"
          description="An intermediate linux user, learnt by accessing linux servers in HackTheBox machines, and from linux system administration course in university."
          iconUrl="/images/C.png"
          bgColor="bg-white"
        />
        <SkillCard
          title="Go"
          description="Gained experience building basic applications, focusing on learning concurrency and performance concepts."
          iconUrl="/images/gopher.png"
          bgColor="bg-white"
        />
        <SkillCard
          title="VMware"
          description="Set up and worked with virtual machines for learning and project purposes."
          iconUrl="/images/vmware.png"
          bgColor="bg-white"
        />
         <SkillCard
          title="Kubernetes"
          description="Managed containerized applications by deploying, scaling, and automating workloads in Kubernetes clusters."
          iconUrl="/images/kube.png"
          bgColor="bg-white"
        />
      </div>

      
      <div className="mt-12 sm:mt-16 h-1 bg-gradient-to-r from-amber-500 via-red-500 to-blue-500 max-w-xs sm:max-w-md mx-auto"></div>
    </div>
  );
};

export default Skills;
