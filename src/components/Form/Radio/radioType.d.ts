import {RadioChangeEvent} from "antd/es/radio/interface";

export interface RadioType {
    /**
     * @desc The id of the checkbox
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    id?: string;
    /**
     * @desc Default selected value
     */
    defaultValue?: string | number;
    /**
     * @desc Radio options
     */
    radios: {
        /**
         * @desc The value of the radio
         */
        value: string | number;
        /**
         * @desc The label of the radio
         */
        label: string;
        /**
         * @desc Whether the radio is disabled or not
         */
        disabled?: boolean;
        /**
         * @desc The id of the radio
         */
        id: string;
    }[],
    /**
     * @desc Callback when user click on radio
     * @param e
     */
    onChange?: (e: RadioChangeEvent) => void;
}