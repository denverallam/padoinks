import { updateOrder } from '@/app/actions/orders'
import { Types } from '@/common'
import { Button } from '@/components/Button'
import CustomForm from '@/components/CustomForm'
import { OrderForm } from '@/components/OrderForm'
import { getAllRecords, getRecord } from '@/supabase'

const UpdateMenuPage = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {

    const id = (await params).id
    const { data } = await getAllRecords<Types.Menu[]>('menu');
    const { data: order } = await getRecord<Types.Order>('orders', id);

    return (
        <CustomForm.Form className='place-items-center' action={updateOrder}>
            <OrderForm options={data} value={order} />
            <Button type='submit'>Update Order</Button>
        </CustomForm.Form>
    )
}

export default UpdateMenuPage