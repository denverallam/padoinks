'use server'

import { Routes, Types } from "@/common"
import { createRecord, deleteRecord, updateRecord } from "@/supabase"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const addItem = async (formData: FormData) => {
    const name = formData.get('name') as string
    const price = formData.get('price') as string

    const menu: Types.Menu = {
        name,
        price: parseInt(price)
    }

    await createRecord('menu', menu);
    redirect(Routes.MENU_PAGE)
}

export const updateItem = async (formData: FormData) => {
    const id = formData.get('id') as string
    const name = formData.get('name') as string
    const price = formData.get('price') as string

    const menu: Types.Menu = {
        id: parseInt(id),
        name,
        price: parseInt(price)
    }

    await updateRecord('menu', id, menu);
    redirect(Routes.MENU_PAGE)
}

export const deleteItem = async (tableName: string, id: number) => {
    await deleteRecord(tableName, id);
    revalidatePath(`/${tableName}`)
}