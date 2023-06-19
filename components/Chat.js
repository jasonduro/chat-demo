import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Bubble, GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { collection, addDoc, onSnapshot, query, orderBy, Timestamp } from "firebase/firestore";
import CustomActions from './CustomActions';
import MapView from 'react-native-maps';
import { Audio } from 'expo-av';

const Chat = ({ db, route, navigation, isConnected, storage }) => {
  const { name, color, userID } = route.params;
  const [messages, setMessages] = useState([]);
  let soundObject = null;

  let unsubMessages;

  useEffect(() => {
    navigation.setOptions({ title: name });

    if (isConnected === true ) {
      // unregister current onSnapshot() listener to avoid registering multiple listeners when
      // useEffect code is re-executed.
      if (unsubMessages) unsubMessages();
      unsubMessages = null;
    
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    unsubMessages = onSnapshot(q, (docs) => {
      let newMessages = [];
      docs.forEach(doc => {
        newMessages.push({
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis())
        })
      })
        cacheMessages(newMessages);
        setMessages(newMessages);
    })
  } else loadCachedMessages();

    return () => {
      if (unsubMessages) unsubMessages();
      if (soundObject) soundObject.unloadAsync();
    }
   }, [isConnected]);

   const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem('messages') || [];
    setMessages(JSON.parse(cachedMessages));
  }

   const cacheMessages = async (messagesToCache) => {
    try {
      await AsyncStorage.setItem('messages', JSON.stringify(messagesToCache));
    } catch (error) {
      console.error(error.message);
    }
  }
  
   const onSend = async (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0])
  }

    const renderInputToolbar = (props) => {
      if (isConnected === true) return <InputToolbar {...props} />;
      else return null;
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

    const renderCustomActions = (props) => {
      return <CustomActions userID={userID} storage={storage} {...props} />;
    };

    const renderCustomView = (props) => {
      const { currentMessage} = props;
      if (currentMessage.location) {
        return (
            <MapView
              style={{width: 150,
                height: 100,
                borderRadius: 13,
                margin: 3}}
              region={{
                latitude: currentMessage.location.latitude,
                longitude: currentMessage.location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
        );
      }
      return null;
    }

    const renderAudioBubble = (props) => {
      return <View {...props}>
       <TouchableOpacity
          style={{ backgroundColor: "#FF0", borderRadius: 10, margin: 5 }}
          onPress={async() => {
            const { sound } = await Audio.Sound.createAsync({ uri: props.currentMessage.audio });
            await sound.playAsync();
        }}>
          <Text style={{ textAlign: "center", color: 'black', padding: 5 }}>Play Sound</Text>
        </TouchableOpacity>
      </View>
    }

    const renderMessageAudio = (props) => {
      return <View {...props}>
      <TouchableOpacity
        style={{ backgroundColor: "#FF0", borderRadius: 10, margin: 5 }}
        onPress={async () => {
          if (soundObject) soundObject.unloadAsync();
          const { sound } = await Audio.Sound.createAsync({ uri: props.currentMessage.audio });
          soundObject = sound;
          await sound.playAsync();
        }}>
        <Text style={{ textAlign: "center", color: 'black', padding: 5 }}>Play Sound</Text>
      </TouchableOpacity>
      </View>
      }

  
 return (
  <View style={{flex: 1, backgroundColor: color}}>
    <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        onSend={(messages) => onSend(messages)}
        renderActions={renderCustomActions}
        renderCustomView={renderCustomView}
        renderMessageAudio={renderAudioBubble}
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