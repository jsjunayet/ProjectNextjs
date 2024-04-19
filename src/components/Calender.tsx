
"use client"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"
import { EventContentArg } from '@fullcalendar/core/index.js';
import CustomViewPlugin from "./CustomView"
import { useRef } from 'react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'

const Calender = () => {
    const handleDateClick = (arg: DateClickArg) => {
        alert(arg.dateStr)
    }

    // const renderEventContent = (eventInfo: EventContentArg) => {
    //     console.log(eventInfo.event.title, eventInfo.timeText)
    // };

    return (
        <div className='mt-10 bg-slate-400'>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                initialView="dayGridMonth"
                events={[
                    { title: 'event 1', date: '2024-05-01' },
                    { title: 'my job has started', date: '2024-04-19' }
                ]}
                dateClick={handleDateClick}
                headerToolbar={
                    {
                        start: 'today prev,next',
                        center: 'title',
                        end: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }
                }
                height={"80vh"}

            // eventContent={renderEventContent}

            // plugins={[dayGridPlugin, CustomViewPlugin]} 
            // initialView="custom" 

            />
            {/* <button onClick={goNext}>Go Next!</button>
            <FullCalendar ref={calendarRef} plugins={[dayGridPlugin]}></FullCalendar> */}

            {/* <FullCalendar schedulerLicenseKey="XXX" plugins={[resourceTimelinePlugin]} /> */}
        </div>
    );
};

export default Calender;