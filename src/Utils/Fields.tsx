export interface FieldType {
    name: string;
    label: string;
    type?: 'text' | 'number' | 'email' | 'select' | 'checkbox' | 'date' | 'textarea' | 'switch' | "radio" | 'autocomplete';
    options?: { id: string | number; value: string; }[] | undefined;
    required?: boolean;
    message?: string;
    placeholder?: string;
    defaultvalue?: string | number;
    disabled?: boolean
    checked?: boolean
}

interface FormSchema {
    fields: FieldType[];
    productCharges: FieldType[]
    OtherCharges: FieldType[]
    total: FieldType[]
}


export const filedData: FormSchema = {

    fields: [
        {
            name: 'supplier',
            label: 'Supplier',
            type: 'autocomplete',
            required: true,
            message: "supplier name is required",
            options: [
                { id: 1, value: 'Valero' },
                { id: 2, value: 'Citgo' },
                { id: 3, value: 'Marathon' },
                { id: 4, value: 'Shell' },
            ],
            defaultvalue: "FREEPOINT"
        },

        {
            name: 'shipped From Terminal',
            label: 'Shipped From Terminal',
            type: 'autocomplete',
            required: true,
            options: [
                { id: 1, value: 'Motiva Enterprises LLC-1' },
                { id: 2, value: 'Phillips 66 PL - Pasadena' },
                { id: 3, value: 'Magellan Pipeline Company L.P.-6' },
                { id: 4, value: 'KM Liquids Terminals LLC' },
            ],
            defaultvalue: "ET Twin Oaks"
        },

        {
            name: 'shipped via',
            label: 'Shipped via',
            type: 'autocomplete',
            placeholder: 'Search shipper',
            required: true,
            message: 'Please select a shipper!',
            options: [
                { id: 1, value: 'TTE Company ' },
                { id: 2, value: 'Always Energy 2' },
                { id: 3, value: 'Sunoco Company' },
                { id: 4, value: 'Campbell Oil' },
            ],
        },

        {
            name: 'terms',
            label: 'Terms',
            type: 'autocomplete',
            placeholder: 'Search supplier name',
            required: true,
            message: 'Please select a term!',
            options: [
                { id: 1, value: 'Net day 1 ' },
                { id: 2, value: 'Net day 7' },
                { id: 3, value: 'Net day 10' },
                { id: 4, value: 'Net day 15' },
            ],
            defaultvalue: "COD",
        },

        {
            name: 'tax state',
            label: 'Tax state',
            type: 'autocomplete',
            required: true,
            options: [
                { id: 1, value: 'Motiva Enterprises LLC-1' },
                { id: 2, value: 'Citgo' },
                { id: 3, value: 'Marathon' },
                { id: 4, value: 'Shell' },
            ],
            defaultvalue: "pennsylvania[E]"
        },


        {
            name: 'ref #',
            label: 'Ref #',
            type: 'text',
            placeholder: "PO number"
        },

        {
            name: 'invoice number',
            label: 'Invoice number',
            type: 'text',
            required: true,
        },

        {
            name: 'invoice date',
            label: 'Invoice Date',
            type: 'date',
            placeholder: 'Enter invoice date',
            required: true,
        },

        {
            name: 'payment Method',
            label: 'Payment Method',
            type: 'select',
            placeholder: 'select payment method',
            required: true,
            defaultvalue: "Cheque",
            options: [
                { id: 1, value: 'card' },
            ],
        },

        {
            name: 'differed invoice number',
            label: 'Differed invoice number',
            type: 'text',
            placeholder: "Differed invoice number"
        },

        {
            name: 'due date',
            label: 'Due date',
            type: 'date',
            placeholder: 'Enter invoice date',
            required: true,
            defaultvalue: "2025-01-16"
        },


        {
            name: 'payment on hold',
            label: 'Payment on hold',
            type: 'switch',
            checked: false
        },

        {
            name: 'deferred tax due date',
            label: 'Deferred tax due date',
            type: 'date',
            placeholder: 'Deferred tax due date',
        },

        {
            name: 'disc due date',
            label: 'Disc tax due date',
            type: 'date',
            placeholder: 'Disc tax due date',

        },

        {
            name: 'contract number',
            label: 'Contract number',
            type: 'text',
            placeholder: "Contract number"
        },

        {
            name: 'posting date',
            label: 'Posting Date',
            type: 'date',
            placeholder: 'Enter invoice date',
            required: true,
            defaultvalue: "2025-01-16"
        },
    ],

    productCharges: [

        // {
        //     name: "copy BOL and DateTime",
        //     label: "Copy BOL and DateTime",
        //     type: "checkbox"
        // },

        {
            name: "product",
            label: "Product",
            options: [
                { id: 1, value: 'Payment Account' },
                { id: 2, value: 'Vendor Account' },
                { id: 3, value: 'Sales Account' },
                { id: 4, value: 'Purchase Account' },
            ],
            type: "text",
            defaultvalue: "HO-TwnO Sunoco-Freepoint",
        },
        {
            name: "bill of landing",
            label: "Bill of landing",
            placeholder: "Bill of landing",
            type: "text"
        },
        {
            name: "pickup date",
            label: "Pickup date",
            placeholder: "pickup date",
            type: 'date',
        },
        {
            name: "gross quantity",
            label: "Gross quantity",
            type: "number",
            defaultvalue: 0
        },
        {
            name: "net quantity",
            label: "Net quantity",
            type: "number",
            defaultvalue: 0
        },
        {
            name: "product rate",
            label: "Rate",
            type: "number",
            defaultvalue: 0
        },
        {
            name: "product taxes",
            label: "Taxes",
            type: "number",
            disabled: true,
            defaultvalue: 0
        },
        {
            name: "def taxes",
            label: "Def taxes",
            type: "number",
            disabled: true,
            defaultvalue: 0
        },
        {
            name: "product line total",
            label: "Line total",
            type: "number",
            disabled: true,
            defaultvalue: 0
        }
    ],

    OtherCharges: [
        {
            name: 'description',
            label: 'Description',
            type: 'text',
            placeholder: "Description"
        },
        {
            name: "chart of Account",
            label: "Chart of Account",
            options: [
                { id: 1, value: 'Payment Account' },
                { id: 2, value: 'Vendor Account' },
                { id: 3, value: 'Sales Account' },
                { id: 4, value: 'Purchase Account' },
            ],
            type: "select",
            placeholder: 'Search chart of account'
        },
        {
            name: "quantity",
            label: "Quantity",
            type: "number",
            defaultvalue: 0
        },
        {
            name: "others rate",
            label: "Rate",
            type: "number",
            defaultvalue: 0
        },
        {
            name: "disc",
            label: "Disc",
            type: "number",
            defaultvalue: 0
        },
        {
            name: "others taxes",
            label: "Taxes",
            type: "number",
            defaultvalue: 0
        },

        {
            name: "others line total",
            label: "Line total",
            type: "number",
            disabled: true,
            defaultvalue: 0
        }
    ],

    total: [
        {
            name: "sub total",
            label: "Sub total",
            type: "text",
            disabled: true,
            defaultvalue: 0
        },
        {
            name: "taxes",
            label: "Taxes",
            type: "text",
            disabled: true,
            defaultvalue: 0
        },
        {
            name: "total",
            label: "Total",
            type: "text",
            disabled: true,
            defaultvalue: 0
        }
    ]

}

export default filedData