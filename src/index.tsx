import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './app/store'
import Counter from './components/Counter'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Counter />
        </Provider>
    </React.StrictMode>
)
