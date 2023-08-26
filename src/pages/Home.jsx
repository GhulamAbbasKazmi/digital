import React, { useState } from 'react'


function Home() {
  let time = new Date().toLocaleTimeString();
  const [Ctime, setCtime] = useState(time);
  const updatetime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(updatetime, 1000);
  return (
 <h1>{Ctime}</h1>
  );
};

export default Home;