# React Native Chat App

This is a native mobile chat app built with React and React Native. The app allows users to chat in real-time, send images, and share their location.

## Technologies Used

- React Native: A JavaScript framework for writing real, natively rendering mobile applications.
- Expo: A framework and a platform for universal React applications.
- Firebase: A Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a realtime database, cloud storage, authentication, crash reporting, machine learning, remote configuration, and hosting for your static files.
- Gifted Chat: A complete chat UI solution for React Native applications.
- Async Storage: An asynchronous, unencrypted, persistent, key-value storage system for React Native.

## Features

- Real-time chat: Users can chat in real-time.
- Image sharing: Users can pick an image from the device’s library or take pictures with the device’s camera app, and share them in the chat.
- Location sharing: Users can share their current location in a map view.
- Offline support: Chats are stored locally using asyncStorage, so they’re available offline. Users can retrieve locally stored messages and disallow the creation of new messages when they are offline.
- Anonymous authentication: Users are authenticated anonymously with Firebase.

## Project Deliverables

The project was completed step-by-step through a series of exercises:

1. **Building Native Applications with JavaScript**: Set up the development environment to work with React Native and Expo. Created the app’s layout using native UI components.
2. **Chat UIs & Accessibility**: Built the chat screen and the chat functionality with the Gifted Chat library.
3. **Real-Time Applications & Data Storage**: Authenticated users anonymously with Firebase. Stored conversations in the Firestore Database.
4. **Storing Data on the Client-Side**: Stored chats locally using asyncStorage for offline availability. Authenticated users and stored chat messages in Firestore as well as on the device when users are online.
5. **Communication Features**: Implemented image picking from the device’s library, taking pictures with the device’s camera app, storing images in Google Firebase Cloud Storage, and sending images via Gifted Chat. Implemented location sending in a map view via Gifted Chat. Applied accessibility considerations to app design and development.
