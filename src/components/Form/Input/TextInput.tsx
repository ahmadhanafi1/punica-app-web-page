//@ts-ignore
import React, {forwardRef, Ref} from 'react'
import {Input as AntInput, ConfigProvider, Typography} from 'antd'
import {InputType} from "./inputType";

const TextInput = forwardRef(({
                                  disabled = false,
                                  placeholder,
                                  allowClear = false,
                                  defaultValue,
                                  id,
                                  showCount = false,
                                  onChange,
                                  onPressEnter,
                                  size = "middle",
                                  icon,
                                  maxLength,
                                  minLength,
                                  title,
                                  name,
                                  type = "text",
                                  value,
                                  hint,
                                  className
                              }: InputType, ref: Ref<any>) => {
    // @ts-ignore

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
                <AntInput disabled={disabled} placeholder={placeholder} prefix={icon} maxLength={maxLength}
                          minLength={minLength} id={id} style={{width: "100%"}} type={type} ref={ref} name={name}
                          value={value} className={className}
                          allowClear={allowClear} defaultValue={defaultValue} showCount={showCount}
                          onChange={onChange} onPressEnter={onPressEnter} size={size}/>
            </div>
        </ConfigProvider>
    )
})

export default TextInput