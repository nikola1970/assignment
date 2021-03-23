import React from 'react';

// components
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Wrapper } from './components/global/styled';

function App() {
    return (
        <Wrapper>
            <Header />
            <Dashboard />
        </Wrapper>
    );
}

export default App;
