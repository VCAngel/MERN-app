import React from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/app.scss';
import Test from './components/Test'

const App = () => {
    return (
        <React.Fragment>
            <Test />
        </React.Fragment>
    )
}

export default hot(App);