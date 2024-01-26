//@ts-ignore
import React from 'react';
import {TimePicker, ConfigProvider, Typography} from 'antd';
import {TimeInputType} from "./timeInputType";

const TimeInput = ({
                       title,
                       onChange,
                       placeholder = "Select Time",
                       disabled = false,
                       id,
                       defaultValue,
                       hint,
                       allowClear = false,
                       value
                   }: TimeInputType) => {

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: "#8d0000"
            },
            components: {
                Typography: {
                    colorText: `#fff !important`
                }
            }
        }}>
            {
                title ? <div className="flex gap-2">
                        {title ? <Typography.Title level={5}>{title}</Typography.Title> : null}
                    </div>
                    : null
            }
            <TimePicker 
                style={{width: '100%'}} 
                value={value} 
                id={id} 
                disabled={disabled} 
                defaultValue={defaultValue}
                allowClear={allowClear} 
                format="HH:mm" 
                onChange={onChange} 
                placeholder={placeholder}
                changeOnBlur={true}
            />
        </ConfigProvider>
    )
}

export default TimeInput