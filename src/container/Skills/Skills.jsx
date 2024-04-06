// import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip  from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
import "./Skills.scss";
import { images } from "../../constants";

const Skills = () => {
  // const [experience, setExperience] = useState([]);
  // const [skills, setSkills] = useState([]);
  const skills = [
    { name:"C++", icon:images.cpp, bgColor:"rgb(237, 242, 248)" },
    { name:"Git", icon:images.git, bgColor:"rgb(237, 242, 248)" },
    { name:"React", icon:images.react, bgColor:"rgb(237, 242, 248)" },
    { name:"Next js", icon:images.next, bgColor:"rgb(237, 242, 248)" },
    { name:"Redux", icon:images.redux, bgColor:"rgb(237, 242, 248)" },
    { name:"Node js", icon:images.node, bgColor:"rgb(237, 242, 248)" },
  ]

  const experience = [
    { year:'2024', works:[{ name:"Next js",company:"N/A", desc:"I works on Next js" }]},
    { year:'2023', works:[{ name:"Backend",company:"N/A", desc:"I works on Node js" },{name:"DSA", company:"N/A", desc:"I solving problems" }]},
    { year:'2022', works:[{ name:"Frontend",company:"N/A", desc:"I am a React" }]},
  ]
  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setExperience(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-tex">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experience?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                      id ={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills,'app__skills'),
  'skills',
  'app__whitebg'  
);

