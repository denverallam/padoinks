import React, { ReactNode } from 'react';
import { Grid } from '../Grid';


interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    text: string;
}

interface FormItemProps {
    children: ReactNode
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: ReactNode
}


interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode
}


interface OptionsProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    children: ReactNode
}

const FormItem: React.FC<FormItemProps> = ({ children }) => {
    return (
        <Grid className='gap-2'>
            {children}
        </Grid>
    )
}


const Label: React.FC<LabelProps> = ({ text, ...props }) => {
    return (
        <label className={`text-lg`} {...props}>
            {text}
        </label>
    );
};



const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input className='p-4 border-2 border-gray-100 rounded-md' {...props} />
    )
}


const Select: React.FC<SelectProps> = ({ children, ...restProps }) => {
    return (
        <select {...restProps} className='p-4 border-2 border-gray-100 rounded-md'>
            {children}
        </select>
    )
}


const Option: React.FC<OptionsProps> = ({ children, ...restProps }) => {
    return (
        <option {...restProps} >
            {children}
        </option>
    )
}

const Form: React.FC<FormProps> = ({ children, className, ...props }) => {
    return (
        <form className={`grid gap-4 ${className}`} {...props}>
            {children}
        </form>
    )
}



const CustomForm = { Input, Select, FormItem, Label, Form, Option }

export default CustomForm