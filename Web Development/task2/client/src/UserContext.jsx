// UserContext.js
import React, { createContext, useState} from "react";

export const UserContext = createContext(null);



export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


// // UserContext.jsx
// import React, { createContext, useState, useEffect } from "react";
// import useGetUser from "./hooks/useGetUser";

// export const UserContext = createContext(null);

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const { fetchUser, isFetchingUser } = useGetUser(); 

//   useEffect(() => {
//     const fetchUser = async () => {
//       const userData = await fetchUser();
//       if (userData) {
//         setUser(userData);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
