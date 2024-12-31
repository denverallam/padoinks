import React from 'react';

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    columns?: number; 
}

export const Row: React.FC<RowProps> = ({ children, columns = 1, className = '', ...props }) => {
    return (
        <div className={`grid grid-cols-${columns} ${className}`} {...props}>
            {children}
        </div>
    );
};

