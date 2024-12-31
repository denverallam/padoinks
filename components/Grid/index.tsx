import React from 'react';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children, className = '', ...props }) => {
    return (
        <div className={`grid gap-4 ${className}`} {...props}>
            {children}
        </div>
    );
};

export { Grid };
