//@ts-ignore
import React from 'react'
import {Checkbox as AntCheckbox, ConfigProvider} from "antd";
import {CheckboxType} from "./checkboxType";


const Checkbox = ({onChange, children, id, disabled, checked = false}: CheckboxType) => {
    

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: "#8d0000"
            },
            components: {
                Checkbox: {
                    colorText: "#fff"
                }
            }
        }}>
            <AntCheckbox style={{marginInlineStart: 0}} onChange={onChange} id={id}
                         disabled={disabled} checked={checked}>{children}</AntCheckbox>
        </ConfigProvider>
    )}
export default Checkbox;