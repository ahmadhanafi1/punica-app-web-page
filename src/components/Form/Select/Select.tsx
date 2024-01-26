// @ts-ignore
import React from 'react'
import {ConfigProvider, Select as AntSelect, Typography} from "antd";
import {SelectType} from "./selectTypes";

const Select = ({
                    onChange,
                    onSelect,
                    onDeselect,
                    onClear,
                    defaultValue,
                    placeholder = "Select",
                    showSearch = true,
                    options = [],
                    icon = null,
                    disabled = false,
                    title,
                    value,
                    notFoundContent,
                    onSearch,
                    className
                }: SelectType) => {
    //@ts-ignore

    return (
        <ConfigProvider
            theme={{
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
                {title ? <Typography.Title level={5}>{title}</Typography.Title> : null}
                <AntSelect
                    style={{width: '100%'}}
                    placeholder={placeholder}
                    allowClear
                    onChange={onChange}
                    onSelect={onSelect}
                    onDeselect={onDeselect}
                    onClear={onClear}
                    options={options}
                    showSearch={showSearch}
                    disabled={disabled}
                    suffixIcon={icon}
                    value={value}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    defaultValue={defaultValue}
                    notFoundContent={notFoundContent}
                    onSearch={onSearch}
                    className={className}
                />
            </div>
        </ConfigProvider>
    )
}

export default Select;