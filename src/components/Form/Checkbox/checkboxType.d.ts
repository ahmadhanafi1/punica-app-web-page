import {CheckboxChangeEvent} from "antd/lib/checkbox";

export interface CheckboxType {
    /**
     * @desc The id of the checkbox
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    id?: string;
    /**
     * @desc The name of the checkbox
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    children?: string;
    /**
     * @desc Whether the checkbox is checked or not
     * @default false
     */
    checked?: boolean;
    /**
     * @desc Whether the checkbox is disabled or not
     */
    disabled?: boolean;
    /**
     * @desc Callback when user click the checkbox
     * @param e
     */
    onChange?: (e: CheckboxChangeEvent) => void;
}