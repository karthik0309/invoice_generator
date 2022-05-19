export type invoiceType={
    invoiceName:string,
    transactionName:string,
    amount:number,
    date:string,
    description:descriptionType[]
}

export type descriptionType={
    name:string,
    price:number,
    quantity:number,
    total:number
}

export type invoiceBillType = {
    description:any[],
    state:string,
    invoiceDetails:invoiceType,
    currDescription:descriptionType,
    setInvoiceDetails:(e:any) => void,
    setCurrDescription:(e:any) => void
}

export type optionType={
    state:string,
    invoiceName:string,
    handleOption:(e:any)=>void,
    handleChange:()=>void,
    handleSaveInvoice:()=>void,
    handleExportPDF:()=>void
}

export type savedInvoiceType = {
    invoiceDetails:invoiceType,
}
