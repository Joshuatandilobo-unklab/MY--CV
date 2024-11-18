import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState({});
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const skillRef = ref(db, "skills");

    onValue(skillRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSkills(data);
        if (data.content) {
          setContent(data.content);
        }
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <section id="skills" className="cv-section">
      {isLoading ? (
        <div className="loading-spinner blue"></div>
      ) : (
        <div>
          <h2 className="section-title">{skills.title}</h2>
          <ul className="skills-list">
            <li className="skill-item">{content.skill1}</li>
            <li className="skill-item">{content.skill2}</li>
            <li className="skill-item">{content.skill3}</li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Skills;
