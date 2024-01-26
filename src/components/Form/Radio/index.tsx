//@ts-ignore
import React from 'react'
import {Radio as AntRadio, ConfigProvider} from "antd";
import {useSelector} from "react-redux";
import {RadioType} from "./radioType";

const Radio = ({radios, id, onChange, defaultValue}: RadioType) => {
    //@ts-ignore
    const appearance = useSelector(state => state.appearance.appearance);

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: appearance?.primaryColor
            },
            components: {
                Radio: {
                    colorText: appearance?.primaryTextColor
                }
            }
        }}>
            <AntRadio.Group onChange={onChange} id={id} defaultValue={defaultValue}>
                {
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