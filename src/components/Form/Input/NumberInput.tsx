//@ts-ignore
import React, {forwardRef, Ref} from 'react'
import {InputNumber, ConfigProvider, Typography} from 'antd'
import {NumberInputType} from "./inputType";

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
            <div>
                {
                    title ? <div className="flex gap-2">
                        {title ? <Typography.Title level={5}>{title}</Typography.Title> : null}
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