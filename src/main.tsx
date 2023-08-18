import React from 'react'
import ReactDOM from 'react-dom/client'

import GithubUserPage from './views/GithubUserView/GithubUserView.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GithubUserPage />
  </React.StrictMode>,
)
