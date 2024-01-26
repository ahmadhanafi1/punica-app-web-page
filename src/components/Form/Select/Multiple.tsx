// @ts-ignore
import React, { Ref, forwardRef } from 'react'
import { ConfigProvider, Select, Typography } from "antd";
import { MultiselectType } from "./selectTypes";

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
    

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#8d0000",
                },
                components: {
                    Typography: {
                        colorText: `#fff !important`
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
                    // @ts-ignore
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