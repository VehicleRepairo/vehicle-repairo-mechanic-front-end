import React, { useState, useEffect } from 'react';
import './appointments.css';
import useAuthStore from "../../store/authStore";
import { Flex } from "@chakra-ui/react";

const FETCH_INTERVAL = 36000000; // Fetch appointments every 5 seconds

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const authUser = useAuthStore((state) => state.user);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`http://localhost:8000/appointments/${authUser.uid}`);
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

  const handleRowClick = (id) => {
    setSelectedAppointment(id);
  };

  const handleAccept = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/done/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete appointment');
      }
      // Remove the deleted appointment from the local state
      setAppointments(appointments.filter(appointment => appointment._id !== id));
      setSelectedAppointment(null); // Deselect the appointment
      // Display message to the user
      alert("Appointment done");
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/appointments/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete appointment');
      }
      // Remove the deleted appointment from the local state
      setAppointments(appointments.filter(appointment => appointment._id !== id));
      setSelectedAppointment(null); // Deselect the appointment
      // Display message to the user
      alert("Appointment deleted");
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div className="appointments-container">
    
      {appointments.length > 0 ? (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Date</th>
              <th>Time</th>
              <th>Vehicle</th>
              <th>Problem</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment._id} onClick={() => handleRowClick(appointment._id)} className={selectedAppointment === appointment._id ? 'selected' : ''}>
                <td>{appointment.Name}</td>
                <td>{appointment.contact}</td>
                <td>{appointment.Date_of_appointment}</td>
                <td>{appointment.Appointments_time}</td>
                <td>{appointment.vehicle}</td>
                <td>{appointment.Service_Required}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-appointments">
          <img className="appointment_img" src="no_appointments.png" alt="No appointments" style={{ width: "150px", height: "150px" }} />
        </div>
      )}

      {/* Conditionally render buttons */}
      {selectedAppointment && (
        <div className="button-container">
          <Flex alignItems={"center"} justifyContent={"center"} gap={5} margin={5}>
            <div className="Done-container">
              <button onClick={() => handleAccept(selectedAppointment)}>Done</button>
            </div>
            <div className="Reject-container">
              <button onClick={() => handleReject(selectedAppointment)}>Reject</button>
            </div>
          </Flex>
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
