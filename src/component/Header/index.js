import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Header = () => {
  const [header, setHeader] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <header className="cv-header">
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="header-content">
          <div className="header-text">
            <h1>{header.title}</h1>
            <p>{header.subTitle}</p>
          </div>
          <div className="profile-picture">
            <img
              src={`data:image/jpeg;base64, ${header.profilePicture}`}
              alt="Profile"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
