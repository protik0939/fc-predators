import React, { useEffect, useState } from 'react';

const TestingPurpose = () => {
    const [blocked, setBlocked] = useState(false);

    useEffect(() => {
        const reloadCount = localStorage.getItem('reloadCount');
        const lastReloadTime = localStorage.getItem('lastReloadTime');

        const now = Date.now();

        if (lastReloadTime && now - lastReloadTime > 60000) {
            localStorage.setItem('reloadCount', 1);
            localStorage.setItem('lastReloadTime', now);
        } else {
            if (reloadCount) {
                const newCount = parseInt(reloadCount) + 1;

                if (newCount > 10) {
                    setBlocked(true);
                    setTimeout(() => {
                        setBlocked(false);
                        localStorage.setItem('reloadCount', 0);
                    }, 60000); // Block for 1 minute
                } else {
                    localStorage.setItem('reloadCount', newCount);
                    localStorage.setItem('lastReloadTime', now);
                }
            } else {
                localStorage.setItem('reloadCount', 1);
                localStorage.setItem('lastReloadTime', now);
            }
        }
    }, []);

    if (blocked) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <h1>Access Blocked</h1>
                <p>You have reloaded the page too many times. Please wait for a minute before trying again.</p>
            </div>
        );
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <h1>Welcome to My Site</h1>
            <p>You realoaded { } times</p>
        </div>
    );
};

export default TestingPurpose;
