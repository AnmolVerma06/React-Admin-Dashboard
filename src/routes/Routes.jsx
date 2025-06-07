import { Navigate, Route, Routes } from "react-router-dom";

// All layouts containers
import DefaultLayout from "@/layouts/Default";
import VerticalLayout from "@/layouts/Vertical";
import DetachedLayout from "@/layouts/Detached";
import HorizontalLayout from "@/layouts/Horizontal/";
import TwoColumnLayout from "@/layouts/TwoColumn/";

import { authProtectedFlattenRoutes, publicProtectedFlattenRoutes } from "./index";
import { useLayoutContext } from "@/context/useLayoutContext.jsx";
import React from "react";

const AllRoutes = (props) => {
  const { orientation } = useLayoutContext();

  const getLayout = () => {
    switch (orientation) {
      case 'horizontal':
        return HorizontalLayout;
      case 'detached':
        return DetachedLayout;
      case 'vertical':
        return VerticalLayout;
      default:
        return TwoColumnLayout;
    }
  };

  const Layout = getLayout();

  return (
    <React.Fragment>
      <Routes>
        {/* Public Routes */}
        {publicProtectedFlattenRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <Layout {...props}>
                {route.element}
              </Layout>
            }
          />
        ))}

        {/* Protected Routes */}
        {authProtectedFlattenRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <Layout {...props}>
                {route.element}
              </Layout>
            }
          />
        ))}

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Fragment>
  );
};

export default AllRoutes;
  