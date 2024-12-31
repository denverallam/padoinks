import React, { FC, ReactNode } from 'react'


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
    children: ReactNode
}

const buttonColor = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
    success: 'bg-green-500 hover:bg-green-700 text-white',
}

export const Button: FC<ButtonProps> = ({ children, variant = 'primary', ...restProps }) => {
    return (
        <button
            {...restProps}
            className={`p-4 border-2 border-gray-100 w-full m-2 ${buttonColor[variant]} rounded-md`}
        >
            {children}
        </button>
    )
}
