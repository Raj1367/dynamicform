
interface FieldOption {
    id: number | string;
    value: string;
}

interface FieldSchema {
    span: number;
    name: string;
    label: string;
    type: | "text"
    | "number"
    | "email"
    | "checkbox"
    | "radio"
    | "select"
    | "textarea"
    | "autocomplete"
    | "date"
    | "switch"
    | undefined,
    required?: boolean;
    options?: FieldOption[];
    placeholder?: string;
    defaultvalue?: string | number;
    validation?: (rule: any, value: any) => Promise<void>;
    disabled?: boolean
    checked?: boolean
}

interface FormSchema {
    fields: FieldSchema[];
    productCharges: FieldSchema[]
    otherCharges: FieldSchema[]
    total: FieldSchema[]
}


export const filedData: FormSchema = {

    fields: [
        {
            name: 'supplier',
            label: 'Supplier',
            type: 'autocomplete',
            required: true,
            options: [
                { id: 1, value: 'Valero' },
                { id: 2, value: 'Citgo' },
                { id: 3, value: 'Marathon' },
                { id: 4, value: 'Shell' },
            ],
            defaultvalue: "FREEPOINT",
            span: 6
        },

        {
            name: 'shipped from terminal',
            label: 'Shipped from terminal',
            type: 'autocomplete',
            required: true,
            options: [
                { id: 1, value: 'Motiva Enterprises LLC-1' },
                { id: 2, value: 'Phillips 66 PL - Pasadena' },
                { id: 3, value: 'Magellan Pipeline Company L.P.-6' },
                { id: 4, value: 'KM Liquids Terminals LLC' },
            ],
            defaultvalue: "ET Twin Oaks",
            span: 6
        },

        {
            name: 'shipped via',
            label: 'Shipped via',
            type: 'autocomplete',
            placeholder: 'Search shipper',
            required: true,
            options: [
                { id: 1, value: 'TTE Company ' },
                { id: 2, value: 'Always Energy 2' },
                { id: 3, value: 'Sunoco Company' },
                { id: 4, value: 'Campbell Oil' },
            ],
            span: 6
        },

        {
            name: 'terms',
            label: 'Terms',
            type: 'autocomplete',
            placeholder: 'Search supplier name',
            required: true,
            options: [
                { id: 1, value: 'Net day 1 ' },
                { id: 2, value: 'Net day 7' },
                { id: 3, value: 'Net day 10' },
                { id: 4, value: 'Net day 15' },
            ],
            defaultvalue: "COD",
            span: 6
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
            defaultvalue: "pennsylvania[E]",
            span: 6
        },


        {
            name: 'ref #',
            label: 'Ref #',
            type: 'text',
            placeholder: "PO number",
            span: 6
        },

        {
            name: 'invoice number',
            label: 'Invoice number',
            type: 'text',
            required: true,
            span: 7
        },

        {
            name: 'invoice date',
            label: 'Invoice Date',
            type: 'date',
            placeholder: 'Enter invoice date',
            required: true,
            span: 6
        },

        {
            name: 'due date',
            label: 'Due date',
            type: 'date',
            placeholder: 'Enter invoice date',
            required: true,
            defaultvalue: "2025-01-16",
            span: 6
        },

        {
            name: 'disc due date',
            label: 'Disc tax due date',
            type: 'date',
            placeholder: 'Disc tax due date',
            span: 6

        },

        {
            name: 'posting date',
            label: 'Posting Date',
            type: 'date',
            placeholder: 'Enter invoice date',
            required: true,
            defaultvalue: "2025-01-16",
            span: 6
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
            span: 6
        },

        {
            name: 'payment on hold',
            label: 'Payment on hold',
            type: 'switch',
            checked: false,
            span: 6
        },

        {
            name: 'contract number',
            label: 'Contract number',
            type: 'text',
            placeholder: "Contract number",
            span: 7
        },

        {
            name: 'differed invoice number',
            label: 'Differed invoice number',
            type: 'text',
            placeholder: "Differed invoice number",
            span: 6
        },


        {
            name: 'deferred tax due date',
            label: 'Deferred tax due date',
            type: 'date',
            placeholder: 'Deferred tax due date',
            span: 6
        },


    ],

    productCharges: [
        // {
        //     name: "copy BOL and DateTime",
        //     label: "Copy BOL and DateTime",
        //     type: "checkbox",
        //     span:20
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
            span: 4
        },
        {
            name: "bill of landing",
            label: "Bill of landing",
            placeholder: "Bill of landing",
            type: "text",
            span: 4
        },
        {
            name: "pickup date",
            label: "Pickup date",
            placeholder: "pickup date",
            type: 'date',
            span: 3
        },
        {
            name: "gross quantity",
            label: "Gross quantity",
            type: "number",
            defaultvalue: 0,
            span: 2
        },
        {
            name: "net quantity",
            label: "Net quantity",
            type: "number",
            defaultvalue: 0,
            span: 2
        },
        {
            name: "product rate",
            label: "Rate",
            type: "number",
            defaultvalue: 0,
            span: 2
        },
        {
            name: "product taxes",
            label: "Taxes",
            type: "number",
            disabled: true,
            defaultvalue: 0,
            span: 2
        },
        {
            name: "def taxes",
            label: "Def taxes",
            type: "number",
            disabled: true,
            defaultvalue: 0,
            span: 2
        },
        {
            name: "product line total",
            label: "Line total",
            type: "number",
            disabled: true,
            defaultvalue: 0,
            span: 2

        }
    ],

    otherCharges: [
        {
            name: 'description',
            label: 'Description',
            type: 'text',
            placeholder: "Description",
            span: 6
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
            placeholder: 'Search chart of account',
            span: 6
        },
        {
            name: "quantity",
            label: "Quantity",
            type: "number",
            defaultvalue: 0,
            span: 3
        },
        {
            name: "others rate",
            label: "Rate",
            type: "number",
            defaultvalue: 0,
            span: 2
        },
        {
            name: "disc",
            label: "Disc",
            type: "number",
            defaultvalue: 0,
            span: 2
        },
        {
            name: "others taxes",
            label: "Taxes",
            type: "number",
            defaultvalue: 0,
            span: 2
        },

        {
            name: "others line total",
            label: "Line total",
            type: "number",
            disabled: true,
            defaultvalue: 0,
            span: 2
        }
    ],

    total: [
        {
            name: "sub total",
            label: "Sub total",
            type: "text",
            disabled: true,
            defaultvalue: 0,
            span: 12
        },
        {
            name: "taxes",
            label: "Taxes",
            type: "text",
            disabled: true,
            defaultvalue: 0,
            span: 12
        },
        {
            name: "total",
            label: "Total",
            type: "text",
            disabled: true,
            defaultvalue: 0,
            span: 12
        }
    ]

}

export default filedData