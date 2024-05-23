import React from "react";

export default function Title({ title }) {
    return (
        <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                {title}
            </h2>
        </div>
    );
}
