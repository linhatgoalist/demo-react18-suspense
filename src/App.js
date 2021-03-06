import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import NYTemp from "./WeatherTag2";
// const NYTemp = React.lazy(() => import ('./WeatherTag2'));
// const BerlinTemp = React.lazy(() => import ('./WeatherTag'));
// const SFTemp = React.lazy(() => import ('./WeatherTag3'));

function App() {

  return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 0"
        }}  
      >
        <h2>
          <span>How's the temperature today ?</span>
        </h2>
        {/* <React.Suspense fallback={<FontAwesomeIcon icon={solid('rotate')} spin/>}> */}
          {/* <BerlinTemp /> */}
          <NYTemp/>
          {/* <SFTemp/> */}
          {/* <React.Suspense fallback={<FontAwesomeIcon icon={solid('rotate')} spin/>}>
            <NYTemp/>
            <React.Suspense fallback={<FontAwesomeIcon icon={solid('rotate')} spin/>}>
              <SFTemp/>
            </React.Suspense>
          </React.Suspense> */}
        {/* </React.Suspense>  */}
      </div>
  );
}

export default App;
