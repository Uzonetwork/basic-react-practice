# Week 6 – Async React (JSON, Promises, Async/Await)

## Overview
This week focuses on handling asynchronous operations in React using modern JavaScript techniques.

The project was refactored to replace Promise chaining (.then()) with async/await syntax for better readability and error handling.

---

## Concepts Covered

### 1. JSON Handling
- Parsed API response using `response.json()`
- Managed structured data returned from DummyJSON API

### 2. Promises
- Understood how fetch() returns a Promise
- Handled asynchronous operations properly

### 3. Async/Await
- Converted Promise chaining to async function
- Used `await` for cleaner asynchronous logic

### 4. Error Handling
- Implemented `try/catch`
- Added `finally` block
- Created error state for UI feedback

### 5. Loading State Management
- Implemented loading state to improve user experience

---

## Improvements From Week 5

- Replaced `.then()` with `async/await`
- Added proper error handling
- Implemented conditional rendering for:
  - Loading state
  - Error state
  - Successful data state

---

## Key Code Pattern

```javascript
const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    setProducts(data.products);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};