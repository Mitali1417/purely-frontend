import React from "react";
import { styles } from "./style";
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from "./AllRoutes";


const App = () => {
  return (
    <div className={`${styles.boxWidth} ${styles.bg}`}>
      <Router basename={process.env.PUBLIC_URL}>
        <AllRoutes/>
      </Router>
    </div>
  );
};

export default App;
