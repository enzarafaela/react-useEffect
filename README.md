# React + TypeScript + Vite

## What Is UseEffect

useEffect is a hook that allows you to perform side effects from a functional component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in React classes, but is unified into a single API.

useEffect takes two params.

- A function
- An array of dependencies (optional)
  
Example:

```useEffect(() => { },[${dependency}])
```
