import React, { useState } from 'react';
// import translations from './translations'; // Import translations from your folder

const Dictionary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLanguage(e.target.value);
  };

  // const translation = translations[currentLanguage];

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <select value={currentLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        {/* Add more language options here */}
      </select>
      {/* <p>{translation[searchTerm]}</p> */}
    </div>
  );
};

export default Dictionary;
