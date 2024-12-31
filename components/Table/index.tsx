'use client'

import { Types } from '@/common';
import { FC } from 'react';
import { Button } from '../Button';


interface TableProps<T> {
    data: T[];
    columns: Types.Column<T>[];
    actions?: Types.Action[]
    footer?: React.ReactNode
}

export const Table: FC<TableProps<Partial<Types.SpreadOrder>>> = ({ data, columns, actions, footer }) => {

    return (
        <table className='w-full'>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.name}</th>
                    ))}
                    {actions && <th>Actions</th>}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className='text-center'>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>{row[column.key]}</td>
                        ))}
                        {
                            actions && <td>
                                {actions.map((action, actionIndex) => (
                                    <Button {...(action.variant && { variant: action.variant })} key={actionIndex} onClick={() => action.onClick(row.id!)}>{action.label}</Button>
                                ))}
                            </td>
                        }
                    </tr>
                ))}
            </tbody>
            {
                footer && footer
            }
        </table >
    );
};
