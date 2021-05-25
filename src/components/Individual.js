import React from "react"
import {Link, useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
// import {asyncSearchItem, asyncSetUser} from '../actions/index'
// import {addToCart} from '../actions/index'
import {asyncSearchItem} from '../actions/rakuten'
import {addToCart, asyncSetUser} from '../actions/firebase'



export const Individual = props => {
    const location = useLocation()
    console.log(location);
    console.log(props.items);
    console.log(props.selectedItem);
    const newItem = props.selectedItem
    console.log(newItem)
    const uid = props.loginUser.uid
    console.log(uid)

    return (
        <React.Fragment>
            <h1>個別商品詳細</h1>
            {props.selectedItem &&
                <React.Fragment>
                    <img src={props.selectedItem.Item.smallImageUrls[0].imageUrl} alt="商品画像です"></img>
                    <div>{props.selectedItem.Item.itemName}</div>
                </React.Fragment>
            }
            <button><Link to='/'>ホーム画面へ</Link></button>
            {props.loginUser ?
                <button onClick={() => props.addToCart(newItem, uid)}>カートに追加</button>
            :
                <div>※ログインしていません</div>
            }

        </React.Fragment>
    )
}

export const mapStateToProps = state => ({
    items: state.rakutenApi.items,
    selectedItem: state.rakutenApi.selectedItem,
    loginUser: state.firebase.loginUser,
})
export const mapDispatchToProps = dispatch => ({
      asyncSearchItem: e =>dispatch(asyncSearchItem(e)),
      asyncSetUser: user => dispatch(asyncSetUser(user)),
      addToCart: (newItem, uid) => dispatch(addToCart(newItem, uid)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Individual);
// こいつは{}なしでimportする
