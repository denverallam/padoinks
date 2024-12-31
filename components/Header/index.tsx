import { Routes } from '@/common'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <nav>
            <ul className='grid grid-cols-2 gap-2'>
                <Link href={Routes.ORDERS_PAGE}><li>Orders</li></Link>
                <Link href={Routes.MENU_PAGE}><li>Menu</li></Link>
            </ul>
        </nav>
    )
}
