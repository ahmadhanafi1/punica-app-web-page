import React from 'react';
import {Form, ConfigProvider} from 'antd'
import {LabelType} from "./formTypes";

const Label = ({children, rules, name, label, tooltip, className, style, valuePropName, initialValue}: LabelType) => {

    return (
        <ConfigProvider>
            <Form.Item
                label={label}
                name={name}
                tooltip={tooltip}
                rules={rules}
                valuePropName={valuePropName}
                className={className}
                style={style}
                initialValue={initialValue}
            >
                {children}
            </Form.Item>
        </ConfigProvider>
    );
};

export default Label;