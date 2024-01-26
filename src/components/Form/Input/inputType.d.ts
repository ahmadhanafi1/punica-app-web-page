import * as React from "react";
import { Dayjs } from "dayjs";
import { Size } from "../../assets/types";
import { Color } from "antd/es/color-picker/color";
import type { DatePickerProps } from 'antd';

export type General = {
    /**
     * @desc Input title
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    title?: string,
    /**
     * @desc Whether the input is disabled
     * @default false
     */
    disabled?: boolean,
    /**
     * @desc Input's placeholder
     */
    placeholder: string,
    /**
     * @desc Callback when user input
     * @param e
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onChange?: any,
    /**
     * @desc The size of the input box.
     * @default 'middle'
     */
    size?: Size,
    /**
     * @desc The ID for input
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    id?: string,
    /**
     * @desc The hint of the input
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    hint?: string,
    className?: string;
}
export type Input = {
    /**
     * @desc The initial input content
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    defaultValue?: string,
    /**
     * @desc Provides a icon to the button
     * @default null
     */
    icon?: React.ReactNode,
    /**
     * @desc The callback function that is triggered when Enter key is pressed
     * @param e
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onPressEnter?: any,
    /**
     * @desc Ref of the input
     * @default null
     */
    ref?: React.Ref<any>
}

export interface InputType extends General, Input {
    /**
     * @desc If allow to remove input content with clear icon
     * @default false
     */
    allowClear?: boolean,
    /**
     * @desc Whether show text count
     * @default false
     */
    showCount?: boolean,
    /**
     * @desc It defines the minimum number of characters (as UTF-16 code units) the user can enter into the entry field. This must be a non-negative integer value smaller than or equal to the value specified by `maxlength`. If no `minlength` is specified, or an invalid value is specified, the input has no minimum length.
     */
    minLength?: number,
    /**
     * @desc It defines the maximum number of characters (as UTF-16 code units) the user can enter into the field. This must be an integer value 0 or higher. If no `maxlength` is specified, or an invalid value is specified, the field has no maximum length.
     */
    maxLength?: number,
    /**
     * @desc Name of the input
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    name?: string,
    /**
     * @desc The type of the input
     * @default 'text'
     */
    type?: 'text' | 'email',
    /**
     * @desc Value of the input
     */
    value?: string
}

export interface NumberInputType extends General, Input {
    /**
     * @desc The min length
     * @default Number.MIN_SAFE_INTEGER
     */
    min?: string | number,
    /**
     * @desc The max length
     * @default Number.MAX_SAFE_INTEGER
     */
    max?: string | number,
    /**
     * @desc The number to which the current value is increased or decreased. It can be an integer or decimal
     * @default 1
     */
    step?: number,
    /**
     * @desc The callback function that is triggered when click up or down buttons
     * @param value
     * @param info
     */
    onStep?: (value: number, info: { offset: number, type: 'up' | 'down' }) => void,
    /**
     * @desc Whether to show +- controls, or set custom arrows icon
     * @default true
     */
    controls?: boolean | { upIcon?: React.ReactNode; downIcon?: React.ReactNode; },
    /**
     * @desc The initial input content
     */
    value?: string | number,
   
}

export interface DateInputType extends General {
    /**
     * @desc Type of date picker
     * @default 'date'
     */
    type?: 'date' | 'month' | 'year',
    /**
     * @desc Callback when user input
     * @param value Dayjs object.
     * @param dateString Formatted date string to display. Formatted with default format variable.
     * @param formattedDate Formatted date string to send to backend.
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onChange?: (value: Dayjs | null, dateString: string, formattedDate: string) => void,
    /**
     * @desc If allow to remove input content with clear icon
     * @default false
     */
    allowClear?: boolean,
    /**
     * @desc To set default date, if start time or end time is null or undefined, the date range will be an open interval
     */
    defaultValue?: Dayjs,
    value?: Dayjs,
    /**
     * @desc Whether to show time picker
     * @default false
     */
    showTime?: boolean,

    /**
     * @desc This is to add custom classes
     */
    className?: string,

    /**
     * @desc This is to show Hours only in time picker
     */
    showHoursOnly?: boolean
}

export interface RangeDateType {
    /**
     * @desc Input title
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    title?: string,
    /**
     * @desc Whether the input is disabled
     * @default false
     */
    disabled?: boolean,
    /**
     * @desc This is to add custom classes
     */
    className?: string,
    /**
     * @desc The ID for input
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    id?: string,
    /**
     * @desc The size of the input box.
     * @default 'middle'
     */
    size?: Size,
    /**
     * @desc The hint of the input
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    hint?: string,
    /**
     * @desc If allow to remove input content with clear icon
     * @default false
     */
    allowClear?: boolean,
    /**
     * @desc To set default date, if start time or end time is null or undefined, the date range will be an open interval
     */
    defaultValue?: [Dayjs, Dayjs],
    /**
     * @desc To set date, if start time or end time is null or undefined, the date range will be an open interval
     */
    value?: [Dayjs, Dayjs],
    /**
     * @desc Callback when user input
     * @param date - An array of Dayjs objects representing the selected date range.
     * @param dateString - An array of date strings representing the selected date range.
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onChange?: (date: [Dayjs, Dayjs], dateString: [string, string]) => void;
    /**
     * @desc To set the date format.
     * @default DD.MM.YYYY
     * @see https://day.js.org/docs/en/display/format
     */
    format?: string,
    /**
     * @desc The placeholder of date input. It's accepting array of string. First value for start date, second value for end date.
     */
    placeholder?: [string, string],
    /**
     * @desc The position where the selection box pops up
     * @default bottomLeft
     */
    placement?: DatePickerProps['placement'],
}

export interface ColorInputType {
    /**
     * @desc Initial value of the input.
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    defaultValue?: string,
    /**
     * @desc Callback when user input
     * @param value
     * @param hex
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onChange?: (value: Color, hex: string) => void;
    /**
     * @desc Callback when format is changed
     * @param format
     */
    onFormatChange?: (format: 'hex' | 'rgb' | 'hsb') => void;
    /**
     * @desc Format of color
     * @default hex
     */
    format?: 'hex' | 'rgb' | 'hsb';
    /**
     * @desc Allow clearing color selected
     * @default true
     */
    allowClear?: boolean;
    /**
     * @desc Using only with new form system. Do net set by yourself.
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    value?: any;
}