//@ts-ignore
import React from 'react';
import {ColorPicker, ConfigProvider} from "antd";
import {ColorInputType} from "./inputType";

const Color = ({defaultValue, onChange, onFormatChange, format, allowClear = true, value}: ColorInputType) => {
    return (
        <ConfigProvider>
            <ColorPicker onChange={onChange} value={value || defaultValue} onFormatChange={onFormatChange}
                         format={format} allowClear={allowClear}/>
        </ConfigProvider>
    )
}

export default Color