'use server'

import { addItem } from '@/app/actions/menu'
import { Constants } from '@/common'
import { Button } from '@/components/Button'
import CustomForm from '@/components/CustomForm'
import { MenuForm } from '@/components/MenuForm'

const AddMenuPage = async () => {
    return (
        <CustomForm.Form className='place-items-center' action={addItem}>
            <MenuForm />
            <Button type='submit'>{Constants.ADD_ITEM}</Button>
        </CustomForm.Form>
    )
}

export default AddMenuPage