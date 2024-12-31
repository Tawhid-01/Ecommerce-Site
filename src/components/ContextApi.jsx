import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const apidata = createContext();

const ContextApi = ({ children }) => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(data => setInfos(data.data.products))
      
  }, []);

  return (
    <apidata.Provider value={infos}>
      {children}
    </apidata.Provider>
  );
}

export { apidata, ContextApi };
