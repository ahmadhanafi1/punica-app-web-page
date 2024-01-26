//@ts-ignore
import React from 'react'
import {Checkbox as AntCheckbox, ConfigProvider} from "antd";
import {CheckboxType} from "./checkboxType";
import {useSelector} from "react-redux";

const Checkbox = ({onChange, children, id, disabled, checked = false}: CheckboxType) => {
    //@ts-ignore
    const appearance = useSelector(state => state.appearance.appearance);

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: appearance?.primaryColor
            },
            components: {
                Checkbox: {
                    colorText: appearance?.primaryTextColor
                }
            }
        }}>
            <AntCheckbox style={{marginInlineStart: 0}} onChange={onChange} id={id}
                         disabled={disabled} checked={checked}>{children}</AntCheckbox>
        </ConfigProvider>
    )}
export default Checkbox;