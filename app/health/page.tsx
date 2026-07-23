'use client';

import { useEffect, useState } from 'react';

const HealthPage = () => {
    const [status, setStatus] = useState('Loading...');

    useEffect(() => {
        const fetchHealthStatus = async () => {
            try {
                const response = await fetch('/api/health'); // Adjust the endpoint as necessary
                if (response.ok) {
                    const data = await response.json();
                    setStatus(data.status);
                } else {
                    setStatus('Error fetching health status');
                }
            } catch {
                setStatus('Error fetching health status');
            }
        };

        fetchHealthStatus();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Health Check</h1>
            <p className="mt-4">{status}</p>
        </div>
    );
};

export default HealthPage;
