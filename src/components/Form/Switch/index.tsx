//@ts-ignore
import React from 'react'
import {Switch as AntSwitch, ConfigProvider} from 'antd'
import {SwitchType} from "./switchType";
import './switch.scss'

const Switch = ({
                    id,
                    checkedChildren,
                    unCheckedChildren,
                    defaultChecked = false,
                    checked,
                    loading,
                    disabled,
                    onChange,
                }: SwitchType) => {
    // @ts-ignore

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: "#8d0000"
            }
        }}>
            <AntSwitch id={id} disabled={disabled} loading={loading}
                       checkedChildren={checkedChildren} checked={checked}
                       unCheckedChildren={unCheckedChildren} defaultChecked={defaultChecked} onChange={onChange}/>
        </ConfigProvider>
    )
}

export default Switch