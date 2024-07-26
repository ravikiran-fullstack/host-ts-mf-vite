import './App.css'

import RemoteButtonType from '../@mf-types/app/Button';
import React from 'react';

const RemoteButton = React.lazy(() => import('app/Button')) as unknown as typeof RemoteButtonType;

function App() {

  return (
    <>
    <RemoteButton size="large"/>
    </>
  )
}

export default App
