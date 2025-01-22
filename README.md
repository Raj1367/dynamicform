# DynamicForm Component

`DynamicForm` is a reusable React component built using the Ant Design library. It dynamically generates form fields based on a predefined schema, making it highly configurable and versatile for various use cases.

---

## Features

- **Dynamic Field Rendering**: Supports various field types such as text, number, email, select, radio, checkbox, date, textarea, and more.
- **Validation**: Includes built-in validation for required fields and email formats.
- **Flexible Layout**: Utilizes Ant Design's responsive `Row` and `Col` for layout control.
- **Customizable**: Allows for dynamic configurations like default values, placeholders, options, and more.
- **Actions**: Provides save and cancel buttons for form submission or cancellation.

---

## Technologies Used

- **React**: For building the UI components.
- **Ant Design**: For UI components and form handling.
- **Moment.js**: For handling date values.
- **TypeScript**: For type safety and better developer experience.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

The `DynamicForm` component is designed to render forms based on a schema object. Below is an example of how to use the component:

### Example Schema

```typescript
const fieldData = {
  fields: [
    {
      span: 12,
      name: "username",
      label: "Username",
      type: "text",
      required: true,
      placeholder: "Enter your username",
    },
    {
      span: 12,
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter your email",
    },
    {
      span: 12,
      name: "dob",
      label: "Date of Birth",
      type: "date",
      required: true,
    },
  ],
};
```

### Rendering the Component

```tsx
import React from "react";
import DynamicForm from "./DynamicForm";

const App = () => {
  return (
    <div>
      <h1>Dynamic Form Example</h1>
      <DynamicForm fields={fieldData.fields} />
    </div>
  );
};

export default App;
```

---

## Folder Structure

```
.
├── src
│   ├── components
│   │   └── DynamicForm.tsx
│   ├── utils
│   │   └── updatedFields.ts
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
└── README.md
```

---

## Customization

### Field Types
Supported `FieldType` values:
- `"text"`
- `"email"`
- `"number"`
- `"checkbox"`
- `"radio"`
- `"select"`
- `"textarea"`
- `"date"`
- `"switch"`

### FieldSchema
Each field is defined using the `FieldSchema` interface:
```typescript
interface FieldSchema {
  span: number;
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: FieldOption[];
  placeholder?: string;
  defaultvalue?: string | number | boolean;
  validation?: (rule: any, value: any) => Promise<void>;
  disabled?: boolean;
  checked?: boolean;
}
```

### Example Field with Options
```typescript
{
  span: 12,
  name: "gender",
  label: "Gender",
  type: "radio",
  options: [
    { id: 1, value: "Male" },
    { id: 2, value: "Female" },
  ],
  required: true,
}
```

---

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests for enhancements and bug fixes.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

## Contact

For further questions or support, contact [your-email@example.com](mailto:your-email@example.com).


