import React, { useState, useEffect, createContext, useContext } from "react";
import api from "../utils/api";
import localstorage from "../utils/localstorage";

interface AuthContextValues {
  name?: string;
  email?: string;
  createdAt?: Date;
}

export const AuthContext = createContext<AuthContextValues>({});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<AuthContextValues>({});

  useEffect(() => {
    api
      .get(`/account/verify-session/${localstorage.getUserSession()}`)
      .then(({ data }) => {
        if (!data.success) {
          localstorage.removeUserSession();
          window.location.href = "/#/auth";
          return;
        } else {
          delete data.success;
          setTimeout(() => setUser(data), 3000);
        }
      });
  }, []);

  return (
    <>
      {user.email ? (
        <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
      ) : (
        <div className="overlay__loadding__no_join_animation">
          <div className="wrapper__cover">
            <div className="wrapper">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
            </div>
            <h3>Carregando!</h3>
            <p>Espere alguns instantes.</p>
          </div>
        </div>
      )}
    </>
  );
};

export const useAuth = function () {
  const context = useContext(AuthContext);

  return context;
};
