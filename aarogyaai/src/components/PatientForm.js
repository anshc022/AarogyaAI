import React from 'react';

function PatientForm() {
  return (
    <div className="patient-form">
      <h2>Patient Information</h2>
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-group">
          <label>Medical History</label>
          <textarea className="form-control"></textarea>
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PatientForm;
