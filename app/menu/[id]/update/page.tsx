import { updateItem } from '@/app/actions/menu'
import { Constants, Types } from '@/common'
import { Button } from '@/components/Button'
import CustomForm from '@/components/CustomForm'
import { MenuForm } from '@/components/MenuForm'
import { getRecord } from '@/supabase'

const UpdateMenuPage = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const id = (await params).id
    const { data } = await getRecord<Types.Menu>('menu', id)

    return (
        <CustomForm.Form className='place-items-center' action={updateItem}>
            <MenuForm value={data} />
            <Button type='submit'>{Constants.UPDATE_ITEM}</Button>
        </CustomForm.Form>
    )
}

export default UpdateMenuPage