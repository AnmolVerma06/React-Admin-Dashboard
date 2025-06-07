import React from "react";
import { Navigate } from "react-router-dom";

// Dashboard
const Dashboard1 = React.lazy(() => import("../pages/dashboard/Dashboard1"));

// Apps
const Calendar = React.lazy(() => import("../pages/apps/Calendar"));
const Projects = React.lazy(() => import("../pages/apps/Projects"));
const ProjectDetail = React.lazy(() => import("../pages/apps/Projects/Detail"));
const ProjectForm = React.lazy(() => import("../pages/apps/Projects/ProjectForm"));
const Tasks = React.lazy(() => import("../pages/apps/Tasks/List"));
const TaskDetails = React.lazy(() => import("../pages/apps/Tasks/Details"));
const Kanban = React.lazy(() => import("../pages/apps/Tasks/Board"));

// E-commerce
const Customers = React.lazy(() => import("../pages/apps/ecommerce/Customers"));
const Orders = React.lazy(() => import("../pages/apps/ecommerce/Orders"));
const Sellers = React.lazy(() => import("../pages/apps/ecommerce/Sellers"));

// Landing
// const Landing = React.lazy(() => import("../pages/landing"));

const authProtectedRoutes = [
  {
    path: "/dashboard-1",
    element: <Dashboard1 />,
  },
  {
    path: "/apps",
    children: [
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "projects",
        children: [
          {
            path: "",
            element: <Projects />,
          },
          {
            path: "detail",
            element: <ProjectDetail />,
          },
          {
            path: "create",
            element: <ProjectForm />,
          },
        ],
      },
      {
        path: "tasks",
        children: [
          {
            path: "",
            element: <Tasks />,
          },
          {
            path: "details",
            element: <TaskDetails />,
          },
          {
            path: "kanban",
            element: <Kanban />,
          },
        ],
      },
    ],
  },
  {
    path: "/apps/ecommerce/customers",
    element: <Customers />,
  },
  {
    path: "/apps/ecommerce/orders",
    element: <Orders />,
  },
  {
    path: "/apps/ecommerce/sellers",
    element: <Sellers />,
  },
];

const publicProtectedRoutes = [
  {
    path: "/",
  element: <Dashboard1 />,
  },
];

const flattenRoutes = (routes) => {
  let flatRoutes = [];

  routes.forEach((route) => {
    if (route.children) {
      route.children.forEach((child) => {
        if (child.children) {
          child.children.forEach((grandChild) => {
            flatRoutes.push({
              path: `${route.path}/${child.path}/${grandChild.path}`,
              element: grandChild.element,
            });
          });
        } else {
          flatRoutes.push({
            path: `${route.path}/${child.path}`,
            element: child.element,
          });
        }
      });
    } else {
      flatRoutes.push({
        path: route.path,
        element: route.element,
      });
    }
  });

  return flatRoutes;
};

export const authProtectedFlattenRoutes = flattenRoutes(authProtectedRoutes);
export const publicProtectedFlattenRoutes = flattenRoutes(publicProtectedRoutes);