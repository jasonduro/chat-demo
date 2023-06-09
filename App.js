import { useNetInfo } from '@react-native-community/netinfo';
import { useEffect } from 'react';

import { StyleSheet, Alert } from 'react-native';
// import the screens
import Start from './components/Start';
import Chat from './components/Chat';
// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator();

// iniltialize a connection to firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, disableNetwork, enableNetwork } from 'firebase/firestore';


const App = () => {
  const connectionStatus = useNetInfo();
  
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("No internet connection");
    disableNetwork(db);
  } else if (connectionStatus.isConnected === true) {
    enableNetwork(db);
  }
  }, [connectionStatus.isConnected]);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXRApH2YRT4Enx3GZfflwyVCt7ln_gapk",
  authDomain: "chat-app-6434b.firebaseapp.com",
  projectId: "chat-app-6434b",
  storageBucket: "chat-app-6434b.appspot.com",
  messagingSenderId: "325006457434",
  appId: "1:325006457434:web:1b0935b32059b8eff27663",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen name="Chat">
          {(props) => <Chat isConnected={connectionStatus.isConnected} {...props} db={db} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
