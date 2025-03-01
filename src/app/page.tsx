import type { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title:
    "LEM Admin Panel Dashboard",
  description: "This is Dashboard for LEM Admin",
};


import "./348c6be32cb97baa.css";

export default function Dashboard() {
  return (
    <body style={{ backgroundColor: 'white' }}>
      <div id="__next">
        <div className="AppLayoutWrapper">
          <div className="top-header">
            <div className="top-header-cont">
              <div className="left-container">
                <div className="product-suite-block">
                  Product Suite
                  <img src="/assets/images/header-arrow-right.svg" alt="Product suite arrow right" fetchPriority="high" width="16" height="21" decoding="async" data-nimg="1" className="top-header-img arrow-right" style={{ color: 'transparent' }} />
                </div>
                <a title="Core-Lem" className="classe365-logo" href="https:/core-lem.com/" target="_blank">
                  <img alt="logo" fetchPriority="high" width="60" height="18" decoding="async" data-nimg="1" className="top-header-img" style={{ color: 'transparent' }} src="/assets/images/core-lem-logo.svg" /></a>
                <a title="LearnEnglishMaths" className="hiree365-logo" href="http://www.learnenglishmaths.com/" target="_blank">
                  <img alt="logo" loading="lazy" width="60" height="36" decoding="async" data-nimg="1" className="top-header-img" style={{ color: 'transparent' }} src="/assets/images/lem-logo.svg" /></a>
              </div>
              <div className="right-container d-flex align-items-center gap-2"></div>
            </div>
          </div>
          <div className="HeaderView">
            <div className="HeaderWrapper">
              <div className="HeaderNavWrapper">
                <div className="AppLogoWrapper">
                  <img src="/assets/images/core-lem-logo.svg" alt="Product suite arrow right" fetchPriority="high" decoding="async" data-nimg="1" className="top-header-img arrow-right" style={{ color: 'transparent' }} />
                </div>
                <div className="HeaderNavContainer">
                  <div className="NavItemWrapper">
                    <div className="NavLabel">
                      <span>Solutions</span>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>
                    </div>
                    <div className=" SubMenuWrapper">
                      <div className="SubMenuItemWrapper">
                        <span>Teams</span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
                        <div className=" SubMenuWrapper sub-menu">
                          <div className="SubMenuItemWrapper">Marketing Teams</div>
                          <div className="SubMenuItemWrapper">Registrars</div>
                          <div className="SubMenuItemWrapper">Administrators</div>
                          <div className="SubMenuItemWrapper">Teachers</div>
                          <div className="SubMenuItemWrapper">CFOs</div>
                          <div className="SubMenuItemWrapper">CTOs</div>
                          <div className="SubMenuItemWrapper">Business Leaders</div>
                        </div>
                      </div>
                      <div className=" SubMenuItemWrapper">

                      </div>
                      <div className=" SubMenuItemWrapper">

                      </div>
                    </div>
                  </div>
                  <div className="NavItemWrapper">
                    <div className="NavLabel">
                      <span>Pricing</span>

                    </div>
                  </div>
                  <div className="NavItemWrapper">
                    <div className="NavLabel">
                      <span>Free Resources</span>

                    </div>
                  </div>
                  <div className="NavItemWrapper">
                    <div className="NavLabel">
                      <span>More</span>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="HeaderNavContainer">
                <div className="NavItemWrapper">
                  <div className="NavLabel"><span>Contact Sales</span></div>
                  <div className=" SubMenuWrapper"></div>
                </div>
              </div>
              <div className="NavItemWrapper">
                <div className="NavLabel"><span>Log in</span></div>
                <div className=" SubMenuWrapper"></div>
              </div>
              <button className="ButtonWrapper sm"><span>Try it Free</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></button>
            </div>
            <div className="MobileHeaderNavWrapper">
              <button className="ButtonWrapper sm">
                <span>Try it Free</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
              </button>
              <div className="MenuButton">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                </svg>
              </div>
            </div>
            <div className=" MobileNavbarContainer">
              <div className="CloseButton">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="105" height="30" viewBox="0 0 105 30" fill="none">
                <path d="M12.7799 6.54047H10.4604L10.1403 4.45992C9.84028 4.15992 9.44028 3.92033 8.98056 3.74047C8.52014 3.55992 7.95972 3.48006 7.34028 3.48006C5.97986 3.48006 4.94028 3.98006 4.22014 4.95992C3.5 5.94047 3.12014 7.22033 3.12014 8.80019V9.34047C3.12014 10.9203 3.47986 12.2002 4.2 13.2002C4.92014 14.1801 5.95972 14.6801 7.27986 14.6801C7.9 14.6801 8.46042 14.6002 8.96042 14.4203C9.46042 14.2398 9.85972 14.0002 10.1403 13.7002L10.4597 11.6203H12.7799V14.7002C12.1597 15.4203 11.3597 16.0002 10.3799 16.4405C9.4 16.8801 8.32014 17.0801 7.12014 17.0801C5.04028 17.0801 3.32014 16.3599 2 14.9203C0.659722 13.4801 0 11.6203 0 9.35992V8.84047C0 6.58006 0.659722 4.72033 1.97986 3.28006C3.3 1.82033 5.02014 1.1002 7.12014 1.1002C8.32014 1.1002 9.4 1.32033 10.3799 1.75992C11.3403 2.2002 12.1403 2.78075 12.7799 3.5002V6.54047ZM13.9597 2.08006V0.200195H18.7403V14.6599L20.2403 14.9801V16.8405H14.1201V14.9801L15.6201 14.6599V2.4002L13.9597 2.08006ZM28.6201 16.8599C28.5403 16.6599 28.4604 16.4801 28.4 16.2599C28.3403 16.0405 28.2799 15.8599 28.2597 15.6405C27.8799 16.0599 27.4403 16.4203 26.9 16.6801C26.3597 16.9405 25.7597 17.0801 25.0806 17.0801C23.9403 17.0801 23.0403 16.7801 22.3799 16.1599C21.7201 15.5405 21.3799 14.7002 21.3799 13.6405C21.3799 12.5599 21.8201 11.7203 22.6799 11.1405C23.5403 10.5405 24.8201 10.2599 26.5 10.2599H28.1V9.12033C28.1 8.55992 27.9403 8.14047 27.6201 7.82033C27.3 7.52033 26.8201 7.35992 26.2 7.35992C25.8403 7.35992 25.5194 7.4002 25.2403 7.48006C24.9597 7.55992 24.7403 7.66061 24.5597 7.78006L24.3597 9.02033H22.0194L22.0403 6.45992C22.6 6.08006 23.2597 5.75992 24 5.48075C24.7403 5.22033 25.5403 5.08006 26.4 5.08006C27.8403 5.08006 29 5.44047 29.8799 6.14047C30.7799 6.84047 31.2201 7.84047 31.2201 9.14047V14.4203C31.2201 14.5801 31.2403 14.7203 31.2597 14.8599L32.2201 14.9801V16.8405H28.6201V16.8599ZM25.9201 14.7599C26.3799 14.7599 26.8201 14.6599 27.2 14.4599C27.5799 14.2599 27.8806 14.0002 28.1 13.7002V11.9405H26.5C25.8403 11.9405 25.3403 12.1002 25 12.4002C24.6597 12.7002 24.4799 13.0808 24.4799 13.5203C24.4799 13.9203 24.6 14.2203 24.8597 14.4405C25.1201 14.6599 25.4597 14.7599 25.9201 14.7599ZM42.7 9.25992H40.6L40.2597 7.82033C40.0403 7.63978 39.7806 7.5002 39.4597 7.4002C39.1403 7.28006 38.7799 7.21964 38.3799 7.21964C37.8403 7.21964 37.4 7.34047 37.0799 7.58075C36.7604 7.82033 36.6 8.14047 36.6 8.50019C36.6 8.84047 36.7597 9.14047 37.0597 9.38006C37.3597 9.62033 37.9799 9.82033 38.9 10.0002C40.3403 10.2801 41.4 10.7002 42.0806 11.2599C42.7799 11.8203 43.1201 12.5801 43.1201 13.5405C43.1201 14.5801 42.6799 15.4203 41.7799 16.0801C40.8799 16.7398 39.7201 17.0599 38.2597 17.0599C37.3799 17.0599 36.5597 16.9203 35.8 16.6801C35.0597 16.4203 34.4 16.0405 33.8201 15.5599L33.7799 12.9599H35.9604L36.3799 14.4599C36.5604 14.6196 36.8201 14.7405 37.1403 14.8002C37.4597 14.8801 37.8 14.9203 38.1403 14.9203C38.7799 14.9203 39.2597 14.8002 39.5799 14.5801C39.9201 14.3599 40.0799 14.0405 40.0799 13.6599C40.0799 13.3196 39.9201 13.0203 39.5799 12.7801C39.2396 12.5405 38.6201 12.3203 37.7396 12.1203C36.3799 11.8405 35.3597 11.4398 34.6597 10.8801C33.9597 10.3405 33.6201 9.60019 33.6201 8.65992C33.6201 7.7002 34.0201 6.85992 34.8201 6.15992C35.6201 5.45992 36.7597 5.1002 38.2201 5.1002C39.1201 5.1002 39.9597 5.22033 40.7597 5.45992C41.5597 5.70019 42.1799 6.02033 42.6403 6.38006L42.7 9.25992ZM53.9597 9.25992H51.8597L51.5194 7.82033C51.3 7.63978 51.0403 7.5002 50.7201 7.4002C50.4 7.28006 50.0396 7.21964 49.6403 7.21964C49.1 7.21964 48.6597 7.34047 48.3403 7.58075C48.0201 7.82033 47.8597 8.14047 47.8597 8.50019C47.8597 8.84047 48.0194 9.14047 48.3201 9.38006C48.6201 9.62033 49.2403 9.82033 50.1604 10.0002C51.6 10.2801 52.6604 10.7002 53.3403 11.2599C54.0403 11.8203 54.3799 12.5801 54.3799 13.5405C54.3799 14.5801 53.9403 15.4203 53.0396 16.0801C52.1403 16.7398 50.9799 17.0599 49.5201 17.0599C48.6403 17.0599 47.8201 16.9203 47.0597 16.6801C46.3201 16.4203 45.6597 16.0405 45.0806 15.5599L45.0403 12.9599H47.2201L47.6403 14.4599C47.8201 14.6196 48.0799 14.7405 48.4 14.8002C48.7194 14.8801 49.0597 14.9203 49.4 14.9203C50.0403 14.9203 50.5201 14.8002 50.8403 14.5801C51.1806 14.3599 51.3403 14.0405 51.3403 13.6599C51.3403 13.3196 51.1806 13.0203 50.8403 12.7801C50.5 12.5405 49.8799 12.3203 49 12.1203C47.6403 11.8405 46.6201 11.4398 45.9201 10.8801C45.2201 10.3405 44.8799 9.60019 44.8799 8.65992C44.8799 7.7002 45.2799 6.85992 46.0799 6.15992C46.8799 5.45992 48.0201 5.1002 49.4799 5.1002C50.3799 5.1002 51.2201 5.22033 52.0201 5.45992C52.8201 5.70019 53.4403 6.02033 53.9 6.38006L53.9597 9.25992ZM61.3194 17.0801C59.6597 17.0801 58.3194 16.5405 57.3194 15.4801C56.3194 14.4203 55.8194 13.0599 55.8194 11.4203V11.0002C55.8194 9.28006 56.3 7.88006 57.2403 6.75992C58.1799 5.64047 59.4403 5.1002 61.0403 5.1002C62.6 5.1002 63.8 5.55992 64.6799 6.50019C65.5403 7.44047 65.9799 8.72033 65.9799 10.3196V12.0203H59.0799L59.0597 12.0801C59.1201 12.8405 59.3799 13.4599 59.8201 13.9599C60.2799 14.4599 60.8799 14.7002 61.6604 14.7002C62.3597 14.7002 62.9201 14.6405 63.3799 14.5002C63.8403 14.3599 64.3403 14.1405 64.8799 13.8405L65.7201 15.7599C65.2403 16.1405 64.6201 16.4599 63.8597 16.7203C63.1 16.9405 62.259 17.0801 61.3194 17.0801ZM61.0403 7.48006C60.4597 7.48006 60 7.70019 59.6799 8.13978C59.3396 8.58006 59.1403 9.16061 59.0597 9.88006L59.1 9.94047H62.9194V9.65992C62.9194 9.00019 62.7597 8.45992 62.4597 8.08006C62.1403 7.68006 61.6597 7.48006 61.0403 7.48006Z" fill="#353944"></path><path d="M67.7192 30.0001C61.1588 30.0001 55.0595 26.7598 51.3789 21.3195L53.199 20.1001C56.4588 24.9404 61.899 27.8202 67.7192 27.8202C73.5386 27.8202 78.9789 24.9404 82.2393 20.1001L84.0588 21.3202C80.3789 26.7598 74.2595 30.0001 67.7192 30.0001Z" fill="#353944"></path><path d="M81.0004 2.75972C80.0407 1 77.6601 0 75.1407 0C71.8796 0 70.2004 0.959722 69.0205 1.77986L70.8004 5.24028C72.3407 4.15972 73.7803 3.92014 74.7407 3.92014C75.7004 3.92014 76.4004 4.27986 76.4004 5.12014C76.4004 5.96042 75.8004 6.31944 74.9601 6.31944H73.3004V9.89931H74.9601C76.0407 9.89931 76.8004 10.3792 76.8004 11.3396C76.8004 12.2993 75.8004 12.8993 74.7205 12.8993C73.6407 12.8993 71.7407 12.4194 70.6601 11.1194L68.4004 14.3C69.3205 15.6194 71.6205 16.9403 75.0809 16.9403C77.4803 16.9403 79.9004 16.1201 81.1407 14.4194C80.0004 13 79.3205 11.0403 79.3205 8.6C79.3205 6.22014 79.9004 4.22014 81.0004 2.75972ZM86.4004 9.31944C85.3205 9.31944 84.5601 10.1597 84.5601 11.1806C84.5601 12.1806 85.3205 13.0201 86.4004 13.0201C87.4803 13.0201 88.2601 12.1799 88.2601 11.1799C88.2601 10.1597 87.4803 9.31944 86.4004 9.31944Z" fill="#6772E5"></path><path d="M98.1011 5.5598C96.9011 5.5598 96.4414 5.71952 96.081 5.84035L96.3212 4.27994H103.241V0.220215H92.281L92.1608 1.20008C92.3608 1.32021 92.5414 1.44035 92.7011 1.54035L91.9212 3.04035L90.9011 5.00008C90.9011 5.00008 89.2414 4.00008 87.4414 4.00008C85.6608 4.00008 84.4608 5.00008 84.4608 7.02021C84.7011 6.77994 85.781 5.82021 88.281 5.82021C89.4615 5.82021 90.6608 6.20008 91.6011 6.9598C91.6608 7.00008 91.7011 7.04035 91.7608 7.07994C91.881 7.17994 92.0011 7.30008 92.1011 7.42021C92.1608 7.47994 92.2011 7.54035 92.2608 7.60008C92.3212 7.67994 92.4011 7.7598 92.4608 7.8598C92.8414 8.40007 93.1205 9.04035 93.2608 9.77994L93.381 9.84035C94.2212 9.3598 95.4011 9.00008 96.481 9.00008C97.5608 9.00008 98.8608 9.47994 98.8608 10.9001C98.8608 12.3202 97.4212 12.8001 96.481 12.8001C95.7212 12.8001 94.3608 12.4806 93.3011 11.7001C93.1011 13.1202 92.4414 14.3806 91.381 15.3001C92.581 16.1799 94.4608 16.8799 96.9608 16.8799C100.421 16.8799 104.041 14.9404 104.041 10.9001C104.041 6.8598 100.501 5.5598 98.1011 5.5598Z" fill="#6772E5"></path></svg>
              <div className="MobileNavContent">
                <div className="NavItemWrapper">
                  <div className="NavLabel"><span>Solutions</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg></div>
                  <div className=" SubMenuWrapper">
                    <div className="SubMenuItemWrapper"><span>Teams</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
                      <div className=" SubMenuWrapper sub-menu"><div className="SubMenuItemWrapper">Marketing Teams</div><div className="SubMenuItemWrapper">Registrars</div>
                        <div className="SubMenuItemWrapper">Administrators</div><div className="SubMenuItemWrapper">Teachers</div><div className="SubMenuItemWrapper">CFOs</div><div className="SubMenuItemWrapper">CTOs</div>
                        <div className="SubMenuItemWrapper">Business Leaders</div></div></div>
                    <div className="SubMenuItemWrapper"><span>Organizations</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
                      <div className=" SubMenuWrapper sub-menu"><div className="SubMenuItemWrapper">Academies</div>
                        <div className="SubMenuItemWrapper">Schools</div><div className="SubMenuItemWrapper">Universities &amp; Higher Education</div><div className="SubMenuItemWrapper">Corporate Learning</div></div></div>
                    <div className="SubMenuItemWrapper"><span>Features</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
                      <div className=" SubMenuWrapper sub-menu"><div className="SubMenuItemWrapper">Pre-Admission &amp; Enrolment</div>
                        <div className="SubMenuItemWrapper">Customer Relationship Management</div><div className="SubMenuItemWrapper">Student Information System</div>
                        <div className="SubMenuItemWrapper">Learning Management System</div><div className="SubMenuItemWrapper">Fees &amp; Invoicing</div><div className="SubMenuItemWrapper">Finance &amp; Accounting</div><div className="SubMenuItemWrapper">eCommerce Module</div>
                        <div className="SubMenuItemWrapper">Fund Raising</div><div className="SubMenuItemWrapper">Degree Audit</div><div className="SubMenuItemWrapper">Alumni</div><div className="SubMenuItemWrapper">White Label Module</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" MobileNavbarOverlay">
              </div>
            </div>
          </div>
          <div className="AppContentWrapper">
            <div className="LandingSectionWrapper">
              <div className="LandingShapeWrapper">
                <img src="/assets/images/shapes/CRM.webp" alt="CRM" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="shape-1" style={{ color: 'transparent' }} />
                <img src="/assets/images/shapes/Schedules &amp; communication.webp" alt="Schedules &amp; communication" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="shape-2" style={{ color: 'transparent' }} ></img>
                <img src="/assets/images/shapes/SIS.webp" alt="SIS" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="shape-3" style={{ color: 'transparent' }} ></img>
                <img src="/assets/images/shapes/Add-ons.webp" alt="Add-ons" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="shape-4" style={{ color: 'transparent' }} ></img>
                <img src="/assets/images/shapes/LMS.webp" alt="LMS" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="shape-5" style={{ color: 'transparent' }}></img>
              </div>

              <h1>Revolutionize Your Institution&apos;s
                <b>Learning Experience Today</b>
              </h1>
              <p>Unlock a seamless learner journey. From admission to alumni networking, and beyond - our complete education solution has you covered.</p>
              <div className="LandingButtonWrapper">
                <button className="ButtonWrapper shadow md">
                  <span>Try For Free</span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                  </svg>
                </button>
                <button className="ButtonWrapper md transparent">Get Your Free Platform Tour</button>
              </div>
              <div style={{ marginBottom: '30px', color: '#888', fontSize: '14px' }}>
                It&apos;s free for 14 days. No credit card required.
              </div>
              <div className="LandingVideoWrapper">
                <img src="/assets/_next/static/media/Hero-Image.177ae053.webp" alt="Hero Image" loading="lazy" width="2786" height="1567" decoding="async" data-nimg="1" className="hero-image desktop" style={{ color: 'transparent' }} />
                <img src="/assets/_next/static/media/Hero-Image-Mobile.9cedb43f.webp" alt="Hero Image" loading="lazy" width="425" height="239" decoding="async" data-nimg="1" className="hero-image mobile" style={{ color: 'transparent' }} />
              </div>
            </div>
            <div className="ExperienceSectionWrapper">
              <div className="TitleWrapper">
                <h2>Transform Your Teaching with Award-Winning Classe365</h2>
              </div>
              <div className="trusted">
                <div className="trustedstyles__TrustedSectionWrapper-sc-vmda8z-0 cWKVvu">
                  <p>Trusted by 6,000+ educational institutions in 130 countries</p>
                  <div className="trustedstyles__SwiperWrapper-sc-vmda8z-2 heqpqN">
                    <div className="trustedstyles__SwiperContainer-sc-vmda8z-1 elmXKx">
                      <div className="swiper swiper-initialized swiper-horizontal mySwiper swiper-backface-hidden">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide swiper-slide-active" style={{ width: '215.667px', marginRight: '30px' }} data-swiper-slide-index="0">
                            <div>
                              <img src="/assets/images/trusted/1.webp" alt="Asian Institute of Management" title="Asian Institute of Management" fetchPriority="high" width="68" height="49" decoding="async" data-nimg="1" style={{ color: 'transparent' }} />
                            </div>
                          </div>
                          <div className="swiper-slide swiper-slide-next" style={{ width: '215.667px', marginRight: '30px' }} data-swiper-slide-index="1">
                            <div>
                              <img alt="United States - Air Force Organization" title="United States - Air Force Organization" fetchPriority="high" width="53" height="53" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/trusted/2.webp" />
                            </div>
                          </div>
                          <div className="swiper-slide" style={{ width: '215.667px', marginRight: '30px' }} data-swiper-slide-index="2">
                            <div>
                              <img alt="Hoston Ballet Academy" title="Hoston Ballet Academy" fetchPriority="high" width="80" height="60" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/trusted/3.webp" />
                            </div>
                          </div>
                          <div className="swiper-slide" style={{ width: '215.667px', marginRight: '30px' }} data-swiper-slide-index="3">
                            <div>
                              <img alt="Board of Jewish Education" title="Board of Jewish Education" fetchPriority="high" width="98" height="29" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/trusted/5.webp" />
                            </div>
                          </div>
                          <div className="swiper-slide" data-swiper-slide-index="4" style={{ width: '215.667px', marginRight: '30px' }}>
                            <div>
                              <img alt="PWC" title="PricewaterhouseCoopers LLP" fetchPriority="high" width="130" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/trusted/6.webp" /></div>
                          </div>
                        </div>
                        <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                          <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                          <span className="swiper-pagination-bullet"></span>
                          <span className="swiper-pagination-bullet"></span>
                          <span className="swiper-pagination-bullet"></span>
                          <span className="swiper-pagination-bullet"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "50px", marginRight: "0", marginBottom: "0", marginLeft: "0" }}>
                <div className="ImageWrapper" id="experience-navbar">
                  <a href="#experience-0" className="" title="classe365"><video preload="metadata" className="lazy" src="/assets/images/experience/data02.mp4" height={0} width={0} autoPlay loop muted playsInine></video></a>
                  <a href="#experience-1" className="" title="classe365"><video preload="metadata" className="lazy" src="/assets/images/experience/data01.mp4" height={0} width={0} autoPlay loop muted playsInine></video></a>
                  <a href="#experience-2" className="" title="classe365"><video preload="metadata" className="lazy" src="/assets/images/experience/data03.mp4" height={0} width={0} autoPlay loop muted playsInine></video></a>
                </div>
              </div>
            </div>
            <div className="SolutionsWrapper">

            </div>
            <div className="FeaturesWrapper">

            </div>
            <div className="InstitutionsWrapper">

            </div>
            <div className="DiscoverWrapper">

            </div>
            <div className="ResourcesWrapper">

            </div>
          </div>
          <div className="FooterWrapper">
            <div className="bookstyles__BookSectionWrapper-sc-k85x0-0">

            </div>
            <div className="bookstyles__BookImageWrapper-sc-k85x0-2">

            </div>
          </div>
        </div>
      </div>

    </body>


  );
}
