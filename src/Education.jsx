// education.jsx

import { useState } from 'react';
import InputField from './InputField';

const Education = () => {
  const [entries, setEntries] = useState([]); // Array to hold input field data
  const [isEditing, setIsEditing] = useState(true); // true for editing mode


  const onEntryClick = () => {
    //place holder for degree and school
    setEntries([...entries, { degree: '', institution: '' }]);
  };

  const handleInputChange = (index, key, value) => {
    //index: to identify which entry in the array to update
    //key: to specify which field (degree or school) to update
    //value: the "new" value entered by the user.
    // Update the value of the specific input field
    const updatedEntries = entries.map((entry, i) => //entries.map loops over each entry in the entries array
      i === index ? { ...entry, [key]: value } : entry
    );
    setEntries(updatedEntries);
  };


  const handleButtonClick = () => {
    setIsEditing(!isEditing); // Toggle between editing and viewing
  };
  return (
    <div className="p-4 bg-gray-200 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Educational Experience</h2>
      <div className="flex flex-col gap-4">
      {isEditing ? (
          entries.map((entry, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 p-2 bg-white rounded-md shadow"
            >
              <InputField
                value={entry.institution}
                onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
                placeholder="Institution/Company"
                className="w-full"
              />
              <InputField
                value={entry.degree}
                onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                placeholder="Description"
                className="w-full"
              />
              <InputField
                type="date"
                value={entry.date}
                onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                placeholder="Select date"
                className="w-full"
              />
            </div>
          ))
        ) : (
          entries.map((entry, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 p-2 bg-white rounded-md shadow"
            >
              <p className="font-medium">Institution/Company Name: {entry.institution}</p>
              <p className="font-medium">Description: {entry.degree}</p>
              <p className= "font-medium">Date: {entry.date} </p>
            </div>
          ))
        )}
      </div>
      <button
        onClick={onEntryClick}
        className="mt-4 bg-green-500 text-white p-2 rounded mr-2"
      >
        Add Entry
      </button>
      <button
          onClick={handleButtonClick}
          className="bg-blue-500 p-2 mt-4 text-white rounded"
        >
          {isEditing ? 'Submit' : 'Edit'}
        </button>
        
    </div>
  );
};

export default Education;
