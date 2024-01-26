import * as React from 'react'
import { LabeledValue } from "antd/es/select";

type OptionType = {
    label: string,
    value: string
    map(element: (option: any, index: number) => JSX.Element): JSX.Element;
}

type General = {
    /**
     * @desc Event handler for change event
     * @param value
     * @param option
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onChange?: (value: string, option: OptionType | OptionType[]) => void,
    /**
     * @desc Event handler for select event
     * @param value
     * @param option
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onSelect?: (value: string | number | LabeledValue, option: OptionType) => void,
    /**
     * @desc Event handler for deselect event
     * @param value
     * @param option
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onDeselect?: (value: string | number | LabeledValue, option: OptionType) => void,
    /**
     * @desc Event handler for clear event
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onClear?: () => void,
    /**
     * @desc Placeholder text
     */
    placeholder?: string,
    /**
     * @desc Input id
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    id?: string;
    /**
     * @desc Whether the input is disabled
     * @default false
     */
    disabled?: boolean,
    /**
     * @desc Input title
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    title?: string,

    /**
     * @desc values preserved in state
     */
    value?: any,

    /**
     * @desc to controll the open and close state of the dropdown
     */
    open?: boolean,

    /**
     * @desc this event handler is used to detect when the Select component loses focus
     */
    onBlur?: () => void,
    className?: string
}

export interface MultiselectType extends General {
    /**
     * @desc Default value
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    defaultValue?: string[] | number[] | LabeledValue[] | string | number | LabeledValue,
    /**
     * @desc Options to be displayed in the dropdown
     */
    options: OptionType[],
}

export interface CheckboxSelectType {
    /**
     * @desc Default value
     */
    defaultValue?: string[] | number[],
    /**
     * @desc Options to be displayed in the dropdown
     */
    options: OptionType[],
    /**
     * @desc Event handler for change event
     */
    onClick?: any,
    /**
     * @desc Placeholder text
     * @default 'Select'
     */
    placeholder?: string,
    /**
     * @desc Whether the input is disabled
     */
    disabledOptions?: string[] | number[],
    /**
     * @desc Input title
     */
    name: string;
    /**
     * @desc You can set the width of the select
     */
    width?: number;
}

export interface SelectType extends General {
    /**
     * @desc Default value
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    defaultValue?: string | number,
    /**
     * @desc Control for search
     * @default true
     */
    showSearch?: boolean,
    /**
     * @desc Options to be displayed in the dropdown
     */
    options: OptionType[],
    /**
     * @desc Suffix icon
     */
    icon?: React.ReactNode,
    /**
     * @desc Using only with new form system. Do net set by yourself.
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    value?: any;
        /**
     * @desc Specify content to show when no result matches
     */
    notFoundContent? : React.ReactNode,
    /**
     * @desc Callback function that is fired when input changed
     */
    onSearch?: (value: string) => void,
}