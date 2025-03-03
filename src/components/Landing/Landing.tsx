"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import styles from './FeatureSlider.module.css'; // Import the CSS module
import styles_hd from "./styles.module.css";
import "./348c6be32cb97baa.css";
// import "./aaa.css";

export default function BasicTableOne() {
    const router = useRouter();
    const goToMainPage = () => {
        router.push("/home"); // Navigate to the 'lead' page
    };

    const goToSignInPage = () => {
        router.push("/signin"); // Navigate to the 'lead' page
    };

    const [isOpen, setIsOpen] = useState(false);

   
    //Solutions
    const solutions = [
        { title: "Marketing", description: "Want to boost enrolment? Use our higher education CRM, e-commerce & agent modules! Benefit from one-click enrolment, student placements & more.", image: "1.webp" },
        { title: "Registrars", description: "Managing admissions just got easy! Admit and monitor students using our admission CRM & task module.", image: "2.webp" },
        { title: "Administrators", description: "Seamlessly manage student data with our student database management system. Track progress, manage alumni, and build the learning journey.", image: "3.webp" },
        { title: "Teachers", description: "Use our Learning Management System & analytics module for immersive classroom experiences. Observe behavioural trends and improve student success.", image: "4.webp" },
        { title: "Business Leaders", description: "Looking for an easier way to manage financial transactions? Scholarships, donations and online payments managed like never before.", image: "5.webp" },
        { title: "CFOs", description: "Take control of your finances with Classe365. Our ROI calculators can also help you save up to 33%.", image: "6.webp" },
        { title: "IT Leaders", description: "Simplify your integrations with our open APIs! Sign into Google Workspace or Office365 for even more flexibility.", image: "7.webp" }
    ];


    const [selectedImage, setSelectedImage] = useState<string>("/assets/images/solutions/1.webp");
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Track active card index

    const handleImageChange = (index: number, imageName: string) => {
        setSelectedImage(`/assets/images/solutions/${imageName}`);
        setActiveIndex(index);
    };


    // Feature Data
    const features = [
        {
            title: "The Edtech Awards: Cool Tool Winner",
            subtitle: "Student Information System",
            image: "/assets/images/features/1-old.webp",
            alt: "EdTech Winner Award For Student Information system by EdTech Digest",
        },
        {
            title: "Statista Australia’s Fastest Growing Company",
            subtitle: "Listed 2 years in a row",
            image: "/assets/images/features/2-old.webp",
            alt: "Australia's Fastest Growing Companies",
        },
        {
            title: "FT Top 500 fastest growing company",
            subtitle: "Listed 2 years in a row.",
            image: "/assets/images/features/3-old.webp",
            alt: "FT Top 500 fastest growing company",
        },
        {
            title: "Category Leaders: GetApp",
            subtitle: "School Administration Software",
            image: "/assets/images/features/4-old.webp",
            alt: "Get App's Corporate Leader 2020 For School Administration Software",
        },
        {
            title: "Enrolment & Admission Solution: Winner",
            subtitle: "Edtech Awards 2021 by Edtech Digest",
            image: "/assets/images/features/5-old.webp",
            alt: "Enrollment & Admission Solution Award",
        },
        {
            title: "Most Popular: Top 20",
            subtitle: "School Administration",
            image: "/assets/images/features/6-old.webp",
            alt: "School Administration",
        },
        {
            title: "Student Information System: Winner",
            subtitle: "Edtech Awards 2023 by Edtech Digest",
            image: "/assets/images/features/1.webp",
            alt: "EdTech Award of Cool Tool",
        },
        {
            title: "SaaS Awards 2023",
            subtitle: "Finalist in LMS category",
            image: "/assets/images/features/2.webp",
            alt: "The Saas Awards",
        },
        {
            title: "FT Top 500 - 2022",
            subtitle: "Financial Times Top 500 High Growth Companies",
            image: "/assets/images/features/3.webp",
            alt: "FT Top 500 fastest growing company - Listed 2 years in a row",
        },
        {
            title: "Student Information System: Winner",
            subtitle: "Edtech Awards 2022 by Edtech Digest",
            image: "/assets/images/features/4.webp",
            alt: "Student Information System Winner of EdTech",
        },
        {
            title: "LMS, SIS & Performance Tracking",
            subtitle: "The Educator 2022 Service Provider Awards",
            image: "/assets/images/features/5.webp",
            alt: "Education ERP System Service Provider Award",
        },
    ];


    //institution
    const institution = [
        { title: "Schools", descrip: "Boost enrolment, streamline your operations, and improve learning with our school management system.", image: "1.webp" },
        { title: "Universities and Colleges", descrip: "A smart CRM for universities and colleges to manage the entire student life cycle! With Classe365, managing students, faculty, and courses is super easy!", image: "2.webp" },
        { title: "Academies", descrip: "Managing multiple academies is a breeze with Classe365’s student information system! Why wait? Take advantage of our flexibility and functionality.", image: "3.webp" },
        { title: "Corporate Learning", descrip: "Did you know that corporations can use Classe365 to make learning management a whole lot easier? Organize, track, and report with ease!", image: "4.webp" },

    ];


    const [selectedInsImage, setSelectedInsImage] = useState<string>("/assets/images/institution/1.webp");
    const [activeInsIndex, setActiveInsIndex] = useState<number | null>(0); // Track active card index

    const handleInsImageChange = (index: number, imageName: string) => {
        setSelectedInsImage(`/assets/images/institution/${imageName}`);
        setActiveInsIndex(index);
    };

    const [scrollPosition, setScrollPosition] = useState({
      scrollX: 0,
      scrollY: 0,
    });
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition({
          scrollX: window.scrollX,
          scrollY: window.scrollY,
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Initial scroll position on mount
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array ensures this runs only once on mount

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
                                <img src="/assets/images/core-lem-logo.svg" alt="logo" fetchPriority="high" width={40} height={25} decoding="async" data-nimg="1" className="top-header-img" style={{ color: 'transparent' }} /></a>
                            <a title="LearnEnglishMaths" className="hiree365-logo" href="http://www.learnenglishmaths.com/" target="_blank">
                                <img src="/assets/images/lem-logo.svg" alt="logo" loading="lazy" width="40" height={26} decoding="async" data-nimg="1" className="top-header-img" style={{ color: 'transparent' }} /></a>
                        </div>
                        <div className="right-container d-flex align-items-center gap-2"></div>
                    </div>
                </div>
                <div className="HeaderView">
                    <div className="HeaderWrapper">
                        <div className="HeaderNavWrapper">
                            <div className="AppLogoWrapper">
                                <img src="/assets/images/core-lem-logo.svg" width={85} height={48} alt="Product suite arrow right" fetchPriority="high" decoding="async" data-nimg="1" className="top-header-img arrow-right" style={{ color: 'transparent' }} />
                            </div>
                            <div className="HeaderNavContainer">
                                <div className="NavItemWrapper" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                                    <div className="NavLabel">
                                        <span>Solutions</span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="11" width="11" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>
                                    </div>
                                    <div className={`${styles_hd.MegaMenuWrapper} ${isOpen ? styles_hd.open : ""}`}>
                                        <div className="SolutionsMegaMenuWrapper">
                                            <div className="SolutionsMegaMenuGridItem">
                                                <h1>Teams</h1>
                                                <div className=" MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_4581_62)"><path fillRule="evenodd" clipRule="evenodd" d="M16.5329 0.825813C16.6529 0.581115 16.9212 0.454052 17.1941 0.515229C17.46 0.578761 17.6471 0.815229 17.6471 1.08817V6.44229C18.9882 6.71523 20 7.90347 20 9.32347C20 10.7435 18.9882 11.9329 17.6471 12.2058V17.5588C17.6471 17.8317 17.46 18.0693 17.1941 18.1317C17.1497 18.1419 17.1044 18.1471 17.0588 18.147C16.8388 18.147 16.6341 18.0246 16.5329 17.8223C14.3671 13.4917 10.0435 13.4411 10 13.4411H5.88235V19.3235H6.79647C6.67294 18.3846 6.61412 16.7505 7.45765 15.6705C8.00353 14.9717 8.80824 14.6176 9.85294 14.6176V15.7941C9.18117 15.7941 8.70117 15.9905 8.38589 16.3929C7.66942 17.3082 7.91647 19.1411 8.07058 19.7705C8.11413 19.9458 8.07413 20.1317 7.96353 20.2741C7.85176 20.4164 7.68 20.4999 7.5 20.4999H5.29411C4.96942 20.4999 4.70589 20.2376 4.70589 19.9117V13.4411H4.11766C2.49529 13.4411 1.17647 12.1223 1.17647 10.4999V9.91171H0.58824C0.263531 9.9117 0 9.64933 0 9.32346C0 8.99875 0.263531 8.73522 0.588229 8.73522H1.17647V8.14699C1.17647 6.5258 2.49529 5.2058 4.11765 5.2058H9.99882C10.1753 5.20464 14.3788 5.13287 16.5329 0.825813ZM16.4706 3.10111C14.4424 5.62581 11.76 6.20699 10.5882 6.34111V12.307C11.76 12.4411 14.4424 13.0211 16.4706 15.547V3.10111ZM9.41177 6.38229H4.11765C3.14471 6.38229 2.35294 7.17406 2.35294 8.14699V10.4999C2.35294 11.4729 3.14471 12.2646 4.11765 12.2646H9.41177V6.38229ZM17.6471 7.66817V10.9799C18.3306 10.7364 18.8235 10.0893 18.8235 9.32347C18.8235 8.55758 18.3306 7.9117 17.6471 7.66817Z" fill="#3B3F42"></path></g>
                                                            <defs>
                                                                <clipPath id="clip0_4581_62"><rect width="20" height="20" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>
                                                    </div>
                                                    <div className="item-container"><h3>Marketing Teams</h3><p>CRM software to boost your marketing</p></div></div>
                                                <div className=" MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3333 8.00005H14.8333C15.7668 8.00005 16.2335 8.00005 16.59 8.18171C16.9036 8.34149 17.1586 8.59646 17.3183 8.91008C17.5 9.26658 17.5 9.73333 17.5 10.6667V15.3334C17.5 16.2668 17.5 16.7335 17.3183 17.09C17.1586 17.4037 16.9036 17.6586 16.59 17.8184C16.2335 18.0001 15.7668 18.0001 14.8333 18.0001H5.1775C4.24408 18.0001 3.77742 18.0001 3.42083 17.8184C3.10725 17.6586 2.85233 17.4037 2.6925 17.09C2.51083 16.7335 2.51083 16.2668 2.51083 15.3334V10.5001M15 13.0001H14.9917M11.6667 13H11.6583M10.4009 11.2455L9.30525 11.0289C8.714 10.9121 8.41842 10.8537 8.14275 10.7461C7.89808 10.6506 7.66558 10.5265 7.45 10.3763C7.20717 10.2072 6.99417 9.99417 6.568 9.568L2.27767 5.27768C1.70492 4.70497 1.70492 3.77642 2.27767 3.2037C2.85033 2.63099 3.77892 2.63099 4.35158 3.20371L8.71533 7.5674C9.11458 7.9667 9.31425 8.16636 9.4755 8.39267C9.61867 8.5936 9.73908 8.80978 9.8345 9.03725C9.942 9.2935 10.0066 9.56842 10.1358 10.1181L10.4009 11.2455Z" stroke="#3B3F42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    </div>
                                                    <div className="item-container"><h3>Registrars</h3><p>From admissions to finance</p>
                                                    </div>
                                                </div>
                                                <div className=" MegaMenuItemWrapper">
                                                    <div className="icon-wrapper"><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3334 11.5C14.3334 13.341 12.841 14.8333 11 14.8333C9.15902 14.8333 7.66669 13.341 7.66669 11.5C7.66669 9.65896 9.15902 8.16663 11 8.16663C12.841 8.16663 14.3334 9.65896 14.3334 11.5Z" stroke="#3B3F42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.0051 1.56672C11.7764 1.5 11.5177 1.5 11 1.5C10.4823 1.5 10.2236 1.5 9.99489 1.56672C9.66022 1.66438 9.36456 1.86453 9.14956 2.13901C9.00267 2.32653 8.90656 2.56684 8.71435 3.04747C8.43799 3.73836 7.67103 4.09412 6.96508 3.85889L6.33088 3.64757C5.881 3.49761 5.65606 3.42262 5.43551 3.40978C5.11154 3.3909 4.78911 3.46702 4.50779 3.62878C4.31628 3.7389 4.14862 3.90657 3.8133 4.24189C3.45691 4.59828 3.27871 4.77647 3.16551 4.97988C2.99919 5.27871 2.92883 5.62149 2.96399 5.96168C2.98791 6.19322 3.0815 6.42721 3.26869 6.89518C3.56183 7.62803 3.27982 8.46531 2.60302 8.87148L2.29468 9.05652C1.82257 9.33978 1.58651 9.48144 1.41504 9.67644C1.26331 9.849 1.1489 10.0511 1.07899 10.27C1 10.5173 1 10.7953 1 11.3514C1 12.0099 1 12.339 1.10513 12.6209C1.19803 12.8699 1.34913 13.093 1.54582 13.2718C1.76842 13.474 2.07106 13.5951 2.67629 13.8372C3.29482 14.0846 3.61329 14.7712 3.40262 15.4032L3.16357 16.1204C2.99799 16.6171 2.91519 16.8656 2.90767 17.1096C2.89861 17.403 2.96721 17.6936 3.10652 17.9519C3.22239 18.1669 3.40753 18.352 3.77778 18.7222C4.14803 19.0924 4.33317 19.2776 4.54806 19.3934C4.80644 19.5328 5.09703 19.6014 5.39044 19.5923C5.63447 19.5848 5.88284 19.502 6.3796 19.3364L6.96513 19.1412C7.67103 18.906 8.438 19.2617 8.71435 19.9526C8.90656 20.4331 9.00267 20.6734 9.14956 20.861C9.36456 21.1354 9.66022 21.3357 9.99489 21.4333C10.2236 21.5 10.4823 21.5 11 21.5C11.5177 21.5 11.7764 21.5 12.0051 21.4333C12.3398 21.3357 12.6354 21.1354 12.8504 20.861C12.9973 20.6734 13.0934 20.4331 13.2857 19.9526C13.562 19.2617 14.329 18.906 15.0348 19.1414L15.6199 19.3366C16.1167 19.5021 16.3651 19.5849 16.6091 19.5924C16.9026 19.6014 17.1931 19.5329 17.4514 19.3936C17.6663 19.2777 17.8516 19.0926 18.2218 18.7223C18.592 18.3521 18.7771 18.1669 18.893 17.952C19.0323 17.6937 19.1009 17.403 19.0919 17.1097C19.0843 16.8657 19.0016 16.6172 18.836 16.1204L18.5971 15.4038C18.3863 14.7716 18.7049 14.0847 19.3237 13.8372C19.9289 13.5951 20.2316 13.474 20.4542 13.2718C20.6509 13.093 20.802 12.8699 20.8949 12.6209C21 12.339 21 12.0099 21 11.3514C21 10.7953 21 10.5173 20.921 10.27C20.8511 10.0511 20.7367 9.849 20.585 9.67644C20.4134 9.48144 20.1774 9.33978 19.7053 9.05652L19.3966 8.87129C18.7198 8.46519 18.4377 7.62793 18.7309 6.89509C18.918 6.42714 19.0117 6.19314 19.0356 5.96159C19.0707 5.6214 19.0003 5.27863 18.834 4.97979C18.7208 4.77639 18.5427 4.59819 18.1862 4.2418C17.8509 3.90649 17.6832 3.73882 17.4918 3.6287C17.2104 3.46693 16.888 3.39082 16.564 3.40969C16.3434 3.42254 16.1186 3.49752 15.6687 3.64748L15.0349 3.85874C14.329 4.09404 13.562 3.73833 13.2857 3.04747C13.0934 2.56684 12.9973 2.32653 12.8504 2.13901C12.6354 1.86453 12.3398 1.66438 12.0051 1.56672Z" stroke="#3B3F42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Administrators</h3>
                                                        <p>Effective student performance tracking</p>
                                                    </div>
                                                </div>
                                                <div className=" MegaMenuItemWrapper">
                                                    <div className="icon-wrapper"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_4581_55)"><path d="M10.6224 1.12242V0.5H9.37758V1.12242H0.663757V2.67844H1.59739V12.4289C1.59739 13.4033 2.38723 14.1931 3.36161 14.1931H16.6384C17.6128 14.1931 18.4026 13.4033 18.4026 12.4289V2.67844H19.3363V1.12242H10.6224ZM16.6384 12.9483H3.36161C3.07532 12.9483 2.84223 12.7152 2.84223 12.4289V2.67844H17.1578V12.4289C17.1578 12.7152 16.9247 12.9483 16.6384 12.9483Z" fill="#3B3F42"></path><path d="M9.37757 14.8156L6.81433 20.4173H8.05917L9.37757 17.5362V20.4173H10.6224V17.5623L11.9414 20.473L13.1856 20.5L10.6224 14.8156H9.37757Z" fill="#3B3F42"></path></g><defs><clipPath id="clip0_4581_55"><rect width="20" height="20" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Teachers</h3>
                                                        <p>Make learning fun and interactive</p></div>
                                                </div>
                                                <div className=" MegaMenuItemWrapper">
                                                    <div className="icon-wrapper"><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 16.5V17V17.5" stroke="#3B3F42" strokeWidth="1.53125" strokeLinecap="round"></path><path d="M11 5.5V6V6.5" stroke="#3B3F42" strokeWidth="1.53125" strokeLinecap="round"></path><path d="M14 9C14 7.61929 12.6569 6.5 11 6.5C9.3431 6.5 8 7.61929 8 9C8 10.3807 9.3431 11.5 11 11.5C12.6569 11.5 14 12.6193 14 14C14 15.3807 12.6569 16.5 11 16.5C9.3431 16.5 8 15.3807 8 14" stroke="#3B3F42" strokeWidth="1.53125" strokeLinecap="round"></path><path d="M6 2.83782C7.47087 1.98697 9.1786 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 9.6786 1.48697 7.97087 2.33782 6.5" stroke="#3B3F42" strokeWidth="1.53125" strokeLinecap="round"></path></svg></div>
                                                    <div className="item-container">
                                                        <h3>CFOs</h3>
                                                        <p>Online financial management</p>
                                                    </div>
                                                </div>
                                                <div className=" MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.25 0.5C13.6297 0.5 13.9435 0.782154 13.9932 1.14823L14 1.25L14.0005 3.57512C15.4697 3.87357 16.6269 5.03092 16.925 6.50018L19.25 6.5C19.6642 6.5 20 6.83579 20 7.25C20 7.6297 19.7178 7.94349 19.3518 7.99315L19.25 8H17V9.75H19.25C19.6297 9.75 19.9435 10.0322 19.9932 10.3982L20 10.5C20 10.8797 19.7178 11.1935 19.3518 11.2432L19.25 11.25H17V13H19.25C19.6297 13 19.9435 13.2822 19.9932 13.6482L20 13.75C20 14.1297 19.7178 14.4435 19.3518 14.4932L19.25 14.5L16.9248 14.5008C16.6263 15.9696 15.4694 17.1265 14.0005 17.4249L14 19.75C14 20.1642 13.6642 20.5 13.25 20.5C12.8703 20.5 12.5565 20.2178 12.5068 19.8518L12.5 19.75V17.499H10.749L10.75 19.75C10.75 20.1297 10.4678 20.4435 10.1018 20.4932L10 20.5C9.6203 20.5 9.30651 20.2178 9.25685 19.8518L9.25 19.75L9.249 17.499H7.5V19.75C7.5 20.1297 7.21785 20.4435 6.85177 20.4932L6.75 20.5C6.3703 20.5 6.05651 20.2178 6.00685 19.8518L6 19.75L6.00046 17.4251C4.53088 17.127 3.37329 15.9695 3.07501 14.5L0.75 14.5C0.335786 14.5 0 14.1642 0 13.75C0 13.3703 0.282154 13.0565 0.648229 13.0068L0.75 13L3 12.999V11.249L0.75 11.25C0.370304 11.25 0.0565091 10.9678 0.00684667 10.6018L0 10.5C0 10.1203 0.282154 9.80651 0.648229 9.75685L0.75 9.75L3 9.749V7.999L0.75 8C0.370304 8 0.0565091 7.71785 0.00684667 7.35177L0 7.25C0 6.8703 0.282154 6.55651 0.648229 6.50685L0.75 6.5L3.07521 6.49904C3.37381 5.03 4.53121 3.87297 6.00046 3.57492L6 1.25C6 0.835786 6.33579 0.5 6.75 0.5C7.1297 0.5 7.44349 0.782154 7.49315 1.14823L7.5 1.25V3.499H9.249L9.25 1.25C9.25 0.870304 9.53215 0.556509 9.89823 0.506847L10 0.5C10.3797 0.5 10.6935 0.782154 10.7432 1.14823L10.75 1.25L10.749 3.499H12.5V1.25C12.5 0.904822 12.7332 0.614107 13.0506 0.526791L13.1482 0.506847L13.25 0.5ZM13.25 5H6.75C5.50736 5 4.5 6.00736 4.5 7.25V13.75C4.5 14.9926 5.50736 16 6.75 16H13.25C14.4926 16 15.5 14.9926 15.5 13.75V7.25C15.5 6.00736 14.4926 5 13.25 5ZM10.0049 7.50493C11.6618 7.50493 13.0049 8.84807 13.0049 10.5049C13.0049 12.1618 11.6618 13.5049 10.0049 13.5049C8.34807 13.5049 7.00493 12.1618 7.00493 10.5049C7.00493 8.84807 8.34807 7.50493 10.0049 7.50493ZM10.0049 9.00493C9.1765 9.00493 8.50493 9.6765 8.50493 10.5049C8.50493 11.3334 9.1765 12.0049 10.0049 12.0049C10.8334 12.0049 11.5049 11.3334 11.5049 10.5049C11.5049 9.6765 10.8334 9.00493 10.0049 9.00493Z" fill="#3B3F42"></path>
                                                        </svg></div><div className="item-container"><h3>CTOs</h3><p>CTO-focused platform</p>
                                                    </div>
                                                </div>
                                                <div className=" MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.2222 18.2813H2.77778C1.85889 18.2813 1.11111 17.5335 1.11111 16.6146V10.5035H6.66667V12.7257H13.3333V10.5035H18.8889V16.6146C18.8889 17.5335 18.1411 18.2813 17.2222 18.2813ZM7.77778 11.6146H12.2222V9.3924H7.77778V11.6146ZM2.77778 6.05907H17.2222C18.1411 6.05907 18.8889 6.80684 18.8889 7.72574V9.3924H13.3333V8.28129H6.66667V9.3924H1.11111V7.72574C1.11111 6.80684 1.85889 6.05907 2.77778 6.05907ZM7.77778 3.28129C7.77778 2.97462 8.02667 2.72574 8.33333 2.72574H11.6667C11.9733 2.72574 12.2222 2.97462 12.2222 3.28129V4.94796H7.77778V3.28129ZM17.2222 4.94796H13.3333V3.28129C13.3333 2.36241 12.5856 1.61462 11.6667 1.61462H8.33333C7.41445 1.61462 6.66667 2.36241 6.66667 3.28129V4.94796H2.77778C1.24667 4.94796 0 6.19462 0 7.72574V16.6146C0 18.1457 1.24667 19.3924 2.77778 19.3924H17.2222C18.7533 19.3924 20 18.1457 20 16.6146V7.72574C20 6.19462 18.7533 4.94796 17.2222 4.94796Z" fill="#3B3F42"></path></svg>
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Business Leaders</h3><p>Performance-optimizing tech</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="SolutionsMegaMenuGridItem">
                                                <h1>Organizations</h1>
                                                <div className=" MegaMenuItemWrapper">
                                                    <div className="icon-wrapper"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4710_1303)"><path d="M7.74001 10.8891C5.80917 11.2608 4.85251 13.4108 4.43751 14.7508C4.39837 14.8757 4.38921 15.008 4.41076 15.1371C4.43231 15.2663 4.48397 15.3885 4.56155 15.4939C4.63914 15.5993 4.74046 15.685 4.85732 15.7439C4.97418 15.8029 5.10328 15.8335 5.23417 15.8333H8.33334C8.68093 15.8333 9.02472 15.7609 9.34275 15.6206C9.66077 15.4803 9.94605 15.2753 10.1804 15.0185C10.4147 14.7618 10.5929 14.459 10.7036 14.1295C10.8143 13.8 10.8551 13.4511 10.8233 13.1049C10.779 12.7513 10.6622 12.4105 10.4801 12.1041C10.2981 11.7977 10.0547 11.5322 9.76523 11.3241C9.47579 11.1161 9.14651 10.9701 8.79802 10.8953C8.44953 10.8204 8.08934 10.8183 7.74001 10.8891Z" fill="#3B3F42"></path><path d="M19.1667 7.4825C18.9457 7.4825 18.7337 7.5703 18.5774 7.72658C18.4211 7.88286 18.3333 8.09482 18.3333 8.31583V12.5H15C14.337 12.5 13.7011 12.7634 13.2322 13.2322C12.7634 13.7011 12.5 14.337 12.5 15V18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H13.3683C13.5893 1.66667 13.8013 1.57887 13.9576 1.42259C14.1139 1.26631 14.2017 1.05435 14.2017 0.833333C14.2017 0.61232 14.1139 0.400358 13.9576 0.244078C13.8013 0.0877974 13.5893 0 13.3683 0L4.16667 0C3.062 0.00132321 2.00296 0.440735 1.22185 1.22185C0.440735 2.00296 0.00132321 3.062 0 4.16667L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H13.6192C14.1665 20.0015 14.7086 19.8945 15.2143 19.6851C15.72 19.4757 16.179 19.168 16.565 18.78L18.78 16.565C19.168 16.179 19.4757 15.72 19.6851 15.2143C19.8945 14.7086 20.0015 14.1665 20 13.6192V8.31583C20 8.09482 19.9122 7.88286 19.7559 7.72658C19.5996 7.5703 19.3877 7.4825 19.1667 7.4825ZM15.3867 17.6017C15.0506 17.934 14.6278 18.165 14.1667 18.2683V15C14.1667 14.779 14.2545 14.567 14.4107 14.4107C14.567 14.2545 14.779 14.1667 15 14.1667H18.2708C18.1675 14.6278 17.9365 15.0506 17.6042 15.3867L15.3867 17.6017Z" fill="#3B3F42"></path><path d="M12.1383 11.8083C11.9735 11.8083 11.8125 11.7594 11.6755 11.6678C11.5384 11.5763 11.4317 11.4461 11.3686 11.2939C11.3055 11.1416 11.289 10.9741 11.3212 10.8125C11.3533 10.6508 11.4327 10.5024 11.5492 10.3858L18.0933 3.84167C18.1665 3.76868 18.2245 3.68197 18.2641 3.58652C18.3037 3.49107 18.3241 3.38875 18.3241 3.28542C18.3241 3.18208 18.3037 3.07976 18.2641 2.98431C18.2245 2.88886 18.1665 2.80216 18.0933 2.72917C18.0189 2.65182 17.9288 2.59133 17.8291 2.5518C17.7293 2.51226 17.6222 2.4946 17.515 2.5C17.4079 2.50233 17.3024 2.52678 17.2052 2.57181C17.1079 2.61684 17.0211 2.68147 16.95 2.76167L10.6167 9.7675C10.4685 9.93149 10.2612 10.0299 10.0405 10.0411C9.81972 10.0522 9.60358 9.97527 9.43959 9.82708C9.2756 9.67889 9.17719 9.47163 9.16601 9.25088C9.15484 9.03014 9.23181 8.81399 9.38 8.65L15.7133 1.65C15.9354 1.40206 16.2056 1.20182 16.5074 1.06143C16.8093 0.921049 17.1364 0.843447 17.4692 0.833335C17.8024 0.826193 18.1337 0.886102 18.4434 1.0095C18.753 1.1329 19.0347 1.31727 19.2717 1.55167C19.731 2.01207 19.989 2.63588 19.989 3.28625C19.989 3.93662 19.731 4.56044 19.2717 5.02083L12.7275 11.565C12.6503 11.6425 12.5584 11.7039 12.4573 11.7457C12.3562 11.7874 12.2478 11.8087 12.1383 11.8083Z" fill="#3B3F42"></path></g><defs><clipPath id="clip0_4710_1303"><rect width="20" height="20" fill="white"></rect></clipPath></defs>
                                                    </svg>
                                                    </div>
                                                    <div className="item-container"><h3>Academies</h3><p>Robust solution for student management</p>
                                                    </div>
                                                </div>
                                                <div className=" MegaMenuItemWrapper"><div className="icon-wrapper"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4710_1307)"><path d="M16.6667 0H4.16667C2.79167 0 1.66667 1.125 1.66667 2.5V17.5C1.66667 18.875 2.79167 20 4.16667 20H18.3333V1.66667C18.3333 0.75 17.5833 0 16.6667 0ZM16.6667 15H6.66667V1.66667H16.6667V15ZM4.16667 1.66667H5.00001V15H4.16667C3.87501 15 3.59167 15.05 3.33334 15.1417V2.5C3.33334 2.04167 3.70834 1.66667 4.16667 1.66667ZM4.16667 18.3333C3.70834 18.3333 3.33334 17.9583 3.33334 17.5C3.33334 17.0417 3.70834 16.6667 4.16667 16.6667H16.6667V18.3333H4.16667ZM9.57501 12.5167L10.1667 10.85H13.1583L13.75 12.5167H15.5167L12.8333 5C12.65 4.5 12.1917 4.175 11.6583 4.175C11.125 4.175 10.6667 4.5 10.4833 5.00833L7.8 12.525H9.56667L9.57501 12.5167ZM11.6667 6.65833L12.5667 9.18333H10.7667L11.6667 6.65833Z" fill="#3B3F42"></path></g><defs><clipPath id="clip0_4710_1307"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                                                </div><div className="item-container"><h3>Schools</h3><p>Cutting-edge school management software</p>
                                                    </div></div><div className=" MegaMenuItemWrapper">
                                                    <div className="icon-wrapper"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4710_1301)"><path d="M20 7.84995C20.0004 7.57844 19.9289 7.31165 19.7928 7.07673C19.6567 6.8418 19.4608 6.64711 19.225 6.51245L10.8 1.51245C10.5572 1.37079 10.2811 1.29614 9.99999 1.29614C9.71888 1.29614 9.44281 1.37079 9.19999 1.51245L0.762495 6.51245C0.529335 6.6508 0.336185 6.84744 0.20203 7.08304C0.0678742 7.31864 -0.00267029 7.58509 -0.00267029 7.8562C-0.00267029 8.12732 0.0678742 8.39377 0.20203 8.62937C0.336185 8.86497 0.529335 9.06161 0.762495 9.19995L3.16249 10.6V14.1125C3.16394 14.387 3.23599 14.6565 3.37172 14.8951C3.50744 15.1337 3.70228 15.3334 3.93749 15.475L9.24999 18.5375C9.48719 18.6688 9.75387 18.7377 10.025 18.7377C10.2961 18.7377 10.5628 18.6688 10.8 18.5375L16.1125 15.475C16.3477 15.3334 16.5425 15.1337 16.6783 14.8951C16.814 14.6565 16.886 14.387 16.8875 14.1125V10.5625L18.4375 9.64995V13.05H20V7.84995ZM15.3375 14.1L9.99999 17.175L4.72499 14.1125V11.525L9.19999 14.1875C9.44363 14.3267 9.71939 14.3999 9.99999 14.3999C10.2806 14.3999 10.5564 14.3267 10.8 14.1875L15.325 11.4875L15.3375 14.1ZM9.99999 12.8375L1.5625 7.83745L9.99999 2.82495L18.4375 7.82495L9.99999 12.8375Z" fill="#3B3F42"></path></g><defs><clipPath id="clip0_4710_1301"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Universities &amp; Higher Education</h3><p>Powerful education management system</p>
                                                    </div>
                                                </div>
                                                <div className=" MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4710_1299)"><path d="M5.83333 11.6667C7.675 11.6667 9.16667 10.175 9.16667 8.33333C9.16667 6.49167 7.675 5 5.83333 5C3.99167 5 2.5 6.49167 2.5 8.33333C2.5 10.175 3.99167 11.6667 5.83333 11.6667ZM5.83333 6.66667C6.75 6.66667 7.5 7.41667 7.5 8.33333C7.5 9.25 6.75 10 5.83333 10C4.91667 10 4.16667 9.25 4.16667 8.33333C4.16667 7.41667 4.91667 6.66667 5.83333 6.66667ZM11.6667 19.1667C11.6667 19.625 11.2917 20 10.8333 20C10.375 20 10 19.625 10 19.1667C10 16.8667 8.13333 15 5.83333 15C3.53333 15 1.66667 16.8667 1.66667 19.1667C1.66667 19.625 1.29167 20 0.833333 20C0.375 20 0 19.625 0 19.1667C0 15.95 2.61667 13.3333 5.83333 13.3333C9.05 13.3333 11.6667 15.95 11.6667 19.1667ZM20 4.16667V10.8333C20 13.1333 18.1333 15 15.8333 15H12.5C12.0417 15 11.6667 14.625 11.6667 14.1667C11.6667 13.7083 12.0417 13.3333 12.5 13.3333H15.8333C17.2083 13.3333 18.3333 12.2083 18.3333 10.8333V4.16667C18.3333 2.79167 17.2083 1.66667 15.8333 1.66667H7.88333C6.99167 1.66667 6.16667 2.15 5.71667 2.91667C5.48333 3.31667 4.975 3.45 4.575 3.225C4.175 2.99167 4.04167 2.48333 4.275 2.08333C5.025 0.8 6.40833 0 7.88333 0H15.8333C18.1333 0 20 1.86667 20 4.16667ZM11.3917 9.1L13.825 6.66667H12.5C12.0417 6.66667 11.6667 6.29167 11.6667 5.83333C11.6667 5.375 12.0417 5 12.5 5H15C15.9167 5 16.6667 5.75 16.6667 6.66667V9.16667C16.6667 9.625 16.2917 10 15.8333 10C15.375 10 15 9.625 15 9.16667V7.84167L12.5667 10.275C12.1833 10.6583 11.6667 10.8667 11.1417 10.8667C10.9583 10.8667 10.775 10.8417 10.5917 10.7917C10.15 10.6667 9.89167 10.2083 10.0167 9.76667C10.1417 9.325 10.6 9.06667 11.05 9.19167C11.15 9.21667 11.2833 9.20833 11.3917 9.1Z" fill="#3B3F42"></path></g><defs><clipPath id="clip0_4710_1299"><rect width="20" height="20" fill="white"></rect></clipPath></defs>
                                                        </svg>
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Corporate Learning</h3>
                                                        <p>Simplify employee training</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="SolutionsMegaMenuGridItem"><h1>Features</h1>
                                                <div className="no-desc MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <img alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/assets/images/shapes/Preadmission.webp" style={{ color: 'transparent' }} />
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Pre-Admission &amp; Enrolment</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="no-desc MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <img alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/assets/images/shapes/CRM.webp" style={{ color: 'transparent' }} />
                                                    </div><div className="item-container">
                                                        <h3>Customer Relationship Management</h3><p></p>
                                                    </div>
                                                </div>
                                                <div className="no-desc MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <img alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/assets/images/shapes/SIS.webp" style={{ color: 'transparent' }} />
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Student Information System</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="no-desc MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <img alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/assets/images/shapes/LMS.webp" style={{ color: 'transparent' }} />
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Learning Management System</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="no-desc MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <img alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/assets/images/shapes/Fees_invoicing.webp" style={{ color: 'transparent' }} />
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Fees &amp; Invoicing</h3><p></p>
                                                    </div>
                                                </div>
                                                <div className="no-desc MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <img alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/assets/images/shapes/Finance.webp" style={{ color: 'transparent' }} />
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Finance &amp; Accounting</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="no-desc MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <img alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/assets/images/shapes/E-commerce.webp" style={{ color: 'transparent' }} />
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>eCommerce Module</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="no-desc MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <img alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/assets/images/shapes/Fundraising.webp" style={{ color: 'transparent' }} />
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Fund Raising</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="no-desc MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <img alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/assets/images/shapes/DegreeAudit.webp" style={{ color: 'transparent' }} />
                                                    </div><div className="item-container">
                                                        <h3>Degree Audit</h3>
                                                        <p></p>
                                                    </div></div><div className="no-desc MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <img alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/assets/images/shapes/Alumni.webp" style={{ color: 'transparent' }} />
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>Alumni</h3><p></p>
                                                    </div>
                                                </div>
                                                <div className="no-desc MegaMenuItemWrapper">
                                                    <div className="icon-wrapper">
                                                        <img alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/assets/images/shapes/White label.webp" style={{ color: 'transparent' }} />
                                                    </div>
                                                    <div className="item-container">
                                                        <h3>White Label Module</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                            </div>
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
                            <div className="NavLabel">
                                <button className="ButtonWrapper sm" onClick={goToSignInPage}>
                                    <span>Log in</span>
                                </button>
                            </div>
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
                                <a href="#experience-0" className={scrollPosition.scrollY > 1300 &&scrollPosition.scrollY < 2099  ? "active" : ""} title="classe365">
                                    <video preload="metadata" className="lazy" src="/assets/images/experience/data02.mp4" height={640} width={400} autoPlay loop muted playsInline>
                                    </video>
                                </a>
                                <a href="#experience-1" className={scrollPosition.scrollY > 2100 && scrollPosition.scrollY < 3099? "active" : ""} title="classe365">
                                    <video preload="metadata" className="lazy" src="/assets/images/experience/data01.mp4" height={640} width={400} autoPlay loop muted playsInline>
                                    </video>
                                </a>
                                <a href="#experience-2" className={scrollPosition.scrollY > 3100 ? "active" : ""} title="classe365">
                                    <video preload="metadata" className="lazy" src="/assets/images/experience/data03.mp4" height={640} width={400} autoPlay loop muted playsInline>
                                    </video>
                                </a>
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
                                    <div className="lottie-wrapper">
                                        <video preload="metadata" className="lazy" src="/assets/images/experience/data01.mp4" poster="/assets/images/hero-img.webp" height="0" width="0" autoPlay loop muted playsInline>
                                        </video>
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
                        <div className={styles["feature-slider"]}>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={3}
                                freeMode={true}
                                modules={[FreeMode]}
                                className="mySwiper"
                            >
                                {features.map((feature, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={styles["feature-card"]}>
                                            <img src={feature.image} alt={feature.alt} width={250} height={150} />
                                            <div>
                                                <h5>{feature.title}</h5>
                                                <p>{feature.subtitle}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="InstitutionsWrapper">
                        <div className="InstitutionContainer">
                            <div>
                                <h6>For all Institutions</h6>
                                <h2 style={{ lineHeight: "1" }}>All-in-one learning management solution for institutions</h2>
                                <div className="InstitutionListWrapper">
                                    {institution.map((institution, index) => (
                                        <div key={index} className={`InstitutionItemWrapper ${activeInsIndex === index ? "active" : ""}`} onClick={() => handleInsImageChange(index, institution.image)}>
                                            <div>{institution.title}</div>
                                            <p>{institution.descrip}</p>
                                        </div>
                                        // <div className=" InstitutionItemWrapper">
                                        //     <div>Universities and Colleges</div>
                                        //     <p>A smart CRM for universities and colleges to manage the entire student life cycle! With Classe365, managing students, faculty, and courses is super easy!</p></div>

                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="InstitutionImageWrapper" style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${selectedInsImage})` }}>
                            <img src={selectedInsImage} alt="School Management System" title="School Management System Software" fetchPriority="high" width="0" height="930" decoding="async" data-nimg="1" className="instImage" style={{ color: 'transparent' }} />
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
                                <h2 style={{ lineHeight: '1' }}>
                                    Discover Why Our Customers Love Core-LEM - In Their Own Words
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
                                    <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(1200px, 0px, 0px)', transitionDelay: '0ms' }}>
                                        <div className="swiper-slide" data-swiper-slide-index="1" style={{ marginLeft: '30px' }}>
                                            <div dir="ltr" className="discoverCardstyles__DiscoverCardWrapper-sc-zal9au-0 cqQYbO discover-card">
                                                <div className="discoverCardstyles__DiscoverContent-sc-zal9au-1 iMriTJ"><h2>“</h2><h4>Good value for money</h4>
                                                    <p>Academic admin staff find the student information system is easy to use.</p>
                                                </div>
                                                <div className="discoverCardstyles__DiscoverOwner-sc-zal9au-2 mDyRD"><h4>source - Capterra</h4><h5>Alistair S.</h5><p>System Architect</p></div>
                                            </div>
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
                        <div className="bookstyles__BookSectionContainer-sc-k85x0-1 bnlrQu" style={{lineHeight: '1'}}>
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
                                <button className="ButtonWrapper transparentWhiteBtn">Get a Free Platform Tour</button>
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
                                <div className="navigationstyles__NavigationListWrapper-sc-1isemhl-4 hWWiId">
                                    <div className="navigationstyles__NavigationListContent-sc-1isemhl-5 jZElrE">
                                        <h2>RESOURCES</h2><a target="_blank" title="Help Docs" href="http://docs.classe365.com/en/">Help Docs</a>
                                        <a target="_blank" title="Video Tutorials" href="http://docs.classe365.com/en/articles/649470-video-tutorials-of-classe365">Video Tutorials</a>
                                        <a target="_blank" title="API Docs" href="http://docs.classe365.com/en/collections/47611-api-documentation">API Docs</a><a target="_blank" title="Demo &amp; Webinars" href="/request-demo">Demo &amp; Webinars</a>
                                        <a target="_blank" title="Cloud Security" href="http://docs.classe365.com/en/articles/457792-classe365-cloud-security-compliance#">Cloud Security</a>
                                        <a target="_blank" title="Product Updates" href="https://updates.classe365.com/en">Product Updates</a>
                                    </div>
                                </div>
                                <div className="navigationstyles__NavigationListWrapper-sc-1isemhl-4 hWWiId">
                                    <div className="navigationstyles__NavigationListContent-sc-1isemhl-5 jZElrE"><h2>COMPARE
                                        <br />
                                        <span>(Higher Ed Software)</span></h2><a title="Ellucian" href="/compare/alternate-to-ellucian">Vs Ellucian</a>
                                        <a title="Oracle Peoplesoft Campus" href="/compare/alternate-to-oracle-peoplesoft-campus">Vs Oracle Peoplesoft Campus</a>
                                        <a title="Jenzabar" href="/compare/alternate-to-jenzabar">Vs Jenzabar</a><a title="Workday" href="/compare/alternate-to-workday">Vs Workday</a></div>
                                    <div className="navigationstyles__NavigationListContent-sc-1isemhl-5 jZElrE"><h2>COMPARE<br />
                                        <span>(K12 Software)</span></h2>
                                        <a title="Powerschool" href="/compare/alternate-to-powerschool">Vs Powerschool</a><a title="Gradelink" href="/compare/alternate-to-gradelink">Vs Gradelink</a>
                                        <a title="Redikar" href="/compare/alternate-to-rediker">Vs Redikar</a><a title="Alma" href="/compare/alternate-to-alma">Vs Alma</a>
                                    </div>
                                </div>
                                <div className="navigationstyles__NavigationListWrapper-sc-1isemhl-4 hWWiId">
                                    <div className="navigationstyles__NavigationListContent-sc-1isemhl-5 jZElrE">
                                        <h2>GET IN TOUCH</h2>
                                        <a target="_blank" title="Contact Sales" href="mailto:sales@classe365.com">Contact Sales</a><a target="_blank" title="Contact Support" href="mailto:support@classe365.com">Contact Support</a><a target="_blank" title="Contact Partnership" href="mailto:sales@classe365.com">Contact Partnership</a><a target="_blank" title="Contact Media" href="mailto:pr@classe365.com">Contact Media</a></div>
                                    <div className="navigationstyles__NavigationListContent-sc-1isemhl-5 jZElrE"><h2>Download App</h2>
                                        <div className="navigationstyles__DownloadButtonWrapper-sc-1isemhl-6 dbdxzd">
                                            <a target="_blank" title="App Store Link" href="https://apps.apple.com/us/app/classe365/id1040422036">
                                                <img alt="App store" loading="lazy" width="112" height="32" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/footer/app_store.webp" />
                                            </a>
                                            <a target="_blank" title="Play Store Link" href="https://play.google.com/store/apps/details?id=com.classe365">
                                                <img alt="Google Play" loading="lazy" width="112" height="34" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src="/assets/images/footer/googleplay.webp" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="navigationstyles__CopyrightWrapper-sc-1isemhl-7 iJlRSS">
                                    <p>Copyright © Core-Lem | All Rights Reserved.</p>
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
