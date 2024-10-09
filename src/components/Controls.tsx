import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Controls: React.FC = () => {
    const navigate = useNavigate();

    // Define control items and their corresponding routes
    const controls = [
        { id: 'home', icon: faHome, route: '/' },
        { id: 'about', icon: faUser, route: '/about' },
        { id: 'portfolio', icon: faBriefcase, route: '/portfolio' },
        { id: 'contact', icon: faEnvelopeOpen, route: '/contact' },
    ];

    const handleControlClick = (route: string) => {
        navigate(route);
    };

    return (
        <div className="flex justify-around p-4 bg-gray-700 text-white">
            {controls.map(control => (
                <div 
                    key={control.id} 
                    className={`control ${window.location.pathname === control.route ? 'active-btn' : ''}`}
                    onClick={() => handleControlClick(control.route)}
                    data-id={control.id}
                >
                    <FontAwesomeIcon icon={control.icon} className="text-xl" />
                </div>
            ))}
        </div>
    );
};

export default Controls;
