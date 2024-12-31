'use client'

import { Types } from '@/common'
import { FC, useState } from 'react'
import CustomForm from '../CustomForm'
import { Button } from '../Button'

interface OrderFormProps {
    value?: Types.Order
    options: Types.Menu[]
}

export const OrderForm: FC<OrderFormProps> = ({ options, value }) => {
    return (
        <>
            <input type='hidden' name='id' value={value?.id} />

            <CustomForm.FormItem>
                <CustomForm.Label id='menu_id' text='Menu' htmlFor='menu_id' />
                <CustomForm.Select id='menu_id' name='menu_id' defaultValue={value?.menu_id} required>
                    {options.map((menu) => <CustomForm.Option key={menu.id} value={menu.id}>{menu.name}</CustomForm.Option >)}
                </CustomForm.Select>
            </CustomForm.FormItem>

            <CustomForm.FormItem>
                <CustomForm.Label id='quantity' text='Quantity' htmlFor='quantity' />
                <CustomForm.Input type="number" id='quantity' name='quantity' placeholder='Quantity' defaultValue={value?.quantity} required />
            </CustomForm.FormItem>
        </>
    )
}


export const OrderList: FC<OrderFormProps> = ({ options }) => {
    const [orders, setOrders] = useState<Types.Order[]>([
        {
            menu_id: 0,
            quantity: 0,
        }
    ])
    return <>
        {
            orders.map((order, index) => <OrderForm key={index} options={options} />)
        }
        <Button onClick={() => setOrders([...orders, { menu_id: 0, quantity: 0 }])}>Add Order</Button>
    </>
}