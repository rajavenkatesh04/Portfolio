import React from "react";
import "boxicons"; 

function Skills() {
  const skills = [
    { name: "Java", icon: "bxl-java", color: "#f89820" },
    { name: "Python", icon: "bxl-python", color: "#3776AB" },
    { name: "React.js", icon: "bxl-react", color: "#61DAFB" },
    { name: "MERN Stack", icon: "bxs-layer", color: "#3FA037" },
  ];

  return (
    <div id="skills"
      className="skills-container bg-gray-50 rounded-lg p-6 shadow-md"
      style={{ backgroundColor: "#f3f3f2" }}
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center font-[Manrope]">
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <i
              className={`bx ${skill.icon} text-5xl`}
              style={{ color: skill.color }}
            ></i>
            <span className="text-lg font-medium text-gray-700">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
