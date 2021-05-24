import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import img from '../images/logo192.png'
import '../App.css';
import axios from 'axios'
import firebase from 'firebase'
import {useEffect} from 'react'


const App = () => {

  const items = useSelector(state => state.items)
  const loginUser = useSelector(state => state.loginUser)
  const dispatch = useDispatch()

  
  const setUser = user => ({
    type: 'SETUSER',
    loginUser: user
  })
  
  // API通信：action creatorのタイミングで実装
  // API用とstoreにdispatchする用の2つの関数が必要
  const searchItem = e => {
    axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?' , {
      params: {
        applicationId: '1002332757402892625',
        keyword: e.target.previousElementSibling.value
      }
    })
    .then(res => {
      const items = res.data.Items
      dispatch(sendItem(items))
    })
  }
  const sendItem = items => ({
    type: 'SENDITEM',
    items: items
  })
  
  // ログイン
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
        // console.log(user)
        if(user){
          dispatch(setUser(user))
        }
    })
  })

  const loginCreator = () => {
    const google_auth_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(google_auth_provider);
    // console.log(google_auth_provider);
    
    dispatch(login)
  }

  const logoutCreator = () => {
    firebase.auth().signOut()
  }

  const login = () => ({
    type: 'LOGIN'
  })

  return (
    <div className="App">
      <h1>ECサイト</h1>
      {loginUser &&
        <React.Fragment>
          <h4>User Name : {loginUser.displayName}</h4>
          <h4>User ID : {loginUser.uid}</h4>
        </React.Fragment>
      }
      <div>
        <button onClick={loginCreator}>ログイン</button>
        <button onClick={logoutCreator}>ログアウト</button>
      </div>
      <input></input>
      <button onClick={searchItem}>検索</button>

      {items && 
        <React.Fragment>
          <table>
            <tbody>
            {items.map((item, index) => 
              <tr key={index}>
                <td>
                  <img src={item.Item.smallImageUrls[0].imageUrl} alt="写真です"></img>
                  <div>{item.Item.itemName}</div>
                  <div>¥{item.Item.itemPrice}</div>
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

export default App;
