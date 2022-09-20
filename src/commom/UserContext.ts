import { createContext, useState } from "react";

interface NameContextInterface {
    name: string;
  }

export const UserContext = createContext<NameContextInterface | null>(null);
UserContext.displayName = 'User';

// export const UsuarioProvider = () => {
//     const [name, setName] = useState('');
//     return (
//         <UserContext.Provider value={{ name, setName}}>
            
//         </UserContext.Provider>
//     )
// }