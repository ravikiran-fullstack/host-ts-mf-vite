import './App.css'

import RemoteButtonType from '../@mf-types/app/Button';
import RemoteProcessAndChartsType from '../@mf-types/app/ProcessAndCharts';
import React from 'react';

const RemoteButton = React.lazy(() => import('app/Button')) as unknown as typeof RemoteButtonType;
const RemoteProcessAndCharts = React.lazy(() => import('app/ProcessAndCharts')) as unknown as typeof RemoteProcessAndChartsType;

function App() {

  return (
    <>
    <div>
      <h1>Host App</h1>
    </div>
    <RemoteButton size="large"/>
    <RemoteProcessAndCharts/>
    </>
  )
}

export default App
