import React, { FC, ReactNode } from 'react'
import { Grid } from '../Grid'



export const Card: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Grid className='border-gray-100 border-2 p-4 m-4 w-4/5 rounded-md'>
            {children}
        </Grid>
    )
}
