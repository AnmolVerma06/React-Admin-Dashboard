import { FiActivity, FiAirplay, FiAperture, FiBarChart2, FiBook, FiBookmark, FiBriefcase, FiCalendar, FiClipboard, FiCpu, FiFileText, FiFolderPlus, FiGift, FiGrid, FiHome, FiLayers, FiMail, FiMap, FiMessageSquare, FiPackage, FiPocket, FiRss, FiShare2, FiShoppingCart, FiUsers } from "react-icons/fi";

// Menu Items
export const MENU_ITEMS = [
  {
  key: "dashboards",
  label: "Dashboards",
  isTitle: false,
    icon: FiHome,
    url: "/dashboard-1",
  },
  {
    key: "calendar",
  label: "Calendar",
  isTitle: false,
  icon: FiCalendar,
    url: "/apps/calendar",
  },
  {
    key: "projects",
    label: "Projects",
  isTitle: false,
    icon: FiBriefcase,
    url: "/apps/projects",
  },
  {
    key: "tasks",
    label: "Tasks",
    isTitle: false,
    icon: FiClipboard,
    url: "/apps/tasks/kanban",
  },
  {
    key: "ecommerce",
    label: "E-commerce",
  isTitle: false,
  icon: FiShoppingCart,
    children: [
      {
        key: "customers",
    label: "Customers",
    url: "/apps/ecommerce/customers",
        parentKey: "ecommerce",
      },
      {
        key: "orders",
    label: "Orders",
    url: "/apps/ecommerce/orders",
        parentKey: "ecommerce",
      },
      {
        key: "sellers",
    label: "Sellers",
    url: "/apps/ecommerce/sellers",
        parentKey: "ecommerce",
      },
    ],
  },
];

// Horizontal menu items
export const HORIZONTAL_MENU_ITEMS = [
  {
    key: "dashboards",
    label: "Dashboards",
  isTitle: false,
    icon: FiHome,
    url: "/dashboard-1",
  },
  {
    key: "calendar",
    label: "Calendar",
  isTitle: false,
    icon: FiCalendar,
    url: "/apps/calendar",
  },
  {
    key: "projects",
  label: "Projects",
  isTitle: false,
  icon: FiBriefcase,
    url: "/apps/projects",
  },
  {
    key: "tasks",
  label: "Tasks",
  isTitle: false,
  icon: FiClipboard,
    url: "/apps/tasks/kanban",
  },
  {
    key: "ecommerce",
    label: "E-commerce",
    isTitle: false,
    icon: FiShoppingCart,
    children: [
      {
        key: "customers",
      label: "Customers",
      url: "/apps/ecommerce/customers",
        parentKey: "ecommerce",
      },
      {
        key: "orders",
      label: "Orders",
      url: "/apps/ecommerce/orders",
        parentKey: "ecommerce",
      },
      {
        key: "sellers",
      label: "Sellers",
      url: "/apps/ecommerce/sellers",
        parentKey: "ecommerce",
      },
    ],
  },
];

// Two Column Menu Items
export const TWO_COl_MENU_ITEMS = [
  {
    key: "dashboards",
    label: "Dashboards",
    isTitle: false,
    icon: FiHome,
    url: "/dashboard-1",
  },
  {
    key: "calendar",
    label: "Calendar",
    isTitle: false,
    icon: FiCalendar,
    url: "/apps/calendar",
  },
  {
    key: "projects",
    label: "Projects",
    isTitle: false,
    icon: FiBriefcase,
    url: "/apps/projects",
  },
  {
    key: "tasks",
    label: "Tasks",
    isTitle: false,
    icon: FiClipboard,
      url: "/apps/tasks/kanban",
  },
  {
    key: "ecommerce",
    label: "E-commerce",
    isTitle: false,
    icon: FiShoppingCart,
    children: [
      {
        key: "customers",
      label: "Customers",
      url: "/apps/ecommerce/customers",
        parentKey: "ecommerce",
      },
      {
        key: "orders",
      label: "Orders",
      url: "/apps/ecommerce/orders",
        parentKey: "ecommerce",
      },
      {
        key: "sellers",
      label: "Sellers",
      url: "/apps/ecommerce/sellers",
        parentKey: "ecommerce",
      },
    ],
  },
];