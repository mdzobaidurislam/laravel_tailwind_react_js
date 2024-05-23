import React from "react";
import { CloseIcons, SearchIcons } from "../../Icons/Icons";
import { useWrapContext } from "../../Contexts/GlobalContextProvider";

export default function SearchBox() {
    const { toggle, setToggle } = useWrapContext();
    return (
        <div
            id="search-container"
            className={`${
                toggle === true ? "flex" : "hidden"
            }  justify-center items-center px-5 fixed top-0 left-0 right-0 z-50 w-full inset-0 bg-black bg-opacity-50`}
        >
            <div className="relative w-[1000px] h-fit mx-auto rounded-2xl bg-white border border-gray-200 shadow-lg text-gray-800 overflow-hidden">
                <SearchIcons />

                <input
                    type="text"
                    name=""
                    id="search-bar"
                    autoComplete="off"
                    className="block h-14 pl-14 w-full border-b text-gray-900 sm:text-sm focus:outline-none"
                    placeholder="Cerca"
                />

                <button
                    onClick={() => setToggle(false)}
                    id="close-search-bar"
                    className="text-gray-500 absolute flex items-center top-5 right-5"
                >
                    <CloseIcons />
                </button>

                <section id="search-box" className="hidden">
                    <span className="block px-4 py-2 text-gray-500 text-sm">
                        Cliente:
                    </span>
                    <div id="search-results">
                        <span className="block px-4 py-2 text-gray-600 focus:bg-gray-200 focus:outline-none">
                            Nessun risultato
                        </span>
                    </div>
                </section>
            </div>
        </div>
    );
}
