import firebase from 'firebase/app';
import 'firebase/firestore';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { collection, addDoc, onSnapshot, query, orderBy, Timestamp } from "firebase/firestore";

const Chat = ({ db, route, navigation }) => {
  console.log(name);
  //added db to chat component, then added the userID to the route params - need to double check  
  const { name, color, userID } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: name });
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubMessages = onSnapshot(q, (docs) => {
      let newMessages = [];
      docs.forEach(doc => {
        let data = doc.data();
        newMessages.push({
          _id: doc.id,
          text: data.text,
          createdAt: new Date(data.createdAt.seconds * 1000),
          user: data.user
        })
      })
      setMessages(newMessages);
    })
    return () => {
      if (unsubMessages) unsubMessages();
    }
  }, []);
  

   const onSend = async (newMessages) => {
    const messageToStore = {
      _id: newMessages[0]._id,
      text: newMessages[0].text,
      createdAt: Timestamp.now(), // use current timestamp
      user: {
        _id: newMessages[0].user._id,
        name: newMessages[0].user.name,
        // add any other user properties to store here
      },
      // any other properties of the message to store here
    }
  
    try {
      await addDoc(collection(db, "messages"), messageToStore);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#000'
        },
        left: {
          backgroundColor: '#fff'
        }
      }}
    />
  }


  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);
  
 return (
  <View style={{flex: 1, backgroundColor: color}}>
    <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userID, 
          name: name,
        }}
      />
      </View>
  );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 }
});

export default Chat;