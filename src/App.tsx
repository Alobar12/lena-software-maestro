import React from 'react'
import BlogProvider from './context/BlogContext'
import Router from './router'

const App = () => {
    return (
        <BlogProvider>
            <Router />
        </BlogProvider>
    )
}

export default App