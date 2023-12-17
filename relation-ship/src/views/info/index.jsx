import React from "react";
import InfoFooter from "../../components/infoFooter";
import InfoContent from "../../components/infoContent";

class Info extends React.Component {

    state = {
        subNum: 10,
        oppNum: 10
    }

    // 当点击支持或者返回按钮时，调用的方法
    // 这里要采用 箭头函数 保证 this 的指向是父组件实例
    onNumberChange = (type)=> {
        const {subNum, oppNum} = this.state
        switch (type) {
            case 'SUB': {
                this.setState({
                    subNum: subNum + 1
                })
                break
            }
            case 'OPP': {
                this.setState({
                    oppNum: oppNum + 1
                })
                break
            }
            default:
                break
        }
    }


    render() {
        const {subNum, oppNum} = this.state
        return (
            <>
                <InfoContent subNum={subNum} oppNum={oppNum}></InfoContent>
                <InfoFooter onNumberChange={this.onNumberChange}></InfoFooter>
            </>
        )
    }
}

export default Info
