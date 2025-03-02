"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


import "./348c6be32cb97baa.css";
// import "./aaa.css";

export default function BasicTableOne() {
    const router = useRouter();
    const goToMainPage = () => {
        router.push("/home"); // Navigate to the 'lead' page
    };

    // const videoData = [
    //     { id: "experience-0", src: "/assets/images/experience/data02.mp4" },
    //     { id: "experience-1", src: "/assets/images/experience/data01.mp4" },
    //     { id: "experience-2", src: "/assets/images/experience/data03.mp4" },
    // ];

    const solutions = [
        { title: "Marketing", description: "Want to boost enrolment? Use our higher education CRM, e-commerce & agent modules! Benefit from one-click enrolment, student placements & more.", image: "1.webp" },
        { title: "Registrars", description: "Managing admissions just got easy! Admit and monitor students using our admission CRM & task module.",  image: "2.webp" },
        { title: "Administrators", description: "Seamlessly manage student data with our student database management system. Track progress, manage alumni, and build the learning journey.",  image: "3.webp" },
        { title: "Teachers", description: "Use our Learning Management System & analytics module for immersive classroom experiences. Observe behavioural trends and improve student success.",  image: "4.webp" },
        { title: "Business Leaders", description: "Looking for an easier way to manage financial transactions? Scholarships, donations and online payments managed like never before.",  image: "5.webp" },
        { title: "CFOs", description: "Take control of your finances with Classe365. Our ROI calculators can also help you save up to 33%.",  image: "6.webp" },
        { title: "IT Leaders", description: "Simplify your integrations with our open APIs! Sign into Google Workspace or Office365 for even more flexibility.",  image: "7.webp" }
    ];


    const [selectedImage, setSelectedImage] = useState<string>("/assets/images/solutions/1.webp");
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Track active card index

    const handleImageChange = (index: number, imageName: string) => {
        setSelectedImage(`/assets/images/solutions/${imageName}`);
        setActiveIndex(index);
    };
    return (
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
                                <img src="/assets/images/core-lem-logo.svg" alt="logo" fetchPriority="high" width={60} height={48} decoding="async" data-nimg="1" className="top-header-img" style={{ color: 'transparent' }} /></a>
                            <a title="LearnEnglishMaths" className="hiree365-logo" href="http://www.learnenglishmaths.com/" target="_blank">
                                <img src="/assets/images/lem-logo.svg" alt="logo" loading="lazy" width="60" height="36" decoding="async" data-nimg="1" className="top-header-img" style={{ color: 'transparent' }} /></a>
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
                        <button className="ButtonWrapper sm" onClick={goToMainPage}>
                            <span>Try it Free</span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
                        </button>
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
                                <div className="NavLabel"><span>Solutions</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg></div>
                                <div className=" SubMenuWrapper">
                                    <div className="SubMenuItemWrapper"><span>Teams</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
                                        <div className=" SubMenuWrapper sub-menu"><div className="SubMenuItemWrapper">Marketing Teams</div>
                                            <div className="SubMenuItemWrapper">Registrars</div>
                                            <div className="SubMenuItemWrapper">Administrators</div>
                                            <div className="SubMenuItemWrapper">Teachers</div>
                                            <div className="SubMenuItemWrapper">CFOs</div><div className="SubMenuItemWrapper">CTOs</div>
                                            <div className="SubMenuItemWrapper">Business Leaders</div>
                                        </div>
                                    </div>
                                    <div className="SubMenuItemWrapper"><span>Organizations</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
                                        <div className=" SubMenuWrapper sub-menu">
                                            <div className="SubMenuItemWrapper">Academies</div>
                                            <div className="SubMenuItemWrapper">Schools</div>
                                            <div className="SubMenuItemWrapper">Universities &amp; Higher Education</div>
                                            <div className="SubMenuItemWrapper">Corporate Learning</div></div></div>
                                    <div className="SubMenuItemWrapper"><span>Features</span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>
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
                            <img src="/assets/images/shapes/Schedules_communication.webp" alt="Schedules_communication" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" className="shape-2" style={{ color: 'transparent' }} ></img>
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
                        <div style={{ fontWeight: 100 }} className="TitleWrapper">
                            <h2 style={{ fontWeight: 600, lineHeight: "1", fontSize: '2.5em' }}>
                                Transform Your Teaching with Award-Winning Core-Lem
                            </h2>
                        </div>

                        <div className="trusted flex flex-col items-center justify-center text-center w-full">
                            <div className="trustedstyles__TrustedSectionWrapper-sc-vmda8z-0 cWKVvu">
                                <p className="text-lg font-medium">Trusted by 6,000+ educational institutions in 130 countries</p>
                                <div className="trustedstyles__SwiperWrapper-sc-vmda8z-2 heqpqN w-full flex justify-center">
                                    <div className="trustedstyles__SwiperContainer-sc-vmda8z-1 elmXKx flex justify-center">
                                        <div className="swiper swiper-initialized swiper-horizontal mySwiper swiper-backface-hidden flex justify-center">
                                            <div className="swiper-wrapper flex justify-center">
                                                <div className="swiper-slide swiper-slide-active flex justify-center items-center" style={{ width: '215.667px', marginRight: '30px' }} data-swiper-slide-index="0">
                                                    <div>
                                                        <img src="/assets/images/trusted/1.webp" alt="Asian Institute of Management" title="Asian Institute of Management" fetchPriority="high" width="68" height="49" decoding="async" data-nimg="1" style={{ color: 'transparent' }} />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-next flex justify-center items-center" style={{ width: '215.667px', marginRight: '30px' }} data-swiper-slide-index="1">
                                                    <div>
                                                        <img alt="United States - Air Force Organization" title="United States - Air Force Organization" fetchPriority="high" width="53" height="53" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/trusted/2.webp" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide flex justify-center items-center" style={{ width: '215.667px', marginRight: '30px' }} data-swiper-slide-index="2">
                                                    <div>
                                                        <img alt="Hoston Ballet Academy" title="Hoston Ballet Academy" fetchPriority="high" width="80" height="60" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/trusted/3.webp" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide flex justify-center items-center" style={{ width: '215.667px', marginRight: '30px' }} data-swiper-slide-index="3">
                                                    <div>
                                                        <img alt="Board of Jewish Education" title="Board of Jewish Education" fetchPriority="high" width="98" height="29" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/trusted/5.webp" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide flex justify-center items-center" data-swiper-slide-index="4" style={{ width: '215.667px', marginRight: '30px' }}>
                                                    <div>
                                                        <img alt="PWC" title="PricewaterhouseCoopers LLP" fetchPriority="high" width="130" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/trusted/6.webp" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock flex justify-center mt-4">
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
                                <a href="#experience-0" className="" title="classe365"><video preload="metadata" className="lazy" src="/assets/images/experience/data02.mp4" height={0} width={0} autoPlay loop muted playsInline></video></a>
                                <a href="#experience-1" className="" title="classe365"><video preload="metadata" className="lazy" src="/assets/images/experience/data01.mp4" height={0} width={0} autoPlay loop muted playsInline></video></a>
                                <a href="#experience-2" className="" title="classe365"><video preload="metadata" className="lazy" src="/assets/images/experience/data03.mp4" height={0} width={0} autoPlay loop muted playsInline></video></a>
                            </div>
                            <div className="ExperienceContentWrapper">
                                <div className="ExperienceItemWrapper" style={{ color: "#6772E5" }} id="experience-0">
                                    <h3 style={{ color: '#6772E5' }} className="ma-experience">
                                        Marketing &amp; Admission</h3>
                                    <img alt="row.title" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/shapes/CRM.webp" />
                                    <h2>Maximize Revenue &amp; Increase Enrolment by 33%</h2>
                                    <p>Simplify enrolment with our powerful student management software! Increase your reach quick and easy. Join us today and watch your enrolments soar!</p>
                                    <a href="https://setup.classe365.com" title="Try it Free" target="_blank">Try it Free
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></a>
                                    <div className="lottie-wrapper">
                                        <video preload="metadata" className="lazy" src="/assets/images/experience/data02.mp4" poster="/assets/images/hero-img.webp" height={0} width={0} autoPlay loop muted playsInline>
                                        </video>
                                    </div>
                                </div>
                                <div className="ExperienceItemWrapper" color="#A389F4" id="experience-1">
                                    <h3 style={{ color: '#A389F4' }} className="slm-experience">Student Learning management</h3>
                                    <img alt="row.title" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/shapes/SIS.webp" />
                                    <h2>Learning management made simple with our education ERP system</h2><p>Break data silos and benefit from comprehensive organizational analytics. Unlock a wealth of insights in no time with our user-friendly student management system. Ready to take the first step? Join us today!</p>
                                    <a href="https://setup.classe365.com" title="Try it Free" target="_blank">Try it Free <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></a>
                                    <div className="lottie-wrapper"><video preload="metadata" className="lazy" src="/assets/images/experience/data01.mp4" poster="/assets/images/hero-img.webp" height="0" width="0" autoPlay loop muted playsInline></video>
                                    </div>
                                </div>
                                <div className="ExperienceItemWrapper" color="#4ED163" id="experience-2">
                                    <h3 style={{ color: '#4ED163' }} className="ga-experience">Graduation &amp; Alumni</h3>
                                    <img alt="row.title" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/shapes/Alumni.webp" />
                                    <h2>Engaging Alumni Community made Easy</h2><p>Create a thriving community with our smart solutions! We offer fundraising, career placement and reselling opportunities. Join to start building a community!</p><a href="https://setup.classe365.com" title="Try it Free" target="_blank">Try it Free
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></a>
                                    <div className="lottie-wrapper"><video preload="metadata" className="lazy" src="/assets/images/experience/data03.mp4" poster="/assets/images/hero-img.webp" height={0} width={0} autoPlay loop muted playsInline></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SolutionsWrapper">
                        <div className="SolutionTitleWrapper" style={{ fontWeight: 600, lineHeight: "1" }}>
                            <h5>Great solutions for everyone</h5>
                            <h2>Smart Solutions For Learning Management Teams</h2>
                        </div>
                        <div className="SolutionContentWrapper" id="image-wrapper1">
                            <div className="SolutionImageGroup">
                                <div className="SolutionImageGroup">
                                    <div>
                                        <img id="image-wrapper1" src={selectedImage} alt="Solution" loading="lazy" width="814" height="622" decoding="async" data-nimg="1" style={{ color: 'transparent' }} />
                                        {/* <img src="/assets/images/solutions/3.webp" alt="" title="" loading="lazy" width="814" height="622" decoding="async" data-nimg="1" style={{ color: 'transparent' }} /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="SolutionContainer">
                                <div className="list">
                                    {solutions.map((solution, index) => (
                                        <div key={index} className={`SolutionCardWrapper ${activeIndex === index ? "active" : ""}`} onClick={() => handleImageChange(index, solution.image)}>
                                            <h3>{solution.title}</h3>
                                            <div>
                                                <span>{solution.description}</span>
                                                <a href="https://setup.classe365.com" title="Start Free 14-days trial" target="_blank" rel="noopener noreferrer">
                                                    Start Free 14-days trial
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    {/* <div className=" SolutionCardWrapper">
                                        <h3>IT Leaders</h3>
                                        <div>
                                            <span>Simplify your integrations with our open APIs! Sign into Google Workspace or Office365 for even more flexibility.</span>
                                            <a href="https://setup.classe365.com" title="Start Free 14-days trial" target="_blank">Start Free 14-days trial
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
                                            </a>
                                        </div>
                                    </div>  */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="FeaturesWrapper">
                        <div className="FeaturesInfoWrapper">
                            <div className="FeaturesDescription">
                                <h2>Feathers in our cap
                                    <img src="/assets/images/clap.webp" alt="hand-clap" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" style={{ color: 'transparent' }} /></h2><p>Most awarded EdTech company of 2021/22, including being part of Top 65 fastest growing companies of 2021 in APAC</p>
                            </div>
                        </div>
                        <div className="FeaturesContentWrapper">
                            <div className="swiper swiper-initialized swiper-horizontal mySwiper swiper-backface-hidden">
                                <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(-1048px, 0px, 0px)', transitionDelay: '0ms' }}>
                                    <div className="swiper-slide swiper-slide-next swiper-slide-prev" data-swiper-slide-index="1" style={{ width: '1024px', marginRight: '24px' }}>
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="EdTech Winner Award For Sudent Information system by EdTech Digest" title="Student Information System Winner" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/1-old.webp" />
                                            <div>
                                                <h5>The Edtech Awards: Cool Tool Winner</h5><p>Student Information System</p>
                                            </div>
                                        </div>
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="Australia's Fastest Growing Companies" title="Australia's Fastest Growing Companies" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/2-old.webp" />
                                            <div>
                                                <h5>Statista Australia’s Fastest Growing Company</h5><p>Listed 2 years in a row</p>
                                            </div>
                                        </div>
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="FT Top 500 fastest growing company" title="FT Top 500 fastest growing company" loading="lazy" width={0} height={0} decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/3-old.webp" />
                                            <div>
                                                <h5>FT Top 500 fastest growing company</h5><p>Listed 2 years in a row.</p></div>
                                        </div><div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="Get App's Corporate Leader 2020 For School Administration Software" title="Get App's Corporate Leader 2020 For School Administration Software" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/4-old.webp" />
                                            <div>
                                                <h5>Category Leaders : GetApp</h5><p>School Administration Software</p>
                                            </div>
                                        </div>
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS"><img alt="Enrollment &amp; Admission Solution Award" title="Winner Award by EdTech Digest of Enrollment &amp; Admission" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/5-old.webp" />
                                            <div>
                                                <h5>Enrolment &amp; Admission Solution: Winner</h5>
                                                <p>Edtech Awards 2021 by Edtech Digest</p>
                                            </div>
                                        </div>
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS"><img alt="School Administration" title="School Administration of Classe365" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/6-old.webp" />
                                            <div><h5>Most Popular: Top 20</h5><p>School Administration</p></div></div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-active" style={{ width: '1024px', marginRight: '24px' }} data-swiper-slide-index="0">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="EdTech Award of Cool Tool" title="Cool Tool Winner Award by EdTech Digest" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/1.webp" />
                                            <div>
                                                <h5>Student Information System: Winner</h5><p>Edtech Awards 2023 by Edtech Digest</p>
                                            </div>
                                        </div>
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="The Saas Awards" title="The Saas Awards of 2023" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/2.webp" />
                                            <div><h5>SaaS Awards 2023</h5><p>Finalist in.LMS category</p>
                                            </div>
                                        </div>
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="FT Top 500 fastest growing company - Listed 2 years in a row" title="FT Top 500 fastest growing company - Listed 2 years in a row" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/3.webp" />
                                            <div
                                            ><h5>FT Top 500 - 2022</h5><p>Financial Times Top 500 High Growth Companies</p></div></div>
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="Student Information System Winner of EdTech" title="Winner of student information system by EdTech Digest" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/4.webp" />
                                            <div>
                                                <h5>Student Information System: Winner</h5><p>Edtech Awards 2022 by Edtech Digest</p>
                                            </div>
                                        </div>
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="Education ERP System Service Provider Award" title="Award of Education ERP System Service Provider" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/5.webp" />
                                            <div>
                                                <h5>LMS, SIS &amp; Performance Tracking</h5><p>The Educator 2022 Service Provider Awards</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                                    <span className="swiper-pagination-bullet"></span>
                                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                                </div>
                            </div>
                        </div>
                        <div className="FeaturesSwiper">
                            <div className="swiper swiper-initialized swiper-horizontal swiper-free-mode mySwiper">
                                <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transitionDelay: '0ms' }}>
                                    <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="0">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="EdTech Winner Award For Sudent Information system by EdTech Digest" title="Student Information System Winner" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/1-old.webp" />
                                            <div>
                                                <h5>The Edtech Awards: Cool Tool Winner</h5><p>Student Information System</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="1">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="Australia's Fastest Growing Companies" title="Australia's Fastest Growing Companies" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/2-old.webp" />
                                            <div>
                                                <h5>Statista Australia&apos;s Fastest Growing Company</h5><p>Listed 2 years in a row</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="2">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="FT Top 500 fastest growing company" title="FT Top 500 fastest growing company" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/3-old.webp" />
                                            <div>
                                                <h5>FT Top 500 fastest growing company</h5><p>Listed 2 years in a row.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="3">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="Get App's Corporate Leader 2020 For School Administration Software" title="Get App's Corporate Leader 2020 For School Administration Software" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/4-old.webp" />
                                            <div><h5>Category Leaders : GetApp</h5><p>School Administration Software</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="4">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="Enrollment &amp; Admission Solution Award" title="Winner Award by EdTech Digest of Enrollment &amp; Admission" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/5-old.webp" />
                                            <div>
                                                <h5>Enrolment &amp; Admission Solution: Winner</h5>
                                                <p>Edtech Awards 2021 by Edtech Digest</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="5">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="School Administration" title="School Administration of Classe365" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/6-old.webp" />
                                            <div><h5>Most Popular: Top 20</h5><p>School Administration</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="6">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="EdTech Award of Cool Tool" title="Cool Tool Winner Award by EdTech Digest" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/1.webp" />
                                            <div>
                                                <h5>Student Information System: Winner</h5>
                                                <p>Edtech Awards 2023 by Edtech Digest</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="7">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="The Saas Awards" title="The Saas Awards of 2023" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/2.webp" />
                                            <div>
                                                <h5>SaaS Awards 2023</h5><p>Finalist in.LMS category</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="8">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="FT Top 500 fastest growing company - Listed 2 years in a row" title="FT Top 500 fastest growing company - Listed 2 years in a row" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/3.webp" />
                                            <div>
                                                <h5>FT Top 500 - 2022</h5><p>Financial Times Top 500 High Growth Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="9">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="Student Information System Winner of EdTech" title="Winner of student information system by EdTech Digest" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/4.webp" />
                                            <div>
                                                <h5>Student Information System: Winner</h5>
                                                <p>Edtech Awards 2022 by Edtech Digest</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="10">
                                        <div className="featureCardstyles__FeatureCardWrapper-sc-1pwic5p-0 iyRDGS">
                                            <img alt="Education ERP System Service Provider Award" title="Award of Education ERP System Service Provider" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/features/5.webp" />
                                            <div>
                                                <h5>LMS, SIS &amp; Performance Tracking</h5>
                                                <p>The Educator 2022 Service Provider Awards</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="InstitutionsWrapper">
                        <div className="InstitutionContainer">
                            <div><h6>For all Institutions</h6><h2>All-in-one learning management solution for institutions</h2>
                                <div className="InstitutionListWrapper">
                                    <div className="active InstitutionItemWrapper">
                                        <div>Schools</div>
                                        <p>Boost enrolment, streamline your operations, and improve learning with our school management system.</p></div>
                                    <div className=" InstitutionItemWrapper">
                                        <div>Universities and Colleges</div>
                                        <p>A smart CRM for universities and colleges to manage the entire student life cycle! With Classe365, managing students, faculty, and courses is super easy!</p></div>
                                    <div className=" InstitutionItemWrapper">
                                        <div>Academies</div>
                                        <p>Managing multiple academies is a breeze with Classe365’s student information system! Why wait? Take  advantage of our flexibility and functionality.</p></div>
                                    <div className=" InstitutionItemWrapper">
                                        <div>Corporate Learning</div>
                                        <p>Did you know that corporations can use Classe365 to make learning management a whole lot easier? Organize, track, and report with ease!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="InstitutionImageWrapper" style={{ backgroundImage: "url('/assets/images/institution/1.webp')", backgroundRepeat: "no-repeat" }}>
                            <img alt="School Management System" title="School Management System Software" fetchPriority="high" width="0" height="930" decoding="async" data-nimg="1" className="instImage" style={{ color: 'transparent' }} src="/assets/images/institution/1.webp" />
                        </div>
                    </div>
                    <div className="InsititutionSwiper">
                        <div className="swiper swiper-initialized swiper-horizontal mySwiper">
                            <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transitionDelay: '0ms' }}>
                                <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="0">
                                    <div className="InstitutionSwiperItemWrapper"><h3>Schools</h3>
                                        <p className="institution-desktop">Boost enrolment, streamline your operations, and improve learning with our school management system.</p>
                                        <div className="image-wrapper">
                                            <img alt="All-in-one learning management solution for institutions" loading="lazy" width="303" height="263" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/institution/1.webp" />
                                        </div>
                                        <p className="institution-mobile">Boost enrolment, streamline your operations, and improve learning with our school management system.</p></div></div>

                                <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="1">
                                    <div className="InstitutionSwiperItemWrapper"><h3>Universities and Colleges</h3>
                                        <p className="institution-desktop">A smart CRM for universities and colleges to manage the entire student life cycle! With Classe365, managing students, faculty, and courses is super easy!</p>
                                        <div className="image-wrapper">
                                            <img alt="All-in-one learning management solution for institutions" loading="lazy" width="303" height="263" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/institution/2.webp" />
                                        </div>
                                        <p className="institution-mobile">A smart CRM for universities and colleges to manage the entire student life cycle! With Classe365, managing students, faculty, and courses is super easy!</p>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="2">
                                        <div className="InstitutionSwiperItemWrapper">
                                            <h3>Academies</h3>
                                            <p className="institution-desktop">Managing multiple academies is a breeze with Classe365&apos;s student information system! Why wait? Take  advantage of our flexibility and functionality.</p>
                                            <div className="image-wrapper">
                                                <img alt="All-in-one learning management solution for institutions" loading="lazy" width="303" height="263" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/institution/3.webp" />
                                            </div>
                                            <p className="institution-mobile">Managing multiple academies is a breeze with Classe365&apos;s student information system! Why wait? Take  advantage of our flexibility and functionality.</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-swiper-slide-index="3">
                                        <div className="InstitutionSwiperItemWrapper"><h3>Corporate Learning</h3>
                                            <p className="institution-desktop">Did you know that corporations can use Classe365 to make learning management a whole lot easier? Organize, track, and report with ease!</p>
                                            <div className="image-wrapper">
                                                <img alt="All-in-one learning management solution for institutions" loading="lazy" width="303" height="263" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/institution/4.webp" />
                                            </div>
                                            <p className="institution-mobile">Did you know that corporations can use Classe365 to make learning management a whole lot easier? Organize, track, and report with ease!</p>
                                        </div></div>
                                </div>
                            </div>
                            <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                                <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                            </div>
                        </div>
                    </div>
                    <div className="DiscoverWrapper" style={{ background: 'transparent' }}>
                        <div className="DiscoverContainer">
                            <div>
                                <svg width="58" height="52" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Frame" clipPath="url(#clip0_2491_9200)">
                                        <g id="Vector" filter="url(#filter0_i_2491_9200)">
                                            <path d="M27.6563 17.5112H5.23331C2.67068 17.5112 0.535156 19.6468 0.535156 22.2094V35.2361C0.535156 37.7987 2.67068 39.9342 5.23331 39.9342L3.95199 42.7104C3.52489 43.6714 4.69943 44.6324 5.55364 43.9917L10.7857 39.9342H27.6563C30.2189 39.9342 32.3545 37.7987 32.3545 35.2361V22.2094C32.2477 19.6468 30.2189 17.5112 27.6563 17.5112Z" fill="#4DE7E7"></path></g>
                                        <g id="Vector_2" filter="url(#filter1_i_2491_9200)">
                                            <path d="M18.4716 24.6653H40.8946C43.4572 24.6653 45.5927 26.8008 45.5927 29.3634V42.4969C45.5927 45.0595 43.4572 47.1951 40.8946 47.1951L42.1759 49.9712C42.603 50.9322 41.4285 51.8932 40.5743 51.2526L35.3422 47.1951H18.4716C15.909 47.1951 13.7734 45.0595 13.7734 42.4969V29.3634C13.8802 26.8008 15.909 24.6653 18.4716 24.6653Z" fill="#621FE0"></path></g>
                                        <path id="Vector_3" d="M32.8876 3.73708L34.1689 6.2997C34.1689 6.40648 34.3825 6.62003 34.596 6.62003L37.3722 7.04714C37.9061 7.15391 38.0129 7.6878 37.6925 8.1149L35.6638 10.1436C35.557 10.2504 35.4502 10.464 35.4502 10.6775L35.9841 13.4537C36.0909 13.9876 35.557 14.3079 35.1299 14.0944L32.5673 12.8131C32.3537 12.7063 32.1402 12.7063 32.0334 12.8131L29.4708 14.0944C29.0437 14.3079 28.5098 13.9876 28.6166 13.4537L29.1504 10.6775C29.1504 10.464 29.1504 10.2504 28.9369 10.1436L26.9081 8.1149C26.5878 7.79457 26.8014 7.15391 27.2285 7.04714L30.0046 6.62003C30.2182 6.62003 30.325 6.51326 30.4318 6.2997L31.7131 3.73708C32.0334 3.30997 32.5673 3.30997 32.8876 3.73708Z" stroke="#1E2123" strokeMiterlimit="10"></path>
                                        <path id="Vector_4" d="M48.3681 0.854153L49.6494 3.41678C49.7562 3.63033 49.8629 3.73711 50.0765 3.73711L52.8527 4.16421C53.3866 4.27099 53.4933 4.80487 53.173 5.23198L51.1443 7.26072C51.0375 7.3675 50.9307 7.58105 50.9307 7.79461L51.4646 10.5708C51.5714 11.1047 51.0375 11.425 50.6104 11.2114L48.0477 9.82335C47.8342 9.71658 47.6206 9.71658 47.5139 9.82335L44.9512 11.1047C44.5241 11.3182 43.9902 10.9979 44.097 10.464L44.6309 7.68783C44.6309 7.47428 44.6309 7.26072 44.4174 7.15395L42.3886 5.1252C42.0683 4.80487 42.2818 4.16421 42.7089 4.05744L45.4851 3.63033C45.6987 3.63033 45.8054 3.52356 45.9122 3.31001L47.1935 0.747377C47.5139 0.427049 48.0477 0.427049 48.3681 0.854153Z" stroke="#1E2123" strokeMiterlimit="10"></path>
                                        <path id="Vector_5" d="M51.786 16.0165L53.0674 18.5791C53.1741 18.7927 53.2809 18.8995 53.4945 18.8995L56.2706 19.3266C56.8045 19.4333 56.9113 19.9672 56.591 20.3943L54.5622 22.4231C54.4554 22.4231 54.3487 22.6366 54.4554 22.8502L54.9893 25.6264C55.0961 26.1602 54.5622 26.4806 54.1351 26.267L51.5725 24.9857C51.3589 24.8789 51.1454 24.8789 51.0386 24.9857L48.476 26.267C48.0489 26.4806 47.515 26.1602 47.6218 25.6264L48.1556 22.8502C48.1556 22.6366 48.1557 22.4231 47.9421 22.3163L45.8066 20.2876C45.4862 19.9672 45.6998 19.3266 46.1269 19.2198L48.9031 18.7927C49.1166 18.7927 49.2234 18.6859 49.3302 18.4724L50.6115 15.9097C50.9318 15.5894 51.5725 15.5894 51.786 16.0165Z" stroke="#1E2123" strokeMiterlimit="10">
                                        </path>
                                    </g>
                                    <defs>
                                        <filter id="filter0_i_2491_9200" x="0.535156" y="17.5112" width="31.8193" height="29.6879" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha">
                                            </feColorMatrix>
                                            <feOffset dy="3">
                                            </feOffset>
                                            <feGaussianBlur stdDeviation="1.5">
                                            </feGaussianBlur>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1">
                                            </feComposite>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0">
                                            </feColorMatrix>
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2491_9200">
                                            </feBlend>
                                        </filter>
                                        <filter id="filter1_i_2491_9200" x="13.7734" y="24.6653" width="31.8193" height="29.7947" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix">
                                            </feFlood>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha">
                                            </feColorMatrix><feOffset dy="3"></feOffset><feGaussianBlur stdDeviation="1.5">
                                            </feGaussianBlur>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1">
                                            </feComposite>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0">
                                            </feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow_2491_9200">
                                            </feBlend></filter><clipPath id="clip0_2491_9200"><rect width="57.3388" height="52" fill="white">
                                            </rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h2>
                                    Discover Why Our Customers Love Classe365 - In Their Own Words
                                </h2>
                                <p>Hear what all the buzz is about! Check out what our customers have to say about Classe365 - awarded the best SIS solution by EdTech Awards for 3 consecutive years</p>
                                <div className="CustomNavigator">
                                    <span className="prev">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></span>
                                    <span className="next"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3">
                                        </path>
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="DiscoverSliderWrapper" >
                            <div>
                                <div className="swiper swiper-initialized swiper-horizontal swiper-rtl mySwiper swiper-backface-hidden" dir="rtl">
                                    <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(1200.99px, 0px, 0px)', transitionDelay: '0ms' }}>
                                        <div className="swiper-slide" data-swiper-slide-index="1" style={{ marginLeft: '30px' }}>
                                            <div dir="ltr" className="discoverCardstyles__DiscoverCardWrapper-sc-zal9au-0 cqQYbO discover-card">
                                                <div className="discoverCardstyles__DiscoverContent-sc-zal9au-1 iMriTJ"><h2>“</h2><h4>Good value for money</h4><p>Academic admin staff find the student information system is easy to use.</p></div>
                                                <div className="discoverCardstyles__DiscoverOwner-sc-zal9au-2 mDyRD"><h4>source - Capterra</h4><h5>Alistair S.</h5><p>System Architect</p></div></div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" style={{ marginLeft: '30px' }}>
                                            <div dir="ltr" className="discoverCardstyles__DiscoverCardWrapper-sc-zal9au-0 cqQYbO discover-card">
                                                <div className="discoverCardstyles__DiscoverContent-sc-zal9au-1 iMriTJ"><h2>“</h2><h4>Great software with an excellent answer from all the team</h4><p>Classe365 have all the modules that our school needs with a sample intuitive and nice design. All the software it&apos;s easy to use from our team and from our students.</p></div>
                                                <div className="discoverCardstyles__DiscoverOwner-sc-zal9au-2 mDyRD"><h4>source - Capterra</h4><h5>Joaquim B.</h5><p>CEO</p></div></div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="3" style={{ marginLeft: '30px' }}>
                                            <div dir="ltr" className="discoverCardstyles__DiscoverCardWrapper-sc-zal9au-0 cqQYbO discover-card">
                                                <div className="discoverCardstyles__DiscoverContent-sc-zal9au-1 iMriTJ"><h2>“</h2><h4>Classe365 Review</h4><p>The technical support team is very helpful especially [sensitive content hidden]. We encountered 2 issues recently on email notifications and duplicate student records and they were able to resolve both.</p></div>
                                                <div className="discoverCardstyles__DiscoverOwner-sc-zal9au-2 mDyRD"><h4>source - Capterra</h4><h5>Melanie A.</h5><p>Academic Coordinator</p></div></div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="4" style={{ marginLeft: '30px' }}>
                                            <div dir="ltr" className="discoverCardstyles__DiscoverCardWrapper-sc-zal9au-0 cqQYbO discover-card">
                                                <div className="discoverCardstyles__DiscoverContent-sc-zal9au-1 iMriTJ">
                                                    <h2>“</h2><h4>Excellent product, outstanding support</h4><p>Easy to use, superb support with technical issues/bugs, prompt resolution by development team.</p>
                                                </div>
                                                <div className="discoverCardstyles__DiscoverOwner-sc-zal9au-2 mDyRD"><h4>source - Capterra</h4><h5>Karin P.</h5><p>Partner</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-swiper-slide-index="0" style={{ marginLeft: '30px' }}><div dir="ltr" className="discoverCardstyles__DiscoverCardWrapper-sc-zal9au-0 cqQYbO discover-card">
                                            <div className="discoverCardstyles__DiscoverContent-sc-zal9au-1 iMriTJ"><h2>“</h2><h4>Review from an every day user</h4><p>Student administrative and academic management is streamlined and helps us save time and be more efficient.</p></div>
                                            <div className="discoverCardstyles__DiscoverOwner-sc-zal9au-2 mDyRD"><h4>source - Capterra</h4><h5>Khaled B.</h5><p>Administrative Director</p>
                                            </div>
                                        </div>
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
                    <div className="ResourcesWrapper">
                        <h2>
                            All the News and Resources You Need
                        </h2>
                        <div className="ResourcesGridWrapper">
                            <div className="resourcestyles__ResourceCardWrapper-sc-1ojqpyn-0 kbzKtZ">
                                <div className="resourcestyles__ImageWrapper-sc-1ojqpyn-1 bjQaGo">
                                    <img alt="Simplify Institution Management" title="Simplify Institution Management by Classe365" loading="lazy" width="344" height="159" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/resources/1.webp" /></div>
                                <span style={{ background: '#F25757' }}>PODCAST</span><h2>Discover How Classe365 Can Simplify Institution Management</h2></div>

                            <div className="resourcestyles__ResourceCardWrapper-sc-1ojqpyn-0 kbzKtZ">
                                <div className="resourcestyles__ImageWrapper-sc-1ojqpyn-1 bjQaGo">
                                    <img alt="Eduactional Management blogs" title="Blogs of Educational Management" loading="lazy" width="344" height="159" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/resources/2.webp" /></div>
                                <span style={{ background: '#4ED163' }}>BLOG POST</span>
                                <h2>Explore the World of Education Management with Our Blog</h2>
                            </div>
                            <div className="resourcestyles__ResourceCardWrapper-sc-1ojqpyn-0 kbzKtZ">
                                <div className="resourcestyles__ImageWrapper-sc-1ojqpyn-1 bjQaGo">
                                    <img alt="ROI Calculator" title="ROI Calcular for Education" loading="lazy" width="344" height="159" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/resources/3.webp" /></div>
                                <span style={{ background: '#6772E5' }}>FEATURE</span><h2>Try Our ROI Calculator to See Classe365&apos;s Profit-Generating Potential!</h2>
                            </div>
                        </div>
                        <a title="Free Resources" className="SeeMore" href="/free-resources">
                            <span>See more resources</span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="FooterWrapper">
                    <div className="bookstyles__BookSectionWrapper-sc-k85x0-0 edjGCS">
                        <div className="bookstyles__BookSectionContainer-sc-k85x0-1 bnlrQu">
                            <h2>
                                Start with
                            </h2>
                            <h2 className="plan-amount">$100/month</h2>
                            <p>Customized Solutions for Your Institution&apos;s Needs - Pay Only for What You Use</p>
                            <div className="bookstyles__BookButtoWrapper-sc-k85x0-3 dtwvFQ">
                                <button className="ButtonWrapper whiteBtn">
                                    <span>Try For Free</span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="bookstyles__BookImageWrapper-sc-k85x0-2 jshYDK">
                            <img src="assets/_next/static/media/book.8884d95c.webp" alt="Education ERP Software" title="Education ERP Software System" loading="lazy" width="1000" height="624" decoding="async" data-nimg="1" style={{ color: 'transparent' }} />
                        </div>
                    </div>
                    <div className="navigationstyles__NavigationWrapper-sc-1isemhl-0 dMpBpo">
                        <div className="navigationstyles__NavigationContainer-sc-1isemhl-1 eMOoNE">
                            <img src="/assets/images/logo-white.webp" alt="Classe365 White Logo" title="White Logo of Classe365" width="160" height="46" className="navigationstyles__FooterLogo-sc-1isemhl-2 jhrpUI" />
                            <div className="navigationstyles__NavigationGrid-sc-1isemhl-3 cHukwR">
                                <div className="navigationstyles__NavigationListWrapper-sc-1isemhl-4 hWWiId">
                                    <div className="navigationstyles__NavigationListContent-sc-1isemhl-5 jZElrE"><h2>FEATURES</h2>
                                        <a title="Pre-admissions and enrolment" href="/pre-admissions-enrolment">Pre-admissions and enrolment</a>
                                        <a title="Customer Relationship Management" href="/customer-relationship-management">Customer Relationship Management</a>
                                        <a title="Student Information System" href="/student-information-system">Student Information System</a>
                                        <a title="Learning Management System" href="/learning-management-system">Learning Management System</a>
                                        <a title="Fees &amp; Invoicing" href="/fees-donation-module">Fees &amp; Invoicing</a>
                                        <a title="Finance &amp; Accounting" href="/finance-accounting">Finance &amp; Accounting</a>
                                        <a title="E-Commerce Module" href="/e-commerce-module">E-Commerce Module</a>
                                        <a title="Fund Raising" href="/fund-raising-module">Fund Raising</a>
                                        <a title="Degree Audit" href="/degree-audit-module">Degree Audit</a>
                                        <a title="Alumni" href="/alumni-module">Alumni</a>
                                        <a title="White Label Module" href="/white-label-module">White Label Module</a>
                                    </div>
                                </div>
                                <div className="navigationstyles__NavigationListWrapper-sc-1isemhl-4 hWWiId">
                                    <div className="navigationstyles__NavigationListContent-sc-1isemhl-5 jZElrE"><h2>COMPANY</h2>
                                        <a title="Partners" href="/partners">Partners</a><a title="About us" href="/about-classe365">About us</a>
                                        <a title="Community Forum" href="https://community.365.software/">Community Forum</a>
                                        <a title="Pricing" href="/pricing">Pricing</a><a title="Careers" target="_blank" href="https://classe365.hire.trakstar.com">Careers</a>
                                    </div>
                                    <div className="navigationstyles__NavigationListContent-sc-1isemhl-5 jZElrE">
                                        <div className="navigationstyles__NavigationListContent-sc-1isemhl-5 jZElrE">
                                            <h2>COMPANY</h2>
                                            <a title="Partners" href="/partners">Partners</a><a title="About us" href="/about-classe365">About us</a>
                                            <a title="Community Forum" href="https://community.365.software/">Community Forum</a>
                                            <a title="Pricing" href="/pricing">Pricing</a><a title="Careers" target="_blank" href="https://classe365.hire.trakstar.com">Careers</a>
                                        </div>
                                        <div className="navigationstyles__NavigationListContent-sc-1isemhl-5 jZElrE">
                                            <h2>LEGAL</h2>
                                            <a title="Terms &amp; Conditions" href="/terms-and-conditions">Terms &amp; Conditions</a>
                                            <a title="Privacy Policy" href="/classe365-privacy-policy">Privacy Policy</a>
                                            <a title="Children&apos;s Privacy Policy" href="/classe365-childrens-privacy-policy">Children&apos;s Privacy Policy</a>
                                            <a title="Classe365 Direct Notice to Parents" href="/direct-notice-to-parents">Classe365 Direct Notice to Parents</a>
                                            <a title="Classe365 Compliance with FERPA" href="/classe365-compliance-with-ferpa">Classe365 Compliance with FERPA</a>
                                            <a title="Classe365 Personal Data Processing Agreement (DPA)" href="/classe365-personal-data-processing-agreement-dpa">Classe365 Personal Data Processing Agreement (DPA)</a>
                                            <a title="Cookie Policy" href="/cookie-policy">Cookie Policy</a>
                                            <a title="International Data Transfers" href="/classe365-international-data-transfers">International Data Transfers</a>
                                            <a title="Classe365 Web Accessibility Statement" href="/accessibility-statement-for-classe365">Classe365 Web Accessibility Statement</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="navigationstyles__CopyrightWrapper-sc-1isemhl-7 iJlRSS">
                                    <p>Copyright © Core-lem | All Rights Reserved.</p>
                                    <div className="navigationstyles__SocialsNavWrapper-sc-1isemhl-8 jFYXcj">
                                        <div>
                                            <a title="Terms &amp; Conditions" target="_blank" href="/terms-and-conditions">Terms &amp; Conditions</a>
                                            <a title="Privacy Policy" target="_blank" href="/classe365-privacy-policy">Privacy Policy</a>
                                        </div>
                                        <div>
                                            <a title="Instagram" target="_blank" href="https://www.instagram.com/classe3six5/" className="social-link"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>
                                            <a title="Facebook" target="_blank" href="https://www.facebook.com/classe365" className="social-link"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
                                            <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/company/classe365/" className="social-link"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
                                            <a title="Twitter" target="_blank" href="https://twitter.com/classe365" className="social-link"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
