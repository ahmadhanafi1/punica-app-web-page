import {Dayjs} from "dayjs";
export interface TimeInputType {
    /**
     * @desc Unique id for input
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    id?: string;
    /**
     * @desc Title for input
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    title?: string;
    /**
     * @desc Hint for input
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    hint?: string;
    /**
     * @desc Whether to show clear button
     * @default false
     */
    allowClear?: boolean;
    /**
     * @desc Default value for input.
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    defaultValue?: Dayjs;
    /**
     * @desc Placeholder for input.
     * @default "Select time"
     */
    placeholder?: string;
    /**
     * @desc Whether input is disabled.
     * @default false
     */
    disabled?: boolean;
    value?: Dayjs;
    /**
     * @desc Callback when user input
     * @param value Dayjs object.
     * @param dateString Formatted date string to display. Formatted with default format variable.
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onChange?: (value: Dayjs | null, dateString: string) => void,
}