'use server'

import { Types } from '@/common';
import { Button } from '@/components/Button';
import { Grid } from '@/components/Grid';
import ClientTableWrapper from '@/components/TableWrapper';
import { getAllRecords } from '@/supabase';
import Link from 'next/link';

const MenuPage = async () => {

    const { data } = await getAllRecords<Types.Menu[]>('menu');
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
        }
    ]


    return (<Grid className='w-full place-items-center'>
        <ClientTableWrapper tableName='menu' data={data} columns={columns} />
        <Link href='/menu/add'>
            <Button >Add Item</Button>
        </Link>
    </Grid>)
}

export default MenuPage