import { useState } from "react";
import Login from "./components/Login.jsx";
import Steps from "./components/Steps.jsx";
import Pagination from "./components/Pagination.jsx";
import UserDesktop from "./components/UserDesktop.jsx";
import DesktopHeader from "./components/DesktopHeader.jsx";
import "./App.css";


function App() {
  // State to track the active step
  const [activeStep, setActiveStep] = useState(1);

  // Function to handle step change
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Login />
      <Steps activeStep={activeStep} />
      <div />
      <Pagination activeStep={activeStep} onStepChange={handleStepChange} />
      {/* <DesktopHeader />
      <UserDesktop /> */}
    </>
  );
}

export default App;
