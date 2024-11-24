import { useState } from 'react';
import InputField from './InputField';

const General = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [isEditing, setIsEditing] = useState(true); // true for editing mode

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneValue(event.target.value);
  };

  const handleButtonClick = () => {
    setIsEditing(!isEditing); // Toggle between editing and viewing
  };

  return (
    <>
      <div className="p-5 bg-gray-200 rounded-md shadow-md mt-2">
        <h2 className="text-xl font-semibold">General Information</h2>

        {isEditing ? (
          <div className="flex flex-col gap-2 items-start">
            <InputField
              value={nameValue}
              onChange={handleNameChange}
              placeholder="Name"
              className="w-1/2"
            />
            <InputField
              value={emailValue}
              onChange={handleEmailChange}
              placeholder="School"
              className="w-1/2"
            />
            <InputField
              value={phoneValue}
              onChange={handlePhoneChange}
              placeholder="Degree"
              className="w-1/2"
            />
          </div>
        ) : ( //when submitted this display:
          <div className="p-2 bg-white rounded-md shadow">
            <p className="font-medium">Name: {nameValue}</p>
            <p className="font-medium">School: {emailValue}</p>
            <p className="font-medium">Degree: {phoneValue}</p>
          </div>
        )}

        <button
          onClick={handleButtonClick}
          className="bg-blue-500 p-2 mt-4 text-white rounded"
        >
          {isEditing ? 'Submit' : 'Edit'}
        </button>
      </div>
    </>
  );
};

export default General;
