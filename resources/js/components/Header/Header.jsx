import React, { useEffect, useRef, useState } from "react";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import SearchBox from "../SearchBox/SearchBox";
import Logo from "../Logo/Logo";
import OpenSearch from "../SearchBox/OpenSearch";

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef(null);
    const dropdown = useRef(null);

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    return (
        <header
            id="app-header"
            className="w-full flex flex-col bg-white shadow"
        >
            <div className="z-10 flex h-16 justify-between container mx-auto">
                <SearchBox />

                <div className="hidden md:flex gap-8 items-center flex-shrink-0 px-2">
                    <Logo />

                    <OpenSearch />
                </div>

                <button
                    type="button"
                    id="mob-menu-trigger2"
                    className="px-4 border-r border-gray-200 focus:outline-none md:hidden"
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg
                        className="h-8 fill-current px-3 text-brand-primary-600"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 46.239 45.785"
                    >
                        <path
                            d="M62.309,39.865S52.079,65.721,45.923,70.511A14.124,14.124,0,0,1,28.576,48.217c6.156-4.79,33.734-8.352,33.734-8.352"
                            transform="translate(-16.07 -27.704)"
                        ></path>
                        <path
                            d="M4.519,38.632c0-4.393,3.868-12.872,7.842-20.426C6.228,13.637.6,9.959.6,9.959S-1.444,37.69,2.014,44.682a14.1,14.1,0,0,0,9.8,7.571,16.344,16.344,0,0,1-7.3-13.621"
                            transform="translate(0 -6.921)"
                        ></path>
                        <path
                            d="M36.608,18.562c2.916-2.249,9.768-4.1,16.861-5.5C49.919,6.051,46.351,0,46.351,0S40.694,9.594,36.54,18.616l.068-.054"
                            transform="translate(-25.393)"
                        ></path>
                    </svg>
                </button>

                <div className="flex items-center gap-2">
                    <div className="relative">
                        <button
                            ref={trigger}
                            onClick={() => {
                                setDropdownOpen(!dropdownOpen);
                            }}
                            type="button"
                            className=" text-gray-400 border border-black hover:text-gray-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
                        >
                            <h6>Settings</h6>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="ml-2 w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>

                        <div
                            ref={dropdown}
                            onFocus={() => setDropdownOpen(true)}
                            onBlur={() => setDropdownOpen(false)}
                            id="SwitcherApp"
                            className={`${
                                dropdownOpen === true ? "grid" : "hidden"
                            } fixed right-0 md:absolute md:top-full mt-2  grid-cols-2 md:grid-cols-3 p-3 w-max gap-3 bg-white border border-gray-200 rounded-2xl shadow-lg`}
                        >
                            <a
                                className="h-24 px-2 flex flex-col rounded-lg items-center justify-center p-2 text-gray-800 hover:bg-gray-50"
                                href="https://cliente.one-step.it/common/change_module/?modulo=cms"
                            >
                                <div className="rounded-full w-[48px] h-[48px] bg-gray-300 flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-600">
                                        CMS
                                    </span>
                                </div>{" "}
                            </a>
                            <a
                                className="h-24 px-2 flex flex-col rounded-lg items-center justify-center p-2 text-gray-800 hover:bg-gray-50"
                                href="https://cliente.one-step.it/common/change_module/?modulo=crm"
                            >
                                <div className="rounded-full w-[48px] h-[48px] bg-gray-300 flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-600">
                                        CRM
                                    </span>
                                </div>{" "}
                            </a>
                            <a
                                className="h-24 px-2 flex flex-col rounded-lg items-center justify-center p-2 text-gray-800 hover:bg-gray-50"
                                href="https://cliente.one-step.it/common/change_module/?modulo=financing"
                            >
                                <div className="rounded-full w-[48px] h-[48px] bg-gray-300 flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-600">
                                        FNC
                                    </span>
                                </div>{" "}
                            </a>
                            <a
                                className="h-24 px-2 flex flex-col rounded-lg items-center justify-center p-2 text-gray-800 hover:bg-gray-50"
                                href="https://cliente.one-step.it/common/change_module/?modulo=nbt"
                            >
                                <div className="rounded-full w-[48px] h-[48px] bg-gray-300 flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-600">
                                        NBT
                                    </span>
                                </div>{" "}
                            </a>
                            <a
                                className="h-24 px-2 flex flex-col rounded-lg items-center justify-center p-2 text-gray-800 hover:bg-gray-50"
                                href="https://cliente.one-step.it/common/change_module/?modulo=service"
                            >
                                <div className="rounded-full w-[48px] h-[48px] bg-gray-300 flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-600">
                                        SRV
                                    </span>
                                </div>{" "}
                            </a>
                            <a
                                className="h-24 px-2 flex flex-col rounded-lg items-center justify-center p-2 text-gray-800 hover:bg-gray-50"
                                href="https://cliente.one-step.it/common/change_module/?modulo=wl"
                            >
                                <div className="rounded-full w-[48px] h-[48px] bg-gray-300 flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-600">
                                        WL
                                    </span>
                                </div>{" "}
                            </a>
                            <a
                                className="h-24 px-2 flex flex-col rounded-lg items-center justify-center p-2 text-gray-800 hover:bg-gray-50"
                                href="https://cliente.one-step.it/common/change_module/?modulo=usato"
                            >
                                <div className="rounded-full w-[48px] h-[48px] bg-gray-300 flex items-center justify-center">
                                    <span className="text-lg font-bold text-gray-600">
                                        Usa
                                    </span>
                                </div>{" "}
                            </a>
                            <a
                                className="h-24 px-2 flex flex-col rounded-lg items-center justify-center p-2 text-gray-800 bg-gray-100"
                                href="https://cliente.one-step.it/common/change_module/?modulo=settings"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="32"
                                    height="32"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>{" "}
                            </a>
                        </div>
                    </div>

                    <span>
                        <a
                            href="https://cliente.one-step.it/dashboard"
                            title="Dashboard"
                        >
                            <span className="text-gray-400 rounded-full hover:text-gray-600 focus:outline-none z-50">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                                </svg>
                            </span>
                        </a>
                    </span>

                    <div id="ReactNotifications">
                        <div className="cursor-pointer relative">
                            <div className="absolute left-0 top-0  bg-red-500 rounded-full">
                                <span className="text-sm text-white p-1">
                                    0
                                </span>
                            </div>
                            <div className="p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="text-gray-400 w-5 h-5"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <span>
                            <a href="https://cliente.one-step.it/help">
                                <span className="text-gray-400 rounded-full hover:text-gray-600 focus:outline-none">
                                    <svg
                                        className="w-6 h-6 hover:text-red-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                </span>
                            </a>
                        </span>
                    </div>
                    {/* Profile dropdown   */}
                    <ProfileDropDown />
                </div>
            </div>
        </header>
    );
}

export default Header;
