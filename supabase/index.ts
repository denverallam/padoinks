'use server'

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const createClient = async () => {
    const cookieStore = await cookies()
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        },
    );

}




export const getAllRecords = async <T>(tableName: string, query: string = '*') => {
    const supabase = await createClient()
    const { data, error } = await supabase.from(tableName).select(query)
    return { data: data as T, error }
}

export const getRecord = async<T>(tableName: string, id: string, query: string = '*') => {
    const supabase = await createClient()
    const { data, error } = await supabase.from(tableName).select(query).eq('id', id).single()
    return { data: data as T, error }
}


export const createRecord = async<T>(tableName: string, item: T) => {
    const supabase = await createClient()
    const { data, error } = await supabase.from(tableName).insert(item)
    return { data, error }
}

export const updateRecord = async<T>(tableName: string, id: string, item: T) => {
    const supabase = await createClient()
    const { data, error } = await supabase.from(tableName).update(item).eq('id', id)
    return { data, error }
}

export const deleteRecord = async (tableName: string, id: number) => {
    const supabase = await createClient()

    const { data, error } = await supabase.from(tableName).delete().eq('id', id)

    return { data, error }
}