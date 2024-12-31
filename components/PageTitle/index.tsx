import React, { FC } from 'react'


interface PageTitleProps {
    children: string
}

export const PageTitle: FC<PageTitleProps> = ({ children }) => {
    return (
        <h1>{children}</h1>
    )
}
