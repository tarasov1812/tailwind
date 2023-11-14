function Pagination({ activeStep, onStepChange }) {
    return (
      <div className="join">
        <button className={`join-item btn ${activeStep === 1 ? "btn-active" : ""}`} onClick={() => onStepChange(1)}>1</button>
        <button className={`join-item btn ${activeStep === 2 ? "btn-active" : ""}`} onClick={() => onStepChange(2)}>2</button>
        <button className={`join-item btn ${activeStep === 3 ? "btn-active" : ""}`} onClick={() => onStepChange(3)}>3</button>
        <button className={`join-item btn ${activeStep === 4 ? "btn-active" : ""}`} onClick={() => onStepChange(4)}>4</button>
      </div>
    );
  }

export default Pagination;