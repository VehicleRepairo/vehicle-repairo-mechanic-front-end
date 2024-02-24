import React, { useState, useEffect } from 'react';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

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

  return (
    <div>
    
      {appointments.length === 0 ? (
        <p>No appointments</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Problem</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{appointment.name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.problem}</td>
                <td>
                  <button onClick={() => handleReject(appointment.id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
