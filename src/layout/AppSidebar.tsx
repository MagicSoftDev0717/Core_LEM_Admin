"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  // BoxCubeIcon,
  // CalenderIcon,
  ChevronDownIcon,
  // GridIcon,
  HorizontaLDots,
  // ListIcon,
  // PageIcon,
  // PieChartIcon,
  // PlugInIcon,
  // TableIcon,
  // UserCircleIcon,
} from "../icons/index";
// import SidebarWidget from "./SidebarWidget";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: "/images/Icon/Home.svg",
    name: "Dashboard",
    path: "/dashboard",
    // subItems: [{ name: "Ecommerce", path: "/", pro: false }],
  },
  {
    icon: "/images/Icon/Girl Running.svg",
    name: "Activites",
    subItems: [{ name: "Activities", path: "/activities", pro: false },
    { name: "Re-Assign Activitiexs", path: "/reassign_act", pro: false },
    { name: "Calendar", path: "/calendar_act", pro: false },
    { name: "Activity Group Manager", path: "/group_act", pro: false }
    ],
  },
  {
    icon: "/images/Icon/Omnichannel.svg",
    name: "Leads",
    subItems: [{ name: "Leads", path: "/leads", pro: false },
    { name: "Mentors", path: "/teacher_ld", pro: false },
    { name: "Schools", path: "/school_ld", pro: false },
    { name: "Community Contracts", path: "/comcon_ld", pro: false }
    ],
  },
  {
    icon: "/images/Icon/Students.svg",
    name: "Students",
    subItems: [{ name: "Students", path: "/students", pro: false },
    { name: "Learning Plan Manager", path: "/planmanager_stu", pro: false },
    { name: "Student Attenance", path: "/attendance_stu", pro: false },
    // { name: "Student Roster", path: "/roster_stu", pro: false },
    { name: "Centre Attendance Summary", path: "/centresummary_stu", pro: false },
    { name: "Student Attendance Summary", path: "/stusummary_stu", pro: false },
    { name: "School Year Bulk Update", path: "/yearbulk_stu", pro: false }
    ],
  },
  {
    icon: "/images/Icon/Bank.svg",
    name: "Accounts",
    subItems: [{ name: "Account Management", path: "/manage_ac", pro: false },
    { name: "Payment Reconciliation", path: "/payrec_ac", pro: false },
    { name: "Membership Setup", path: "/member_ac", pro: false },
    { name: "Enrolment Opportunity Dashboard", path: "/enrolloppo_ac", pro: false },
    ],
  },
  {
    icon: "/images/Icon/Guardians.svg",
    name: "Guardians",
    // path: "/guardians",
    subItems: [{ name: "Guardian Management", path: "/guardians", pro: false },
    { name: "Progress Report Manager", path: "/prorepo_gu", pro: false },
    { name: "Email Temaplate", path: "/emailtemp_gu", pro: false },
    ],
  },
  {
    icon: "/images/Icon/Employees.svg",
    name: "Employees",
    subItems: [{ name: "Employee Management", path: "/employees", pro: false },
    { name: "Employee Attendance", path: "/attendance_em", pro: false },
    { name: "Instruction Manager", path: "/instruction_em", pro: false },
    { name: "Answer Key", path: "/answer_em", pro: false },
    { name: "Attendance Ratio Chart", path: "/ratio_em", pro: false },
    { name: "Employee Timesheets", path: "/timesheet_em", pro: false }
    ],
  },
  // {
  //   icon: "/images/Icon/Badge.svg",
  //   name: "CRM-Enroll & Forms",
  //   path: "/",
  // },
  {
    icon: "/images/Icon/Reports.svg",
    name: "Reports",
    subItems: [{ name: "Student Report", path: "/student_rp", pro: false },
    { name: "Student Attendance Report", path: "/stuatt_rp", pro: false },
    { name: "Assessment Report", path: "/assess_rp", pro: false },
    { name: "Assess Progress Report", path: "/asspro_rp", pro: false },
    { name: "Enrollment Report", path: "/enroll_rp", pro: false },
    { name: "Delivery Method Report", path: "/delimet_rp", pro: false },
    { name: "Holds Report", path: "/holds_rp", pro: false },
    { name: "School Report", path: "/school_rp", pro: false },
    { name: "Student Birthday Report", path: "/stubir_rp", pro: false },
    { name: "Digital Workout Plan Report", path: "/workout_rp", pro: false },
    { name: "Lead Tracking", path: "/leadtrack_rp", pro: false },
    { name: "Lead Roster Report", path: "/ldroster_rp", pro: false },
    { name: "Lead Conversion Report", path: "/ldconversion_rp", pro: false },
    { name: "Referral Report", path: "/referral_rp", pro: false },
    { name: "Billing Exceptions Report", path: "/billing_rp", pro: false },
    { name: "Parent Communication Report", path: "/parent_rp", pro: false }
    ],
  },
  {
    icon: "/images/Icon/Tools.svg",
    name: "Business Tools",
    subItems: [{ name: "Curriculum Search", path: "/cursearch_bs", pro: false },
    { name: "Assessments for Printing", path: "/assessprint_bs", pro: false },
    { name: "Business Documents", path: "/doc_bs", pro: false },
    { name: "Job Board Manager", path: "/jobboard_bs", pro: false },
    { name: "LEM Job Board", path: "/lem_bs", pro: false },
    { name: "Virtual Center Manager", path: "/vircen_bs", pro: false },
    { name: "Centre Settings", path: "/censet_bs", pro: false },
    ]
  },

];

const othersItems: NavItem[] = [
  // {
  //   icon: <PieChartIcon />,
  //   name: "Charts",
  //   subItems: [
  //     { name: "Line Chart", path: "/line-chart", pro: false },
  //     { name: "Bar Chart", path: "/bar-chart", pro: false },
  //   ],
  // },
  // {
  //   icon: <BoxCubeIcon />,
  //   name: "UI Elements",
  //   subItems: [
  //     { name: "Alerts", path: "/alerts", pro: false },
  //     { name: "Avatar", path: "/avatars", pro: false },
  //     { name: "Badge", path: "/badge", pro: false },
  //     { name: "Buttons", path: "/buttons", pro: false },
  //     { name: "Images", path: "/images", pro: false },
  //     { name: "Videos", path: "/videos", pro: false },
  //   ],
  // },
  // {
  //   icon: <PlugInIcon />,
  //   name: "Authentication",
  //   subItems: [
  //     { name: "Sign In", path: "/signin", pro: false },
  //     { name: "Sign Up", path: "/signup", pro: false },
  //   ],
  // },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "others"
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group  ${openSubmenu?.type === menuType && openSubmenu?.index === index
                ? "menu-item-active"
                : "menu-item-inactive"
                } cursor-pointer ${!isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
                }`}
            >
              <span
                className={` ${openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-icon-active"
                  : "menu-item-icon-inactive"
                  }`}
              >
                <Image src={typeof nav.icon === "string" ? nav.icon : ""} width={24} height={24} alt={nav.name ?? "icon"} className="icon" />
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                    ? "rotate-180 text-brand-500"
                    : ""
                    }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                  }`}
              >
                <span
                  className={`${isActive(nav.path)
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                    }`}
                >
                  <Image src={typeof nav.icon === "string" ? nav.icon : ""} alt={nav.name ?? "icon"} width={24} height={24}  className="icon" />

                  {/* <img src={nav.icon} alt={nav.name} className="icon" /> */}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${isActive(subItem.path)
                        ? "menu-dropdown-item-active"
                        : "menu-dropdown-item-inactive"
                        }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${isActive(subItem.path)
                              ? "menu-dropdown-badge-active"
                              : "menu-dropdown-badge-inactive"
                              } menu-dropdown-badge `}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${isActive(subItem.path)
                              ? "menu-dropdown-badge-active"
                              : "menu-dropdown-badge-inactive"
                              } menu-dropdown-badge `}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // const isActive = (path: string) => path === pathname;
  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isMobileOpen
          ? "w-[290px]"
          : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
          }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden"
                src="/images/logo/logo.svg"
                alt="Logo"
                width={150}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "justify-start"
                  }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  ""
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>

            <div className="">
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "justify-start"
                  }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  ""
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(othersItems, "others")}
            </div>
          </div>
        </nav>
        {/* {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null} */}
      </div>
    </aside>
  );
};

export default AppSidebar;
