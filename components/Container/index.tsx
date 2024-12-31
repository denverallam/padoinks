import React, { FC, ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className="flex items-start justify-center min-h-screen w-full p-4 box-border">
            {children}
        </div>
    );
};

export default Container;
