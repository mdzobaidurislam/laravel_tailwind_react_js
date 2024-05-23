import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // Fetch menu items from the API
        fetch('/api/menu')
            .then(response => response.json())
            .then(data => setMenuItems(data))
            .catch(error => console.error('Error fetching menu items:', error));
    }, []);

    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-4">
                <ul className="flex space-x-4">
                    {menuItems.map(item => (
                        <li key={item.label}>
                            <a href={item.link} className="text-white hover:text-gray-300">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
