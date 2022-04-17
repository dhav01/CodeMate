import * as React from "react";

const AuthContext = React.createContext({
  user: {
    userName: ""
  },
  getUser: () => {},
  setUser: (data) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = React.useState({
    userName: ""
  });

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  function getUser() {
    return user;
  }
  function setUserFunc(data) {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  }


  function logout() {
    setUserFunc(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        getUser: getUser,
        setUser: setUserFunc,
        logout: logout,
      }}
    >
      {props?.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
