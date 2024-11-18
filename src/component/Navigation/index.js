import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [navigation, setNavigation] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const navigationRef = ref(db, "navigation");

    onValue(navigationRef, (snapshot) => {
      const data = snapshot.val();
      setNavigation(data);
    });
  }, []);
  return (
    <nav className="navigation-bar">
      <ul>
        <li>
          <a href="#about">{navigation.about}</a>
        </li>
        <li>
          <a href="#experience">{navigation.experience}</a>
        </li>
        <li>
          <a href="#education">{navigation.education}</a>
        </li>
        <li>
          <a href="#skills">{navigation.skills}</a>
        </li>
        <li>
          <a href="#contact">{navigation.contact}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
