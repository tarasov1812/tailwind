function Steps({ activeStep }) {
    return (
      <ul className="steps steps-vertical">
        <li className={`step ${activeStep === 1 ? "step-primary" : ""}`}>Register</li>
        <li className={`step ${activeStep === 2 ? "step-primary" : ""}`}>Choose plan</li>
        <li className={`step ${activeStep === 3 ? "step-primary" : ""}`}>Purchase</li>
        <li className={`step ${activeStep === 4 ? "step-primary" : ""}`}>Receive Product</li>
      </ul>
    );
  }

export default Steps;
