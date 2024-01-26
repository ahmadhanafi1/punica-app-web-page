//@ts-ignore
import React, {forwardRef, Ref} from 'react'
import {InputNumber, ConfigProvider, Typography} from 'antd'
import {useSelector} from "react-redux";
import {NumberInputType} from "./inputType";
import Hint from "../../Hint";

const NumberInput = forwardRef(({
                                    disabled = false,
                                    placeholder,
                                    defaultValue,
                                    id,
                                    onChange,
                                    onPressEnter,
                                    size = "middle",
                                    icon,
                                    max = Number.MAX_SAFE_INTEGER.toString(),
                                    min = Number.MIN_SAFE_INTEGER.toString(),
                                    controls = true,
                                    title,
                                    step,
                                    value,
                                    hint,
                                    className
                                }: NumberInputType, ref: Ref<any>) => {
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
            <div>
                {
                    title ? <div className="flex gap-2">
                        {title ? <Typography.Title level={5}>{title}</Typography.Title> : null}
                        {hint && title ? <div className="mb-[.5em]"><Hint>{hint}</Hint></div> : null}
                    </div> : null
                }
                <InputNumber style={{width: "100%"}} disabled={disabled} ref={ref} placeholder={placeholder}
                             prefix={icon} id={id} defaultValue={defaultValue} max={max} min={min} controls={controls}
                             step={step} onChange={onChange} onPressEnter={onPressEnter} size={size} value={value}
                             className={className}
                />
            </div>
        </ConfigProvider>
    )
})

export default NumberInput