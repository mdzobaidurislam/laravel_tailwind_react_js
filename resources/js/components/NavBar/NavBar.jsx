import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div id="app-menu" className="overflow-auto bg-white border-b-2">
            <nav className="flex items-center overflow-auto scrollable container mx-auto whitespace-nowrap">
                <div>
                    <ul className="flex gap-8">
                        <li>
                            <Link
                                title="Utenti"
                                to="/about"
                                className=" text-[#37999f] flex items-center text-primary hover:text-primary px-2 py-2 border-b-2 border-transparent hover:border-gray-400"
                            >
                                Contratti
                            </Link>
                        </li>
                        <li>
                            <Link
                                title="Utenti"
                                to="/about"
                                className="text-[#37999f] flex items-center text-primary hover:text-primary px-2 py-2 border-b-2 border-transparent hover:border-gray-400"
                            >
                                Disponibilità
                            </Link>
                        </li>
                        <li>
                            <Link
                                title="Utenti"
                                to="/about"
                                className="text-[#37999f] flex items-center text-primary hover:text-primary px-2 py-2 border-b-2  border-gray-600 "
                            >
                                Mezzi
                            </Link>
                        </li>
                        <li>
                            <Link
                                title="Utenti"
                                to="/about"
                                className="text-[#37999f] flex items-center text-primary hover:text-primary px-2 py-2 border-b-2 border-transparent hover:border-gray-400"
                            >
                                Listini
                            </Link>
                        </li>
                        <li>
                            <Link
                                title="Utenti"
                                to="/about"
                                className="text-[#37999f] flex items-center text-primary hover:text-primary px-2 py-2 border-b-2 border-transparent hover:border-gray-400"
                            >
                                Tipo Mezzi
                            </Link>
                        </li>
                        <li>
                            <Link
                                title="Utenti"
                                to="/about"
                                className="text-[#37999f] flex items-center text-primary hover:text-primary px-2 py-2 border-b-2 border-transparent hover:border-gray-400"
                            >
                                Prezzo carburanti
                            </Link>
                        </li>
                        <li>
                            <Link
                                title="Utenti"
                                to="/about"
                                className="text-[#37999f] flex items-center text-primary hover:text-primary px-2 py-2 border-b-2 border-transparent hover:border-gray-400"
                            >
                                Gestione fornitori NBT
                            </Link>
                        </li>

                        {/* <li className="group">
                            <Link
                                title="Lina"
                                to="/"
                                className="flex gap-3 items-center text-primary hover:text-primary px-2 py-2 rounded hover:bg-gray-50 group"
                            >
                                Lina{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 group-hover:rotate-180 transition-transform"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    ></path>
                                </svg>
                            </Link>
                            <ul className="bg-white shadow-xl  h-0 overflow-hidden absolute z-50 group-hover:h-auto group-hover:bg-white transition-all duration-300 ease-in-out">
                                <li>
                                    <Link
                                        title="Triggers"
                                        to="/"
                                        className="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                                    >
                                        Triggers{" "}
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        title="Analisi"
                                        href="/"
                                        className="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                                    >
                                        Analisi{" "}
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        title="Automazioni"
                                        href="/"
                                        className="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                                    >
                                        Automazioni{" "}
                                    </Link>
                                </li>
                            </ul>
                        </li> */}
                    </ul>{" "}
                </div>
            </nav>
        </div>
    );
}
