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

  const renderContent = (content, year) => (
    <li>
      <strong>{content.title}</strong> {year}
      {content.image && (
        <div>
          <img
            src={content.image}
            alt={content.title}
            style={{
              maxWidth: "200px",
              borderRadius: "8px",
              margin: "10px 0",
            }}
          />
        </div>
      )}
      <p>{content.subTitle}</p>
    </li>
  );

  return (
    <section id="experience" className="cv-section">
      {isLoading ? (
        <div className="loading-spinner blue"></div>
      ) : (
        <div>
          <h2 className="section-title">{experience.title}</h2>
          <ul>
            {renderContent(content1, experience.year24)}
            {renderContent(content2, experience.year24)}
            {renderContent(content3, experience.year24)}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Experience;
