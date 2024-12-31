'use client';

import { deleteItem } from '@/app/actions/menu';
import { Types } from '@/common';
import { redirect } from 'next/navigation';
import React from 'react';
import { Table } from '../Table';



interface ClientTableWrapperProps<T> {
    tableName: string
    data: T[];
    columns: Types.Column<T>[];
    footer?: React.ReactNode
}

const ClientTableWrapper: React.FC<ClientTableWrapperProps<Partial<Types.SpreadOrder>>> = ({ tableName, data, columns, footer }) => {

    const actions: Types.Action[] = [
        {
            label: 'Edit',
            onClick: (id: number) => {
                redirect(`/${tableName}/${id}/update`)
            }

        },
        {
            label: 'Delete',
            variant: 'danger',
            onClick: async (id: number) => {
                await deleteItem(tableName, id);
            }
        }
    ]

    return <Table data={data} columns={columns} actions={actions} footer={footer} />;
};

export default ClientTableWrapper;
