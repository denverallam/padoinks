

export const formatToPesos = (amount: number) => {
    const formatter = new Intl.NumberFormat('en-PH',
        { style: 'currency', currency: 'PHP', minimumFractionDigits: 2 }
    );
    return formatter.format(amount)
}
