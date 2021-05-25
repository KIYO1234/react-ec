
import React from 'react'
import '../App.css';
import {connect} from 'react-redux'
// 画面表示側では大文字（actionオブジェクトのtype名）ではなく、メソッド（キャメルケース）をimportする）
// import {asyncSearchItem, login, asyncSetUser, logout} from '../actions/index'
import {login, logout, asyncSetUser} from '../actions/firebase'
import {asyncSearchItem} from '../actions/rakuten'
// import {deleteUser} from '../actions/index'
import {setItem} from '../actions/firebase'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'


const MapState = props => {
    console.log(props);
    // console.log(props.loginUser)
    
    // ログイン
    useEffect(() => {
        // console.log(props)
        props.asyncSetUser()
    })

  return (
    <div className="App">
        <h1>ECサイト</h1>
        <button><Link to='/details'>商品詳細画面へ</Link></button>
      
      {/* {props.loginUser && */}
        <React.Fragment>
          <h4>User Name : {props.loginUser.displayName}</h4>
          <h4>User ID : {props.loginUser.uid}</h4>
        </React.Fragment>
      {/* } */}
      <div>
        {!props.loginUser && 
        <button onClick={props.login}>ログイン</button>
        }
        {/* <button onClick={props.asyncSetUser}>Set User</button> */}
        <button onClick={props.logout}>ログアウト</button>
        {/* <button onClick={props.logoutAction}>ログアウト</button> */}
        {/* 関数の形にすれば動く */}
        {/* <button onClick={() => props.deleteUser()}>Delete User</button> */}
      </div>
      <input></input>
      <button onClick={props.asyncSearchItem}>検索</button>

      {props.items && 
        <React.Fragment>
          <table>
            <tbody>
            {props.items.map((item, index) => 
              <tr key={index}>
                <td>
                {/* Linkで飛ばすリンク先を指定 */}
                {/* 引数を渡したい場合は無名関数を挟む */}
                <Link to={`/individual/${item.Item.shopUrl}`} onClick={() => props.setItem(item)}>
                  <img src={item.Item.smallImageUrls[0].imageUrl} alt={`${item.Item.itemName}の写真です`}></img>
                  <div>{item.Item.itemName}</div>
                  <div>¥{item.Item.itemPrice}</div>
                  {/* <div>{item.Item.shopUrl}</div> */}
                </Link>
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </React.Fragment>
      }
    </div>
  );
}

export const mapStateToProps = state => ({
    items: state.rakutenApi.items,
    loginUser: state.firebase.loginUser,
})
export const mapDispatchToProps = dispatch => ({
    // オブジェクトの集まり
    // key: componentで使うときの名前
    // value: dispatch関数（dispatch = store.dispatch）
    // actionsからimportしてきた関数をdispatchする関数
    //   searchItem: e =>dispatch(searchItem(e)),
      asyncSearchItem: e =>dispatch(asyncSearchItem(e)),
      login: () => dispatch(login),
      asyncSetUser: user => dispatch(asyncSetUser(user)),
      // logoutに()をつけると動く：テキストでも()ついてた
      // 関数をdispatchするから最後に()が必要
      // action creator からimportしてきたactionsをdispatchする
      logout: () => dispatch(logout()),
      // ▼引数渡したら動いた
    //   deleteUser: str => dispatch(deleteUser(str)),
    //   deleteUser: () => dispatch(deleteUser),
      setItem: item => dispatch(setItem(item)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MapState);
