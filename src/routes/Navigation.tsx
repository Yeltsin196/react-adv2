import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
/* import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
 */
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={logo} alt="Logo" />
              <ul>
                {routes.map((item) => (
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
                ))}
              </ul>
            </nav>

            <Routes>
              {routes.map(({ name, path, Component }) => (
                <Route key={name} path={path} element={<Component />} />
              ))}
              <Route
                path="/*"
                element={<Navigate to={routes[0].to} replace></Navigate>}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};
