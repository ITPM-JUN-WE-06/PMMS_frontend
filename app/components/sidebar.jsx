"use client"
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";
import AssessmentIcon from "./icons/AssessmentIcon";
import DashboardIcon from "./icons/DashboardIcon";
import UsersIcon from "./icons/UsersIcon";
import Logo from "./icons/Logo";
import PaperIcon from "./icons/ResearchIcon";
import MarksheetIcon from "./icons/MarksheetIcon";
import SupportIcon from "./icons/SupportIcon";
import SettingsIcon from "./icons/SettingsIcon";
import CollapsIcon from "./icons/CollapsIcon"
// import {
//   AssessmentIcon,
//   DashboardIcon,
//   LogoIcon,
//   LogoutIcon,
//   UsersIcon,
//   ResearchIcon,
//   SupportIcon,
  
// } from "./icons";


const menuItems = [
  { id: 1, label: "Dashboard", icon: DashboardIcon, link: "/dashboard" },
  { id: 2, label: "User Management", icon: UsersIcon, link: "/user" },
  { id: 3, label: "Project Management", icon: AssessmentIcon, link: "/project" },
  { id: 4, label: "Assessment Management", icon: AssessmentIcon, link: "/assessments" },
  { id: 5, label: "Research Paper Publication", icon: PaperIcon, link: "/research" },
  { id: 6, label: "Mark Sheet Generation", icon: MarksheetIcon, link: "/marks" },
  { id: 7, label: "Help & Support", icon: SupportIcon, link: "/support" },
  
  
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "bg-white flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu && activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <Logo />
            <span
              className={classNames("mt-2 text-lg font-bold text-text-primary", {
                hidden: toggleCollapse,
              })}
            >
              Module Minder
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-12">
        {menuItems.map(({ icon: Icon, ...menu }) => {
  const classes = getNavItemClasses(menu);
  return (
    <div key={menu.id} className={classes}>
      <Link href={menu.link} className="flex py-4 px-3 items-center w-full h-full">
        <div style={{ width: "2.5rem" }}>
          <Icon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            {menu.label}
          </span>
        )}
      </Link>
    </div>
  );
})}
        </div>
      </div>
      <Link href="/dashboard/settings">
      <div className={`${getNavItemClasses({})} px-3 py-4 `} >
     
        <div style={{ width: "2.5rem" }}>
          <SettingsIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Settings
          </span>
        )}
      </div>
      </Link>
      
    </div>
  );
};

export default Sidebar;
