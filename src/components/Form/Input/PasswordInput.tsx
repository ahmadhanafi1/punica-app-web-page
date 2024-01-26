//@ts-ignore
import React, {forwardRef, Ref} from 'react'
import {Input as AntInput, ConfigProvider, Typography} from 'antd'
import {useSelector} from "react-redux";
import {InputType} from "./inputType";
import Hint from "../../Hint";

const PasswordInput = forwardRef(({
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
                                      hint,
                                      className
                                  }: InputType, ref: Ref<any>) => {
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
                <AntInput.Password disabled={disabled} placeholder={placeholder} prefix={icon} maxLength={maxLength}
                                   minLength={minLength} id={id} style={{width: "100%"}} name={name} ref={ref} className={className}
                                   allowClear={allowClear} defaultValue={defaultValue} showCount={showCount}
                                   onChange={onChange} onPressEnter={onPressEnter} size={size}/>
            </div>
        </ConfigProvider>
    )
})

export default PasswordInput