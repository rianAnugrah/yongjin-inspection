// interface NavProps {
//   menus: [
//     {
//       href: "/home";
//       label: "Home";
//       icon: <FaIcon />;
//     },
//     {
//       href: "/inspections";
//       label: "Inspections";
//       icon: <FaIcon />;
//     },
//     {
//       href: "/master-list";
//       label: "Master List";
//       icon: <FaIcon />;
//     },
//     {
//       href: "/report";
//       label: "Report";
//       icon: <FaIcon />;
//     }
//   ];
// }


import { ReactNode } from 'react';

export interface MenuItem {
  href: string;
  label: string;
  icon: ReactNode; // Using ReactNode to allow any valid React element, including FaIcon
}

export interface NavProps {
  menus: MenuItem[]; // Array of MenuItem
}
