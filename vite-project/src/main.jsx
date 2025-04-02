import { StrictMode } from 'react';
import { React } from "react";
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import Priya from './App.jsx';
import Anshu from './Priya.jsx';

function MyApp() {
    return (
        <div>
            <h1>Custom App ! </h1>
        </div>
    )
}

const ReactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const anotherElement = (
    <a href="https: //google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank' },
    'click me to visit google'
)

createRoot(
    document.getElementById('root')).
    render(
        reactElement
)
