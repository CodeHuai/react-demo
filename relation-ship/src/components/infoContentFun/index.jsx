import {useMemo} from "react";
import PropTypes from "prop-types";

const InfoContentFun = function (props){
    const {subNum, oppNum} = props

    // 增加缓存的机制
    const popularity = useMemo(() => {
        const {subNum, oppNum} = props
        return subNum + oppNum ? (subNum / (subNum + oppNum)).toFixed(2) * 100: 0
    }, [subNum, oppNum])


    return (
        <>
            <div>支持：{subNum}</div>
            <div>反对：{oppNum}</div>
            <div>支持率：{popularity}%</div>
        </>
    )
}

InfoContentFun.defaultProps = {
    subNum: 10,
    oppNum: 10
}

InfoContentFun.propTypes = {
    subNum: PropTypes.number,
    oppNum: PropTypes.number
}

export default InfoContentFun
