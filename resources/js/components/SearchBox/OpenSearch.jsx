import React from "react";
import { useWrapContext } from "../../Contexts/GlobalContextProvider";

export default function OpenSearch() {
    const { toggle, setToggle } = useWrapContext();
    return (
        <div className="hidden md:flex gap-8 items-center flex-shrink-0 px-2">
            <div className="flex gap-3 items-center">
                <button
                    className="start-search cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                >
                    <span className="text-gray-400 rounded-full hover:text-primary focus:outline-none z-50">
                        <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </span>
                </button>

                <span>
                    <a href="https://cliente.one-step.it/lead/add_request">
                        <span className="text-gray-400 rounded-full hover:text-red-400 focus:outline-none z-50">
                            <svg
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </a>
                </span>
            </div>
        </div>
    );
}
