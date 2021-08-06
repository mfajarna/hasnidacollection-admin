import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ChatItem, Headers, InputChat, ListAdmin } from '../../components'
import firebase from '../../config/Fire'
import { getData,getChatTime,setDateChat } from '../../utils'

const Chatting = ({navigation, route}) => {

    const dataAdmin = route.params;
    const device_token = dataAdmin.data.device_token;
    
 
    const [chatContent, setChatContent] = useState('');
    const [user, setUser] = useState({});
    const [chatData, setChatData] = useState([]);
    const [namaAdmin, setNamaAdmin] = useState('');
    const scrollView= useRef();

    useEffect(() =>{
      getDataUserFromLocal();
      const chatID = `${dataAdmin.data.uid}_${user.uid}`;
      const urlFirebase = `chatting/${chatID}/allChat/`;

      firebase.database()
      .ref(urlFirebase)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map(key => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map(itemChat => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
        }
      })
    }, [dataAdmin.data.uid, user.uid])


      const getDataUserFromLocal = () => {
        getData('user').then(res => {
        setUser(res);
        setNamaAdmin(res.name);
        });
     };

    const chatSend = () =>{
         const today = new Date();

         const data = {
            sendBy: user.uid,
            chatDate: today.getTime(),
            chatTime: getChatTime(today),
            chatContent: chatContent,
         };

         const chatID = `${dataAdmin.data.uid}_${user.uid}`;
         
         const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
         const urlMessageUser = `messages/${user.uid}/${chatID}`;
         const urlMessageDoctor = `messages/${dataAdmin.data.uid}/${chatID}`;

        const dataHistoryChatForUser = {
        lastContentChat: chatContent,
        lastChatDate: today.getTime(),
        uidPartner: dataAdmin.data.uid,
        };

        const dataHistoryChatForDoctor = {
        lastContentChat: chatContent,
        lastChatDate: today.getTime(),
        uidPartner: user.uid,
        };

      firebase.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
        // set history for user
        firebase.database()
          .ref(urlMessageUser)
          .set(dataHistoryChatForUser);

        // set history for dataDoctor
        firebase.database()
          .ref(urlMessageDoctor)
          .set(dataHistoryChatForDoctor);
      })
      .catch(err => {
        showError(err.message);
      });

      const dataJson = JSON.stringify({
        "to": `${device_token}`,
        "priority": "high",
        "soundName": "default",
        "notification": {
            "title": "Hasnida Collection",
            "body": `Ada pesan baru dari admin ${namaAdmin}`
        
            }
      });
      
      axios.post('https://fcm.googleapis.com/fcm/send', dataJson,{
        headers:{
          Authorization: 'key=AAAAMn40zS0:APA91bG50ySLS-gl3e0KKQbKB51F01Q2x70opMDt6X1Se0l6zZ0oaaUvTDZ2Nj8240pFfKHBmB9Pe-BKSHM05hkC1hvbH6hkmEYLZ6m0MDoXZY7hM1WM0T0hn1elhdz0s-NzXPv-76PN',
          "content-type": "application/json",
        }
      }).then(res => {
        console.log(res);
      }).catch(err =>{
        console.log(err.message)
      })

    }

    return (
        <View style={styles.pages}>
            <View>
                <Headers title="Messages" subTitle="Kirim pesan ke pelanggan disini!" onBack={() => navigation.goBack()} />
            </View>
            
          <View style={styles.wrapperMessage}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              ref={scrollView}
              onContentSizeChange={() => scrollView.current.scrollToEnd({ animated: false })}
              >
              {chatData.map(chat => {
                return (
                  <View key={chat.id}>
                    <Text style={styles.chatDate}>{chat.id}</Text>
                    {chat.data.map(itemChat => {
                      const isMe = itemChat.data.sendBy === user.uid;
                      return (
                        <ChatItem 
                            key={itemChat.id}
                            isMe={isMe}
                            text={itemChat.data.chatContent}
                            date={itemChat.data.chatTime}
                        />
                      );
                    })}
              </View>
            );
          })}
          </ScrollView>
        </View>
            <InputChat
            value={chatContent}
            onChangeText={value => setChatContent(value)}
            onButtonPress={chatSend}
            targetChat={dataAdmin}
            />
        </View>
    )
}

export default Chatting;

const styles = StyleSheet.create({
    pages: {
        flex: 1,
    },
    wrapperMessage: {
        flex:1,
        backgroundColor: '#FAFAFA'
    },
    category:{
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
    chatDate: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: '#8D92A3',
    marginVertical: 20,
    textAlign: 'center',
  },
})
