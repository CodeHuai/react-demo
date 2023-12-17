import InfoContentFun from "../../components/infoContentFun";
import InfoFooterFun from "../../components/infoFooterFun";
import {useCallback, useState} from 'react'

const InfoFun = function () {

    let [subNum, setSubNum] = useState(10)
    let [oppNum, setOppNum] = useState(10)

    // 增加 useCallback 优化， 避免每一次渲染时候 会再次创建 onNumberChange 函数
    // 要注意 useCallBack 容易产生 闭包的问题
    const onNumberChange = useCallback((type) => {
        switch (type) {
            case 'SUB': {
                setSubNum(subNum + 1)
                break
            }
            case 'OPP': {
                setOppNum(oppNum + 1)
                break
            }
            default:
                break
        }
    }, [subNum, oppNum])

    // const onNumberChange = (type) => {
    //     switch (type) {
    //         case 'SUB': {
    //             setSubNum(subNum + 1)
    //             break
    //         }
    //         case 'OPP': {
    //             setOppNum(oppNum + 1)
    //             break
    //         }
    //         default:
    //             break
    //     }
    // }

    return (
        <>
            <InfoContentFun subNum={subNum} oppNum={oppNum}></InfoContentFun>
            <InfoFooterFun onNumberChange={onNumberChange}></InfoFooterFun>
        </>
    )
}

export default InfoFun
