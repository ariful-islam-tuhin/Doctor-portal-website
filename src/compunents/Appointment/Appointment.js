import React from 'react';

import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvailableApointment from './AvailableApointment/AvailableApointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>      
            <AppointmentHeader date = {date} setDate = {setDate}></AppointmentHeader>
            <AvailableApointment date = {date}></AvailableApointment>
        </div>
    );
};

export default Appointment;