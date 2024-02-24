import React, { useState, useEffect } from 'react';
import './appointments.css';

<<<<<<< HEAD
=======
const FETCH_INTERVAL = 5000; // Fetch appointments every 5 seconds

>>>>>>> 4dfc46eedf343e8bb5e588564065faa99a8cf515
export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
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
=======
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:5000/appointment');
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
    } catch (error) {
      console.error('Error rejecting appointment:', error);
    }
>>>>>>> 4dfc46eedf343e8bb5e588564065faa99a8cf515
  };

  const handleRowClick = (appointmentId) => {
    setSelectedAppointment(appointmentId);
  };

  return (
    <div className="appointments-container">
<<<<<<< HEAD
      
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
=======
      <h2>Appointments</h2>
      {appointments.length > 0 ? (
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
              <tr key={appointment._id} onClick={() => handleRowClick(appointment._id)} className={selectedAppointment === appointment._id ? 'selected' : ''}>
                <td>{appointment.name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.problem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-appointments">
          <p>No appointments</p>
          <img src="no_appointments.png" alt="No appointments" style={{ width: "150px", height: "150px" }} />
        </div>
>>>>>>> 4dfc46eedf343e8bb5e588564065faa99a8cf515
      )}
    </div>
  );
}
