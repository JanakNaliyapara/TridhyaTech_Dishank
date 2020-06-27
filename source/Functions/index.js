import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Jsondata} from '../Functions/Json';

export function onFacebookLogin(props) {
  LoginManager.logInWithPermissions(['public_profile', 'user_friends', 'email'])
    .then(result => {
      if (result.isCancelled) {
        console.log('User Cancelled');
      }
      return AccessToken.getCurrentAccessToken();
    })
    .then(data => {
      const credential = auth.FacebookAuthProvider.credential(data.accessToken);
      return auth().signInWithCredential(credential);
    })
    .then(currentUser => {
      console.log(currentUser, 'FB USER DJ');
      props.navigation.navigate('Dashboard', {data: currentUser});
    })
    .catch(error => {
      console.log(error, 'LOGIN ERROR');
    });
}

export function onGoogleLogin(props) {
  GoogleSignin.signIn()
    .then(data => {
      console.log(data, 'DATA DJ');
      const userCredential = auth.GoogleAuthProvider.credential(
        data.idToken,
        data.accessToken,
      );
      return auth().signInWithCredential(userCredential);
    })
    .then(currentUser => {
      console.log(currentUser, 'DISHANK');
      props.navigation.navigate('Dashboard', {data: currentUser});
    })
    .catch(error => {
      console.log(`Error with login :${error}`);
    });
}

export function _onFilter(value) {
  var Data = Jsondata.filter(function(hero) {
    return hero.status.toLowerCase() == value.toLowerCase();
  });
  return Data;
}

export function _onSearch(value) {
  let text = value.toLowerCase();
  let data = Jsondata.filter(item => {
    return (
      item.status.toLowerCase().match(text) ||
      item.buyer_name.toLowerCase().match(text) ||
      item.process.toLowerCase().match(text)
    );
  });
  return data;
}
