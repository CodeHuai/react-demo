import {Button} from "antd";
import React, {memo} from "react";
import PropTypes from "prop-types";

const InfoFooterFun = function (props) {
    const {onNumberChange} = props
    return (
        <>
            <Button onClick={onNumberChange.bind(null, 'SUB')}>支持</Button>
            <Button danger onClick={onNumberChange.bind(null, 'OPP')}>反对</Button>
        </>
    )
}

InfoFooterFun.defaultProps = {}

InfoFooterFun.propTypes = {
    onNumberChange: PropTypes.func.isRequired
}

export default memo(InfoFooterFun)
