//@ts-ignore
import React, {forwardRef, Ref} from 'react'
import {Input as AntInput, ConfigProvider, Typography} from 'antd'
import {InputType} from "./inputType";

const TextArea = forwardRef(({
                                 disabled = false,
                                 placeholder,
                                 allowClear = false,
                                 defaultValue,
                                 id,
                                 showCount = false,
                                 onChange,
                                 onPressEnter,
                                 size = "middle",
                                 maxLength,
                                 minLength,
                                 title,
                                 name,
                                 hint,
                                 value,
                                 className
                             }: InputType, ref: Ref<any>) => {
    // @ts-ignore

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
                <AntInput.TextArea disabled={disabled} placeholder={placeholder} maxLength={maxLength} value={value}
                                   minLength={minLength} name={name} style={{width: "100%", height:"203px", resize: 'none' }} id={id} ref={ref} className={className}
                                   allowClear={allowClear} defaultValue={defaultValue} showCount={showCount}
                                   onChange={onChange} onPressEnter={onPressEnter} size={size} />
            </div>
        </ConfigProvider>
    )
})

export default TextArea