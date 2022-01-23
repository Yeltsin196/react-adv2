import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { routes, RouteInterface } from "./routes";

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="Logo" />
            <ul>
              {routes.map((item) => {
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, to, Component }) => {
              return <Route key={to} path={path} element={Component} />;
            })}
            <Route
              path="/*"
              element={<Navigate to={routes[0].to} replace></Navigate>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
