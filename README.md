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

## User Stories

- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.
- As a user, I want to be able to send messages to my friends and family members to exchange the latest news.
- As a user, I want to send images to my friends to show them what I’m currently doing.
- As a user, I want to share my location with my friends to show them where I am.
- As a user, I want to be able to read my messages offline so I can reread conversations at any time.
- As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.

## Key Features

- A page where users can enter their name and choose a background color for the chat screen before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- The chat must provide users with two additional communication features: sending images and location data.
- Data gets stored online and offline.

## Technical Requirements

- The app must be written in React Native.
- The app must be developed using Expo.
- The app must be styled according to the given screen design.
- Chat conversations must be stored in Google Firestore Database.
- The app must authenticate users anonymously via Google Firebase authentication.
- Chat conversations must be stored locally.
- The app must let users pick and send images from the phone’s image library.
- The app must let users take pictures with the device’s camera app, and send them.
- The app must store images in Firebase Cloud Storage.
- The app must be able to read the user’s location data.
- Location data must be sent via the chat in a map view.
- The chat interface and functionality must be created using the Gifted Chat library.
- The app’s codebase must contain comments.

