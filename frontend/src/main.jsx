import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51SLksmHBoCfDLYeXyyM1Grw1OEsZLwHq7z8CjQU07suB3U5ciiWXtV3k1nvG2q6G3denEyvib54LKwiI0GRFAV7u00MPpdzyUN");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Elements stripe={stripePromise}>
    <App />
    </Elements>
  </StrictMode>,
)
