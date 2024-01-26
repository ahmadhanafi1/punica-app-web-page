import React, {forwardRef} from 'react';
import {Form as AntForm} from 'antd'
import {FormType} from "./formTypes";

const Form = forwardRef(({children, name, onSubmit, onSubmitFailed, onFieldsChange, className, style, initialValues, form, layout="vertical"}: FormType, ref) => {

    return (
        <AntForm
            // @ts-ignore
            ref={ref}
            name={name}
            onFinish={onSubmit}
            onFieldsChange={onFieldsChange}
            onFinishFailed={onSubmitFailed}
            className={className}
            style={style}
            initialValues={initialValues}
            form={form}
            layout={layout}
        >
            {children}
        </AntForm>
    );
});

export default Form;