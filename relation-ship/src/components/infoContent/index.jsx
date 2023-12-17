import React from "react";
import PropTypes from 'prop-types'


class InfoContent extends React.Component {
    static defaultProps = {
        subNum: 0,
        oppNum: 0
    }
    static propTypes = {
        subNum: PropTypes.number,
        oppNum: PropTypes.number
    }
    // 计算支持率
    popularity = () => {
        const {subNum, oppNum} = this.props
        return subNum + oppNum ? (subNum / (subNum + oppNum)).toFixed(2) * 100: 0
    }
    render() {
        const {subNum, oppNum} = this.props
        return (
            <>
                <div>支持：{subNum}</div>
                <div>反对：{oppNum}</div>
                <div>支持率：{this.popularity()}%</div>
            </>
        )
    }
}

export default InfoContent
