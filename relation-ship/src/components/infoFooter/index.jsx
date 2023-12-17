import React from "react";
import {Button} from 'antd'
import PropTypes from "prop-types";

class InfoFooter extends React.Component {

    static propTypes = {
        onNumberChange: PropTypes.func.isRequired
    }

    render() {
        const {onNumberChange} = this.props

        return (
            <>
                <Button onClick={onNumberChange.bind(null, 'SUB')}>支持</Button>
                <Button danger onClick={onNumberChange.bind(null, 'OPP')}>反对</Button>
            </>
        )
    }
}

export default InfoFooter
