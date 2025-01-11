// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./styles/loader.css";

// // بارگذاری تنبل کامپوننت‌ها
// const DashboardIndex = React.lazy(() => import("./containers/Dashboard"));
// const WeatherListIndex = React.lazy(() => import("./containers/WeatherList"));
// const WeatherDetailsIndex = React.lazy(() =>
//   import("./containers/WeatherDetails")
// );

// const App = () => {
//   return (
//     <Router>
//       
//       <Suspense
//         fallback={
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100vh",
//             }}
//           >
//             <div className="loader"></div>
//           </div>
//         }
//       >
//         <Routes>
//       
//           <Route path="/" element={<DashboardIndex />} />

//          
//           <Route path="/weather-list" element={<WeatherListIndex />} />

//        
//           <Route path="/weather-details" element={<WeatherDetailsIndex />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;

import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/loader.css";

// بارگذاری تنبل کامپوننت‌ها
const DashboardIndex = React.lazy(() => import("./containers/Dashboard"));
const WeatherListIndex = React.lazy(() => import("./containers/WeatherList"));
const WeatherDetailsIndex = React.lazy(() =>
  import("./containers/WeatherDetails")
);


const App = () => {
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setShowFallback(false);
    }, 1500); 

  
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
   
      {showFallback ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="loader"></div>
        </div>
      ) : (
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <div className="loader"></div>
            </div>
          }
        >
          <Routes>
        
            <Route path="/" element={<DashboardIndex />} />

        
            <Route path="/weather-list" element={<WeatherListIndex />} />


            <Route path="/weather-details" element={<WeatherDetailsIndex />} />
          </Routes>
        </Suspense>
      )}
    </Router>
  );
};

export default App;
