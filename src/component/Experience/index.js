import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Experience = () => {
  const [experience, setExperience] = useState({});
  const [content1, setContent1] = useState({});
  const [content2, setContent2] = useState({});
  const [content3, setContent3] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const experienceRef = ref(db, "experience/content/");

    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setExperience(data);
        if (data.content1) {
          setContent1(data.content1);
        }
        if (data.content2) {
          setContent2(data.content2);
        }
        if (data.content3) {
          setContent3(data.content3);
        }
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <section id="experience" className="cv-section">
      {isLoading ? (
        <div className="loading-spinner blue"></div>
      ) : (
        <div>
          <h2 className="section-title">{experience.title}</h2>
          <ul>
            <li>
              <strong>{content1.title}</strong> {experience.year24}
              <p>{content1.subTitle}</p>
            </li>
            <li>
              <strong>{content2.title}</strong> {experience.year24}
              <p>{content2.subTitle}</p>
            </li>
            <li>
              <strong>{content3.title}</strong> {experience.year24}
              <p>{content3.subTitle}</p>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Experience;
