# Week 7 – React Context API

## Objective

Implement global state management using React Context API.

## Features Implemented

- React Context
- Context Provider
- useContext Hook
- Global Product State
- API Data Sharing Across Components

## Explanation

Instead of passing data through multiple components using props, React Context allows data to be shared globally.

A ProductContext was created to store and manage product data fetched from an external API.

The ProductProvider wraps the entire application, making the product data accessible from any component using the useContext hook.

## Result

- Cleaner component structure
- No prop drilling
- Centralized state management
