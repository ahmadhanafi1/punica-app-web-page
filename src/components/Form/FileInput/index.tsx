//@ts-ignore
import React from 'react'
import { Button, Upload, ConfigProvider, Typography } from 'antd'
import { UploadOutlined } from "@ant-design/icons";
import { FileInputType } from "./fileInputType";
import { useTranslation } from "react-i18next";



const FileInput = ({
    onChange,
    maxCount = 1,
    id,
    children,
    icon = <UploadOutlined rev={undefined} />,
    accept = "*",
    disabled = false,
    showUploadList = true,
    title,
    hint,
}: FileInputType) => {
    //@ts-ignore
    const { t } = useTranslation();

    return (
        <ConfigProvider theme={{
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
                {
                    title ? <div className="flex gap-2">
                        {title ? <Typography.Title level={5}>{title}</Typography.Title> : null}
                      
                    </div> : null
                }
                <Upload onChange={onChange} disabled={disabled} id={id} accept={accept} showUploadList={showUploadList}
                    maxCount={maxCount}
                    beforeUpload={() => false}>
                    <Button icon={icon}>{children ? children : t('CLICK_TO_UPLOAD')}</Button>
                </Upload>
            </div>
        </ConfigProvider>
    )
}

export default FileInput