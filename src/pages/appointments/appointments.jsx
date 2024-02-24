import React, { useState, useEffect } from 'react';
import './appointments.css';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = () => {
    fetch('your_backend_endpoint/appointments')
      .then(response => response.json())
      .then(data => {
        setAppointments(data);
      })
      .catch(error => console.error('Error fetching appointments:', error));
  };

  const handleReject = (appointmentId) => {
    fetch(`your_backend_endpoint/appointments/${appointmentId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== appointmentId));
        } else {
          console.error('Failed to reject appointment');
        }
      })
      .catch(error => console.error('Error rejecting appointment:', error));
  };

  const handleDone = (appointmentId) => {
    // Implement functionality for "Done" button
  };

  const handleRowClick = (appointmentId) => {
    setSelectedAppointment(appointmentId);
  };

  return (
    <div className="appointments-container">
      
      {appointments.length === 0 ? (
  <div className="no-appointments">
    <p>No appointments</p>
    <img  src="no_appointments.png" alt="No appointments" style={{ width: "150px", height: "150px" }} className='appointmentsimg' />
  </div>
) : (
        <>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Problem</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id} onClick={() => handleRowClick(appointment.id)} className={selectedAppointment === appointment.id ? 'selected' : ''}>
                  <td>{appointment.name}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.problem}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedAppointment !== null && (
            <div className="button-container">
              <button className="reject-button" onClick={() => handleReject(selectedAppointment)}>Reject</button>
              <button className="done-button" onClick={() => handleDone(selectedAppointment)}>Done</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
