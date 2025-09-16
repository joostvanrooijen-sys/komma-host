import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Tabs } from 'komma-ui'
import { TodoFeature } from 'komma-todo'
import { AcquisitieFeature } from 'komma-acquisitie'

const router = createBrowserRouter([
  { path: '/', element: <div style={{ padding: 16 }}>Welkom bij Komma Host</div> },
  { path: '/todo', element: <TodoFeature /> },
  { path: '/acquisitie', element: <AcquisitieFeature /> }
])

function Shell() {
  return (
    <React.StrictMode>
      <Tabs tabs={[
        { label: 'To-Do', to: '/todo' },
        { label: 'Acquisitie', to: '/acquisitie' },
      ]} />
      <div style={{ padding: 16 }}>
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Shell />)
