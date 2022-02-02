import { createContext, useState, useContext, FC } from 'react';

const AuthContext = createContext(null);

// export function useAuthContext() {
//   return useContext(AuthContext);
// }

// export const AuthProvider:FC = ({ children }) =>{
//   const [user, setUser] = useState('');

//   const value = {
//     user,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
