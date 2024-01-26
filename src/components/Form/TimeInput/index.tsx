//@ts-ignore
import React from 'react';
import {TimePicker, ConfigProvider, Typography} from 'antd';
import {useSelector} from "react-redux";
import {TimeInputType} from "./timeInputType";
import Hint from "../../Hint";

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
    // @ts-ignore
    const appearance = useSelector(state => state.appearance.appearance);

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: appearance?.primaryColor
            },
            components: {
                Typography: {
                    colorText: `${appearance?.primaryTextColor} !important`
                }
            }
        }}>
            {
                title ? <div className="flex gap-2">
                        {title ? <Typography.Title level={5}>{title}</Typography.Title> : null}
                        {hint && title ? <div className="mb-[.5em]"><Hint>{hint}</Hint></div> : null}
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