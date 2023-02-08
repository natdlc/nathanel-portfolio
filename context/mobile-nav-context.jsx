const { createContext, useState } = require("react");

const MobileNavContext = createContext();

export function MobileNavProvider({ children }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <MobileNavContext.Provider value={{ isMobileNavOpen, setIsMobileNavOpen }}>
      {children}
    </MobileNavContext.Provider>
  );
}

export default MobileNavContext;
