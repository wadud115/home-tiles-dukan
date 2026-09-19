import Link from 'next/link';
import React from 'react';

const LogInPage = () => {
    return (
        <div>

            <p>log in page</p>

            <Link href={'/auth/logout'}>go to register page</Link>
            
        </div>
    );
};

export default LogInPage;