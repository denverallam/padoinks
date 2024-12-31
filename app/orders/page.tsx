import { Constants, Types, Utils } from '@/common';
import { Button } from '@/components/Button';
import { Grid } from '@/components/Grid';
import { PageTitle } from '@/components/PageTitle';
import ClientTableWrapper from '@/components/TableWrapper';
import { getAllRecords } from '@/supabase';
import type { Metadata } from 'next'
import Link from 'next/link';


export const metadata: Metadata = {
    title: Constants.ORDERS_PAGE_TITLE
}

const MenuPage = async () => {

    const { data } = await getAllRecords<Types.OrderMenu[]>('orders', 'id, menu (name, price),quantity');

    const tableData = data.map((order) => { return { ...order, ...order.menu } })
    const columns: Types.Column<Partial<Types.SpreadOrder>>[] = [
        {
            key: 'id',
            name: "ID"
        },
        {
            key: 'name',
            name: 'Name'
        },
        {
            key: 'price',
            name: 'Price'
        },
        {
            key: 'quantity',
            name: 'Quantity'
        }
    ]

    const total = tableData.reduce((acc, order) => acc + order.price * order.quantity, 0)

    const footer =
        <tfoot>
            <tr>
                <td>Total</td>
                <td colSpan={2} className='text-right'>{Utils.formatToPesos(total)}</td>
            </tr>
        </tfoot>


    return (
        <Grid className='w-full place-items-center'>
            <PageTitle>{Constants.ORDERS_PAGE_TITLE}</PageTitle>
            <ClientTableWrapper tableName='orders' data={tableData} columns={columns} footer={footer} />
            <Link href='/orders/add'>
                <Button >Add Orders</Button>
            </Link>
        </Grid>)
}

export default MenuPage