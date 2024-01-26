//@ts-ignore
import React from 'react'
import { DatePicker, ConfigProvider, Typography } from "antd";
import { useSelector } from "react-redux";
import { DateInputType } from "../Input/inputType";
import dayjs from "dayjs";
import Hint from "../../Hint";

const Index = ({
    type = "date",
    allowClear = false,
    onChange,
    placeholder,
    disabled = false,
    id,
    defaultValue,
    size = "middle",
    title,
    hint,
    value,
    showHoursOnly,
    showTime,
    className
}: DateInputType) => {
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
                <DatePicker className={className} placeholder={placeholder} picker={type} allowClear={allowClear}
                    value={value}
                    showTime={showTime && { format: `HH:${showHoursOnly ? '00' : 'mm'}`}}
                    onChange={(value, dateString) => {
                        const formattedDate = dayjs(value).format(showTime ? `DD.MM.YYYY HH:${showHoursOnly ? '00' : 'mm'}` : type === "date" ? "YYYY-MM-DD" : "YYYY-MM")
                        if (onChange) {
                            onChange(value, dateString, formattedDate)
                        }
                    }}
                    disabled={disabled} id={id} defaultValue={defaultValue} size={size} style={{ width: "100%" }}
                    format={showTime ? `DD.MM.YYYY HH:${showHoursOnly ? '00' : 'mm'}` : type === "date" ? "DD.MM.YYYY" : type === "month" ? "MMMM YYYY" : type === "year" ? "YYYY" : "DD.MM.YYYY"}
                    changeOnBlur={true}
                />
            </div>
        </ConfigProvider>
    )
}

export default Index