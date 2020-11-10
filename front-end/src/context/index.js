import React, { createContext, useState } from 'react';

export const TrybeerContext = createContext();

const ProviderTrybeer = ({ children }) => {
  const [user, setUser] = useState({});

  const context = { user, setUser };

  return <TrybeerContext.Provider value={context}>{children}</TrybeerContext.Provider>;
};

export default ProviderTrybeer;
