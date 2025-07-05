import { StrictMode ,lazy,Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const ProductList=lazy(()=>import('./components/ProductList.jsx'))
const ProductDetails=lazy(()=>import('./components/ProductDetails.jsx'))
const Checkout=lazy(()=>import('./components/Checkout.jsx'))
const Cart=lazy(()=>import('./components/Cart.jsx'))
const Error=lazy(()=>import('./components/Error.jsx'))
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/store.js'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {      
        index:true,
        element:<ProductList/>
      },
      {
        path:'product/:id',
        element:<ProductDetails/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'checkout',
        element:<Checkout/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<p>Loading page...</p>}>
      <RouterProvider router={router}/>
    </Suspense>
  </Provider>,
)
