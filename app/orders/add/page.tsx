import { createOrder } from '@/app/actions/orders'
import { Constants, Types } from '@/common'
import { Button } from '@/components/Button'
import CustomForm from '@/components/CustomForm'
import { OrderList } from '@/components/OrderForm'
import { getAllRecords } from '@/supabase'
import { Metadata } from 'next/types'


export const metadata: Metadata = {
    title: Constants.ADD_ORDER_PAGE_TITLE
}


const AddOrderPage = async () => {

    const { data } = await getAllRecords<Types.Menu[]>('menu');

    return (
        <>
            <CustomForm.Form className='place-items-center' action={createOrder}>
                <OrderList options={data} />
                <Button variant='success' type='submit'>{Constants.CREATE_ORDER}</Button>
            </CustomForm.Form>
        </>

    )
}

export default AddOrderPage