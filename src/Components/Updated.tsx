import React from "react";
import {
    Form,
    Input,
    Select,
    Button,
    Checkbox,
    Radio,
    AutoComplete,
    InputNumber,
    message,
    Row,
    Col,
    DatePicker,
    Switch,
    Flex,
} from "antd";
import filedData from "../Utils/updatedFields";
import { ArrowLeftOutlined, DeleteOutlined, PlusOutlined, PlusSquareFilled, SaveOutlined, UnorderedListOutlined } from "@ant-design/icons";
import moment from "moment";
import FormItem from "antd/es/form/FormItem";


type FieldType = "number" | "autocomplete" | "text" | "email" | "checkbox" | "radio" | "select" | "textarea" | "date" | "switch" | undefined;


interface FieldOption {
    id: number | string;
    value: string;
}

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

interface FormSchema {
    fields: FieldSchema[];
}

const DynamicForm: React.FC<FormSchema> = () => {
    const [form] = Form.useForm();

    const handleFinish = (values: any) => {
        console.log("Form Values:", values);
        message.success("Form submitted successfully!");
        form.resetFields();
    };

    const handleFinishFailed = (errorInfo: any) => {
        console.error("Form Errors:", errorInfo);
        message.error("Please correct the errors and try again.");
    };

    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    const renderField = (field: FieldSchema) => {
        const commonProps = {
            name: field.name,
            label: field.label,
            rules: [
                {
                    required: field.required,
                    message: `${field.label} is required`,
                },
            ].filter(Boolean),
        };

        switch (field.type) {
            case "text":
                return (
                    <Col span={field.span} key={field.name}>
                        <Form.Item {...commonProps}>
                            <Input
                                placeholder={field.placeholder}
                                defaultValue={field.defaultvalue as string}
                                disabled={field.disabled}
                            />
                        </Form.Item>
                    </Col>
                );

            case "number":
                return (
                    <Col span={field.span} key={field.name}>
                        <Form.Item {...commonProps}>
                            <InputNumber
                                placeholder={field.placeholder}
                                defaultValue={field.defaultvalue as number}
                                disabled={field.disabled}
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                    </Col>
                );

            case "email":
                return (
                    <Col span={field.span} key={field.name}>
                        <Form.Item
                            {...commonProps}
                            rules={[
                                ...commonProps.rules,
                                {
                                    type: "email",
                                    message: "Please enter a valid email",
                                },
                            ]}
                        >
                            <Input
                                placeholder={field.placeholder}
                                defaultValue={field.defaultvalue as string}
                                disabled={field.disabled}
                            />
                        </Form.Item>
                    </Col>
                );

            case "checkbox":
                return (
                    <Col span={field.span} key={field.name}>
                        <Form.Item name={field.name} valuePropName="checked">
                            <Flex gap={4} justify="center">
                                <Checkbox></Checkbox>
                                <span>{field.label}</span>
                            </Flex>
                        </Form.Item>
                    </Col>
                );

            case "radio":
                return (
                    <Col span={field.span} key={field.name}>
                        <Form.Item {...commonProps}>
                            <Radio.Group defaultValue={field.defaultvalue}>
                                {field.options?.map((option) => (
                                    <Radio key={option.id} value={option.value}>
                                        {option.value}
                                    </Radio>
                                ))}
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                );

            case "select":
                return (
                    <Col span={field.span} key={field.name}>
                        <Form.Item {...commonProps}>
                            <Select
                                placeholder={field.placeholder}
                                defaultValue={field.defaultvalue}
                                disabled={field.disabled}
                            >
                                {field.options?.map((option) => (
                                    <Select.Option key={option.id} value={option.value}>
                                        {option.value}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                );

            case "textarea":
                return (
                    <Col span={field.span} key={field.name}>
                        <Form.Item {...commonProps}>
                            <Input.TextArea
                                placeholder={field.placeholder}
                                defaultValue={field.defaultvalue as string}
                                disabled={field.disabled}
                            />
                        </Form.Item>
                    </Col>
                );

            case "autocomplete":
                return (
                    <Col span={field.span}>
                        <Form.Item {...commonProps}>
                            <AutoComplete
                                options={field.options?.map((option) => ({
                                    value: option.value,
                                }))}
                                placeholder={field.placeholder}
                                defaultValue={field.defaultvalue}
                                disabled={field.disabled}
                            />
                        </Form.Item>
                    </Col>
                );

            case "date":
                return (
                    <Col span={field.span} key={field.name}>
                        <Form.Item {...commonProps}>
                            <DatePicker
                                style={{ width: "100%" }}
                                placeholder={field.placeholder}
                            />
                        </Form.Item>
                    </Col>
                );

            case "switch":
                return (
                    <Col span={field.span} key={field.name}>
                        <Form.Item {...commonProps} valuePropName="checked">
                            <Switch checked={field.checked} onChange={onChange} />
                        </Form.Item>
                    </Col>
                );

            default:
                return null;
        }
    };




    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
            initialValues={{
                ["supplier"]: "FREEPOINT",
                ["shipped from terminal"]: "ET Twin Oaks",
                ["tax state"]: "pennsylvania[E]",
                ["terms"]: "COD",
                ["payment Method"]: "cheque",
                ["gross quantity"]: 0,
                ["net quantity"]: 0,
                ["invoice date"]: moment("2025-01-16"),
                ["due date"]: moment("2025-01-16"),
                ["posting date"]: moment("2025-01-16"),
                ["product rate"]: 0,
                ["product taxes"]: 0,
                ["product line total"]: 0,
                ["others rate"]: 0,
                ["others taxes"]: 0,
                ["others line total"]: 0,
                ["def taxes"]: 0,
                ["quantity"]: 0,
                ["disc"]: 0,
                ["sub total"]: 0,
                ["total"]: 0,
                ["product"]: "HO-TwnO Sunoco-Freepoint",
                ["payment on hold"]: false,
                ["Copy BOL and Datetime"]: true
            }}
        >
            <div>
                <Flex justify="space-between" align="center">
                    <Col><p style={{ fontSize: "20px" }}>Create Fuel Voucher</p></Col>
                    <Flex gap={10}>
                        <Button type="primary" icon={<UnorderedListOutlined />} />
                        <Button type="primary" icon={<PlusSquareFilled />} />
                    </Flex>
                </Flex>

                <Row gutter={[16, 16]}>
                    {filedData.fields.map((field) => renderField(field))}
                </Row>

                <div>
                    <Flex justify="space-between" align="center" gap={2}>
                        <Col>
                            <span style={{ fontWeight: 500 }}>Product Charges</span>
                        </Col>
                        <Col span={6}>
                            <Form.Item name="Copy BOL and Datetime">
                                <Flex gap={4}>
                                    <Checkbox checked={true} />
                                    <span>Copy BOL and Datetime</span>
                                </Flex>
                            </Form.Item>
                        </Col>
                    </Flex>
                    <Row gutter={[5, 5]} style={{ position: "relative", }}>
                        {filedData.productCharges.map((field) => renderField(field))}
                        <Col span={1} style={{ position: 'absolute', right: "0px", top: "-28px" }} >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Button icon={<PlusOutlined />} />
                                <span style={{ margin: "1px 0" }}>Action</span>
                                <Button icon={<DeleteOutlined />} />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div>
                    <span style={{ fontWeight: 500 }}>Other Charges</span>
                    <Row gutter={[5, 5]} style={{ position: "relative", marginTop: "10px" }}>
                        {filedData.otherCharges.map((field) => renderField(field))}
                        <Col span={1} style={{ position: 'absolute', right: "0px", top: "-28px" }} >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Button icon={<PlusOutlined />} />
                                <span style={{ margin: "1px 0" }}>Action</span>
                                <Button icon={<DeleteOutlined />} />
                            </div>
                        </Col>
                    </Row>
                </div>

                <Row justify="end" style={{ margin: "20px 0px" }}>
                    <Flex vertical>
                        {filedData.total.map((data) => {
                            switch (data.type) {
                                case "text":
                                    return (
                                        <Flex justify="space-between" gap={50}>
                                            <span style={{ fontWeight: "600" }}>{data.label}</span>
                                            <FormItem>
                                                <Input
                                                    placeholder={data.placeholder}
                                                    defaultValue={data.defaultvalue}
                                                    style={{ width: "200px" }}
                                                    disabled={data.disabled}
                                                />
                                            </FormItem>
                                        </Flex>
                                    );

                                default:
                                    return null;
                            }
                        })}
                    </Flex>
                </Row>


                <Row justify="end" gutter={[16, 16]} style={{ marginTop: "20px" }}>
                    <Col>
                        <Button type="primary" htmlType="submit">
                            <SaveOutlined /> Save
                        </Button>
                    </Col>

                    <Col>
                        <Button type="default">
                            <ArrowLeftOutlined /> Cancel
                        </Button>
                    </Col>
                </Row>
            </div>
        </Form>

    );
};

export default DynamicForm;
