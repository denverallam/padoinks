'use server'

import { Routes, Types } from "@/common";
import { createRecord, updateRecord } from "@/supabase";
import { redirect } from "next/navigation";

export const createOrder = async (formData: FormData) => {
    const menu_ids = formData.getAll('menu_id') as string[]
    const quantities = formData.getAll('quantity') as string[]

    const orders = menu_ids.map((menu_id, index) => {
        return {
            menu_id: parseInt(menu_id),
            quantity: parseInt(quantities[index]),
        }
    })

    await createRecord<Types.Order[]>('orders', orders)
    redirect(Routes.ORDERS_PAGE)
}


export const updateOrder = async (formData: FormData) => {
    const id = formData.get('id') as string
    const menu_id = formData.get('menu_id') as string
    const quantity = formData.get('quantity') as string

    const order = {
        id: parseInt(id),
        menu_id: parseInt(menu_id),
        quantity: parseInt(quantity),
    }

    await updateRecord('orders', id, order);
    redirect(Routes.ORDERS_PAGE)
}
