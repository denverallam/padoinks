
export interface Menu {
    id?: number
    name: string
    price: number
}

export interface Order {
    id?: number
    menu_id: number
    quantity: number
}

export interface OrderMenu extends Order {
    menu: Menu
}

export interface SpreadOrder extends Order, Menu {

}

export interface Column<T> {
    name: string;
    key: keyof T;
}

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

export type ClientType = 'server' | 'client'

export interface Action { label: string; onClick: (id: number) => void; variant?: ButtonVariant }
