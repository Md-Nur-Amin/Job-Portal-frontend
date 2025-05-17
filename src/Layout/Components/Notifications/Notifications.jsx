import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Notifications = ({ userId }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications when component loads
        const fetchNotifications = async () => {
            try {
                const res = await fetch(`http://localhost:5000/notifications/${userId}`);
                if (res.ok) {
                    const data = await res.json();
                    setNotifications(data);
                } else {
                    Swal.fire('Error', 'Failed to fetch notifications', 'error');
                }
            } catch (err) {
                Swal.fire('Error', 'Something went wrong', 'error');
            }
        };

        fetchNotifications();
    }, [userId]);

    return (
        <div className="notifications">
            <h2 className="text-2xl font-bold mb-4">Your Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index} className="border-b py-2">
                        <p>{notification.message}</p>
                        <p className="text-sm text-gray-500">{new Date(notification.createdAt).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
