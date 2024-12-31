import React, { FC } from 'react'
import CustomForm from '../CustomForm'
import { Types } from '@/common'

interface MenuFormProps {
    value?: Types.Menu
}

export const MenuForm: FC<MenuFormProps> = ({ value }) => {
    return (
        <>
            <input type='hidden' id="id" name='id' value={value?.id} />
            <CustomForm.FormItem>
                <CustomForm.Label id='name' text='Name' htmlFor='name' />
                <CustomForm.Input id='name' name='name' placeholder='Name' defaultValue={value?.name} required />
            </CustomForm.FormItem>

            <CustomForm.FormItem>
                <CustomForm.Label id='price' text='Price' htmlFor='price' />
                <CustomForm.Input id='price' name='price' placeholder='Price' defaultValue={value?.price} required />
            </CustomForm.FormItem>
        </>
    )
}
