import React from 'react'

const errorText = {
    header: {
        text_enUS: "Error:",
        text_kr: "오류:"
    },
    error_text: {
        no_internet: {
            text_enUS: "No Internet Connection",
            text_kr: "인터넷에 연결되어 있지 않습니다"
        },
        app_error: {
            text_enUS: "App failure, please restart",
            text_kr: "앱 오류, 다시 시작하십시오"
        }        
    }
}

export default class AppErrorOnLoad extends React.Component {
    render() {
        return (
            <div className="app appErrorOnload">
                
            </div>
        )
    }
}
