import React from "react";

interface FCProps {
  children: React.ReactNode;
}
// export type UserContextType = {
//   user: string | null;
//   setUser: any;
// }

// export const UserContext = React.createContext<UserContextType>({ user: null, setUser: () => null });
// UserContext.displayName = 'UserContext';

// const UserProvider: React.FC<FCProps> = ({ children }) => {
//   const [user, setUser] = React.useState<string | null>(null);
//   return (
//     <UserContext.Provider value= {{ user, setUser }} >
//       { children }
//     </UserContext.Provider>
//   )
// }