import React, { createContext, useContext, useState } from 'react';
import arceusThemes from '../constants/arceus.json';

export type ArceusType = typeof arceusThemes[number]['type'];

interface ArceusContextValue {
  selectedType: ArceusType;
  setSelectedType: (type: ArceusType) => void;
}

const ArceusContext = createContext<ArceusContextValue | undefined>(undefined);

export const ArceusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedType, setSelectedType] = useState<ArceusType>(arceusThemes[0].type);

  return (
    <ArceusContext.Provider value={{ selectedType, setSelectedType }}>
      {children}
    </ArceusContext.Provider>
  );
};

export function useArceus() {
  const context = useContext(ArceusContext);
  if (!context) {
    throw new Error('useArceus must be used within an ArceusProvider');
  }
  return context;
}
