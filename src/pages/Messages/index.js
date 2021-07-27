import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Headers, InputChat, ListAdmin, AdminSection } from '../../components'
import firebase from '../../config/Fire'
import { getData } from '../../utils'

const Messages = ({navigation}) => {
    const [admin, setAdmin] = useState([]);
    
  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
    });
  };

    const getAdmin = () => {
    firebase.database()
      .ref('users/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setAdmin(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }
    const [user, setUser] = useState({});
    const [historyChat, setHistoryChat] = useState([]);

    
    useEffect(() =>{
        getAdmin();
        getUserData();
        navigation.addListener('focus', () => {
        getUserData();
        });

        getDataUserFromLocal();
        const rootDB = firebase.database().ref();
        const urlHistory = `messages/${user.uid}/`;
        const messagesDB = rootDB.child(urlHistory);

        messagesDB.on('value', async snapshot => {
        if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async key => {
          const urlUidAdmin = `users/${oldData[key].uidPartner}`;
          const detailAdmin = await rootDB.child(urlUidAdmin).once('value');
          data.push({
            id: key,
            detailAdmin: detailAdmin.val(),
            ...oldData[key],
          });

          console.log(data)
        });

        await Promise.all(promises);

        setHistoryChat(data);
      }
    });
    },[user.uid,navigation])


    const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };
    return (
        <View style={styles.pages}>
          <ScrollView>
                <Headers title="Messages" subTitle="Cek pesan dari pelanggan disini!" />
                  
                <View style={styles.chat}>
                {admin.map(admin => {
                  return(
                    <AdminSection
                      key={admin.id} 
                      name={admin.data.email}
                      onPress={() => navigation.navigate('Chatting', admin)}
                      />
                    )
                })}
                </View>
                </ScrollView>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: 'white',
    },
    chat: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        flex: 1,
        paddingVertical: 20,
        marginBottom: 10,
    },

})
