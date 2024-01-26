import * as React from 'react';
import {FieldData, Rule} from "rc-field-form/lib/interface";
import {LabelTooltipType} from "antd/es/form/FormItemLabel";
import {useForm} from 'antd/es/form/Form'

export interface FormType {
    /**
     * @desc Form children
     */
    children: JSX.Element | JSX.Element[];
    /**
     * @desc Form submit handler
     * @param values
     */
    onSubmit?: (values: any) => void;
    /**
     * @desc Trigger when field updated
     * @param changedFields
     * @param allFields
     */
    onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void;
    /**
     * @desc Trigger after submitting the form and verifying data failed
     * @param errorInfo
     */
    onSubmitFailed?: (errorInfo: any) => void;
    /**
     * @desc Form name. Will be the prefix of Field id
     */
    name?: string;
    className?: string;
    style?: React.CSSProperties;
    /**
     * @desc Initial values of fields
     */
    initialValues?: object;
    form?: any;
    layout?:any;
    
}

export interface LabelType {
    /**
     * @desc Label children
     */
    children: JSX.Element | JSX.Element[];
    /**
     * @desc Label name
     */
    name: string;
    /**
     * @desc Label text
     */
    label?: string;
    /**
     * @desc Rules for field validation.
     * @see https://ant.design/components/form#rule
     */
    rules?: Rule[];
    /**
     * @desc Config tooltip info
     */
    tooltip?: LabelTooltipType;
    className?: string;
    style?: React.CSSProperties;
    /**
     * @desc Props of children node, for example, the prop of Switch is 'checked'. This prop is an encapsulation of getValueProps, which will be invalid after customizing getValueProps
     */
    valuePropName?: string;
    initialValue?: any;
}