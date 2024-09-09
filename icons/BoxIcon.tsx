import React from 'react';

export const BoxIcon = ({ className }) => (
    <svg
        width='24'
        height='24'
        className={className}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M4 8H20M4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V8M4 8L8 4H16L20 8M8 12H12'
            stroke='var(--main-color)'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
