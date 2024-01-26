// @ts-ignore
import React, { Ref, forwardRef } from 'react'
import { ConfigProvider, Select, Typography } from "antd";
import { MultiselectType } from "./selectTypes";
import { useSelector } from "react-redux";

const MultipleSelect = forwardRef(({
    onChange,
    onSelect,
    onDeselect,
    onClear,
    defaultValue,
    placeholder,
    options,
    disabled = false,
    title,
    value,
    open,
    onBlur,
    className
}: MultiselectType, ref:Ref<any>) => {
    //@ts-ignore
    const appearance = useSelector(state => state.appearance.appearance);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: appearance?.primaryColor,
                },
                components: {
                    Typography: {
                        colorText: `${appearance?.primaryTextColor} !important`
                    }
                }
            }}>
            <div>
                {title ? <Typography.Title level={5}>{title}</Typography.Title> : null}
                <Select
                    onBlur={onBlur}
                    open={open}
                    ref={ref}
                    value={value}
                    maxTagCount={"responsive"}
                    style={{  width: '100%'  }}
                    placeholder={placeholder}
                    allowClear
                    onChange={onChange}
                    onSelect={onSelect}
                    onDeselect={onDeselect}
                    onClear={onClear}
                    options={options}
                    defaultValue={defaultValue}
                    showSearch
                    disabled={disabled}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    mode="multiple"
                    className={className}
                />
            </div>
        </ConfigProvider>
    )
})

export default MultipleSelect;