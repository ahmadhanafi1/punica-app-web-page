import React from 'react';
import {ConfigProvider, DatePicker, Typography} from 'antd';
import {useSelector} from "react-redux";
import Hint from "../../Hint";
import {RangeDateType} from "../Input/inputType";
const { RangePicker: RangeDate } = DatePicker;

const RangePicker = ({title, hint, className, value, onChange, format = "DD.MM.YYYY", placeholder, defaultValue, size, id, disabled, allowClear, placement = "bottomLeft"}: RangeDateType) => {
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
                <RangeDate id={id} className={className} placeholder={placeholder} value={value}
                           style={{ width: "100%" }} changeOnBlur placement={placement}
                           disabled={disabled} size={size} defaultValue={defaultValue}
                           allowClear={allowClear} onChange={onChange} format={format}/>
            </div>
        </ConfigProvider>
    )
};

export default RangePicker;