import {UploadChangeParam} from "antd/es/upload/interface";
import React from "react";
export interface FileInputType {
    /**
     * @desc Input id
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    id?: string;
    /**
     * @desc Callback when user upload file
     * @param info
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    onChange?: (info: UploadChangeParam) => void;
    /**
     * @desc Limit the number of uploaded files. Will replace current one when maxCount is 1
     * @default 1
     */
    maxCount?: number;
    /**
     * @desc Whether to show the uploaded file list
     * @default true
     */
    showUploadList?: boolean;
    /**
     * @desc Input label
     * @default Click to Upload
     */
    children?: React.ReactNode;
    /**
     * @desc Custom icon
     * @default <UploadOutlined/>
     */
    icon?: React.ReactNode;
    /**
     * @desc File types that can be accepted. See input accept Attribute
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     */
    accept?: string;
    /**
     * @desc Whether the input is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * @desc Title of the input
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    title?: string;
    /**
     * @desc The hint of the input
     * @deprecated Since version 2.12.0. Use with form instead.
     */
    hint?: string;
}