import React from "react";
import {
    Form,
    Switch,
    Checkbox,
    Button,
    Row,
    Col,
    Input,
    AutoComplete,
    InputNumber,
    DatePicker,
    Select,
    Flex,
    message,
} from "antd";
import { ArrowLeftOutlined, DeleteOutlined, PlusOutlined, PlusSquareFilled, SaveOutlined, UnorderedListOutlined } from "@ant-design/icons";
import filedData from "../Utils/Fields";
import moment from "moment";
import FormItem from "antd/es/form/FormItem";

const Test: React.FC = () => {
    const [form] = Form.useForm();

    // Handle form submission
    const handleSubmit = (values: any) => {
        setTimeout(() => {
            message.success("form submitted successfully")
        }, 1000)
        console.log("Form Values:", values);
        form.resetFields();
    };

    // Handle submission failure
    const handleFailure = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div style={{ padding: "10px" }}>
            <Flex justify="space-between" align="center">
                <Col><p style={{ fontSize: "20px" }}>Create Fuel Voucher</p></Col>
                <Flex gap={10}>
                    <Button type="primary" icon={<UnorderedListOutlined />} />
                    <Button type="primary" icon={<PlusSquareFilled />} />
                </Flex>
            </Flex>
            <Row justify="center">
                <Col span={24}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        onFinishFailed={handleFailure}
                        initialValues={{
                            ["supplier"]: "FREEPOINT",
                            ["shipped From Terminal"]: "ET Twin Oaks",
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
                            ["product"]: "HO-TwnO Sunoco-Freepoint"
                        }}
                    >
                        {/* Form Fields */}
                        <Row gutter={[16, 16]}>
                            {filedData.fields.map((field) => {
                                switch (field.type) {
                                    case "text":
                                        return (
                                            <Col key={field.name} span={6}>
                                                <Form.Item
                                                    label={field.label}
                                                    name={field.name}
                                                    rules={[
                                                        {
                                                            required: field.required,
                                                            message: field.message,
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        placeholder={field.placeholder}
                                                        defaultValue={field.defaultvalue}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        );

                                    case "autocomplete":
                                        return (
                                            <Col key={field.name} span={6}>
                                                <Form.Item
                                                    label={field.label}
                                                    name={field.name}
                                                    rules={[
                                                        {
                                                            required: field.required,
                                                            message: field.message,
                                                        },
                                                    ]}
                                                >
                                                    <AutoComplete
                                                        options={field.options}
                                                        placeholder={field.placeholder}
                                                        defaultValue={field.defaultvalue}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        );

                                    case "select":
                                        return (
                                            <Col key={field.name} span={6}>
                                                <Form.Item
                                                    label={field.label}
                                                    name={field.name}
                                                    rules={[
                                                        {
                                                            required: field.required,
                                                            message: field.message,
                                                        },
                                                    ]}
                                                >
                                                    <Select
                                                        options={field.options}
                                                        placeholder={field.placeholder}
                                                        defaultValue={field.defaultvalue}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        );

                                    case "date":
                                        return (
                                            <Col key={field.name} span={6}>
                                                <Form.Item
                                                    label={field.label}
                                                    name={field.name}
                                                    rules={[
                                                        {
                                                            required: field.required,
                                                            message: field.message,
                                                        },
                                                    ]}
                                                >
                                                    <DatePicker style={{ width: "100%" }} placeholder={field.placeholder} />
                                                </Form.Item>
                                            </Col>
                                        );

                                    case "checkbox":
                                        return (
                                            <Col key={field.name} span={6}>
                                                <Form.Item
                                                    name={field.name}
                                                    valuePropName="checked"
                                                >
                                                    <Checkbox>{field.label}</Checkbox>
                                                </Form.Item>
                                            </Col>
                                        );

                                    case "switch":
                                        return (
                                            <Col key={field.name} span={6}>
                                                <Form.Item
                                                    label={field.label}
                                                    name={field.name}
                                                    valuePropName="checked"
                                                >
                                                    <Switch defaultChecked={field.checked} />
                                                </Form.Item>
                                            </Col>
                                        );

                                    default:
                                        return null;
                                }
                            })}
                        </Row>

                        <div>
                            <Row justify="space-between">
                                <Col>
                                    <span style={{ fontWeight: 500 }}>Product Charges</span>
                                </Col>
                                <Col span={6}>
                                    <Flex gap={10}>
                                        <Checkbox />
                                        <label htmlFor="">Copy BOL and Datetime</label>
                                    </Flex>
                                </Col>
                            </Row>

                            {/* Product Charges */}
                            <Row gutter={[5, 5]} style={{ marginTop: "10px", position: "relative" }}>
                                {filedData.productCharges.map((product) => {
                                    switch (product.type) {
                                        case "text":
                                            return (
                                                <Col key={product.name} span={4}>
                                                    <span style={{ fontWeight: "600" }}>{product.label}</span>
                                                    <Form.Item name={product.name}>
                                                        <Input
                                                            placeholder={product.placeholder}
                                                            defaultValue={product.defaultvalue}
                                                        />
                                                    </Form.Item>

                                                </Col>
                                            );

                                        case "date":
                                            return (
                                                <Col key={product.name} span={3}>
                                                    <span style={{ fontWeight: "600" }}>{product.label}</span>
                                                    <Form.Item name={product.name}>
                                                        <DatePicker style={{ width: "100%" }} placeholder={product.placeholder} />
                                                    </Form.Item>
                                                </Col>
                                            );

                                        case "number":
                                            return (
                                                <Col key={product.name} span={2}>
                                                    <span style={{ fontWeight: "600" }} >{product.label}</span>
                                                    <Form.Item name={product.name}>
                                                        <InputNumber
                                                            min={1}
                                                            max={10}
                                                            defaultValue={product.defaultvalue}
                                                            disabled={product.disabled}
                                                            style={{ width: "100%" }}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            );

                                        default:
                                            return null;
                                    }
                                })}

                                <Col span={1} style={{ position: 'absolute', right: "0px", top: "-36px" }}>
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


                        <div style={{ marginTop: "15px" }}>
                            <span style={{ fontWeight: 500 }}>Other Charges</span>
                            {/* Other Charges */}
                            <Row gutter={[5, 5]} style={{ marginTop: "10px", position: "relative" }}>
                                {filedData.OtherCharges.map((other) => {
                                    switch (other.type) {
                                        case "text":
                                            return (
                                                <Col key={other.name} span={7}>
                                                    <span style={{ fontWeight: "600" }}>{other.label}</span>
                                                    <Form.Item name={other.name}>
                                                        <Input
                                                            placeholder={other.placeholder}
                                                            defaultValue={other.defaultvalue}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            );

                                        case "select":
                                            return (
                                                <Col key={other.name} span={6}>
                                                    <span style={{ fontWeight: "600" }}>{other.label}</span>
                                                    <Form.Item name={other.name}>
                                                        <Select style={{ width: "100%" }}
                                                            options={other.options}
                                                            placeholder={other.placeholder}
                                                            defaultValue={other.defaultvalue}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                            );

                                        case "number":
                                            return (
                                                <Col key={other.name} span={2}>
                                                    <span style={{ fontWeight: "600" }} >{other.label}</span>
                                                    <FormItem name={other.name}>
                                                        <InputNumber
                                                            min={1}
                                                            max={10}
                                                            defaultValue={other.defaultvalue}
                                                            disabled={other.disabled}
                                                            style={{ width: "100%" }}
                                                        />
                                                    </FormItem>
                                                </Col>
                                            );

                                        default:
                                            return null;
                                    }
                                })}

                                <Col span={1} style={{ position: 'absolute', right: "0px", top: "-36px" }} >
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

                        {/* Form Actions */}
                        <Row justify="end" gutter={[16, 16]} style={{ marginTop: "20px" }}>
                            <Col>
                                <Button type="primary" htmlType="submit">
                                    <SaveOutlined />
                                    <span> Save</span>
                                </Button>
                            </Col>
                            <Col>

                                <Button type="default">
                                    <ArrowLeftOutlined />
                                    <span>Cancel</span>
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Test;
