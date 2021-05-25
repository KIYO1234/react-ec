import React from "react"
import {Link} from 'react-router-dom'

export const Details = () => {
    return (
        <React.Fragment>
            <h1>商品詳細</h1>
            <button><Link to='/'>ホーム画面へ</Link></button>

        </React.Fragment>
    )
}