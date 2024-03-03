import React, { useState, useEffect } from 'react';
import './appointments.css';

const FETCH_INTERVAL = 36000000; // Fetch appointments every 5 seconds

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:5000/appointment');
        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();

    const interval = setInterval(fetchAppointments, FETCH_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const handleReject = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:5000/appointment/${appointmentId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to reject appointment');
      }
      setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment._id !== appointmentId));
      setSelectedAppointment(null); // Reset selected appointment after rejection
    } catch (error) {
      console.error('Error rejecting appointment:', error);
    }
  };

  const handleRowClick = (appointmentId) => {
    setSelectedAppointment(appointmentId);
    setButtonClicked(null); // Reset button clicked state when row is clicked
  };

  const handleAccept = async (appointmentId) => {
    setButtonClicked(appointmentId);
    // Implement accept logic here
  };

  return (
    <div className="appointments-container">
      {appointments.length > 0 ? (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Vehicle</th>
              <th>Problem</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment._id} onClick={() => handleRowClick(appointment._id)} className={selectedAppointment === appointment._id ? 'selected' : ''}>
                <td>{appointment.user_uid}</td>
                <td>{appointment.Date_of_appointment}</td>
                <td>{appointment.Appointment_time}</td>
                <td>{appointment.vehicle} - {appointment.vehicle_brand}</td>
                <td>{appointment.Service_Required}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-appointments">
          <p>No appointments</p>
          <img src="no_appointments.png" alt="No appointments" style={{ width: "150px", height: "150px" }} />
        </div>
      )}

      {selectedAppointment && (
        <div className="button-container">
          <div className="Done-container">
            <button onClick={() => handleAccept(selectedAppointment)} className={buttonClicked === selectedAppointment ? 'clicked' : ''}>Done</button>
          </div><br />
          <div className="Reject-container">
            <button onClick={() => handleReject(selectedAppointment)} className={buttonClicked === selectedAppointment ? 'clicked' : ''}>Reject</button>
          </div>
        </div>
      )}
    </div>
  );
}
