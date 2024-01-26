import * as React from 'react';
import {SwitchChangeEventHandler, SwitchClickEventHandler} from "antd/es/switch";

export interface SwitchType {
    /**
     * @desc ID of the switch
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    id?: string;
    /**
     * @desc Whether the switch is loading
     * @default false
     */
    loading?: boolean;
    /**
     * @desc Switchs checked children
     */
    checkedChildren?: string | React.ReactNode;
    /**
     * @desc Switchs unchecked children
     */
    unCheckedChildren?: string | React.ReactNode;
    /**
     * @desc Whether the switch is checked
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * @desc Whether the switch is checked
     * @default false
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    checked?: boolean;
    /**
     * @desc Whether the switch is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * @desc Callback when the switch is checked or unchecked
     * @param checked
     * @param event
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onChange?: SwitchChangeEventHandler;
}