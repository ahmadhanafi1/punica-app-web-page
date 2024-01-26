//@ts-ignore
import React from 'react'
import {Radio as AntRadio, ConfigProvider} from "antd";
import {RadioType} from "./radioType";

const Radio = ({radios, id, onChange, defaultValue}: RadioType) => {

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: "#8d0000"
            },
            components: {
                Radio: {
                    colorText: "#fff"
                }
            }
        }}>
            <AntRadio.Group onChange={onChange} id={id} defaultValue={defaultValue}>
                {
                    // @ts-ignore
                    radios.map((radio: {
                        label: string,
                        value: string,
                        disabled?: boolean,
                        id: string
                    }, index: number) => (
                        <AntRadio key={index} id={radio.id} disabled={radio.disabled}
                                  value={radio.value}>{radio.label}</AntRadio>
                    ))
                }
            </AntRadio.Group>
        </ConfigProvider>
    )
}
export default Radio;