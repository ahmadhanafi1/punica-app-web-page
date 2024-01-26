//@ts-ignore
import React from 'react'
import {Switch as AntSwitch, ConfigProvider} from 'antd'
import {useSelector} from "react-redux";
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
    const appearance = useSelector(state => state.appearance.appearance);

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: appearance?.primaryColor
            }
        }}>
            <AntSwitch id={id} disabled={disabled} loading={loading}
                       checkedChildren={checkedChildren} checked={checked}
                       unCheckedChildren={unCheckedChildren} defaultChecked={defaultChecked} onChange={onChange}/>
        </ConfigProvider>
    )
}

export default Switch