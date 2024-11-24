import { useState, useEffect } from 'react';
import Education from './Education';
import General from './general';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Here you can fetch data or perform any action when the component mounts
    console.log('Component Mounted or Updated');

    // Example: Set some data after 2 seconds
    setTimeout(() => {
      setData('');
    }, 2000);

    // Optional cleanup (runs on component unmount or before the next effect)
    return () => {
      console.log('Cleanup (optional)');
    };
  }, []);  // Empty dependency array means it runs once when the component mounts

  return (
    <div>
      <h1 className="text-3xl font-bold underline">CV resume template</h1>
      <p>{data ? data : ''}</p>
      <General />
      <Education />
    </div>
  );
}

export default App;
