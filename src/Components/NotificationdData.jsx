import React from 'react'

import '../Styles/Notification.css'


const NoteData=[
    {
        id:1,
        noteheader:"Application Report",
        notecontent:"The short tem loan of ogbueli Mallam Stutern {0035562} just got approved with 70% prediction metric"

    },
    {
        id:2,
        noteheader:"Security Alert",
        notecontent:"A new device was just looge dinto your account if this was not you please change you password immediately"

    },
    {
        id:3,
        noteheader:"Application Report",
        notecontent:"The short tem loan of Pelumi Mariam Stutern{0035672} just got approved with 70% prediction metric"

    },
    {
        id:4,
        noteheader:"New Resources",
        notecontent:"A new tutorial has been published in the resource channel",

    },
    {
        id:5,
        noteheader:"System Update",
        notecontent:"A new web app will be Laonced by 30th of may",

    },
    {
        id:6,
        noteheader:"Application Download",
        notecontent:"You just downloaded the application report of Ogbueni Mallam {0035562}",

    }
]

function NotificationdData() {
    return (
        <div >
            <table className='note-table'>
            {NoteData.map((val, key) => {
                return (
                <tr key={key}>
                    
                    <td className='note_td'>
                        <div><input type="checkbox" /></div>
                        <div className='note-cnt'>
                             <p className='noteheader'>{val.noteheader}</p>
                             <p className='notecontent'>{val.notecontent}</p>
                         </div>
                                 
                    </td>
                </tr>
                );
            })}
            </table>
      </div>
    )
}
export default NotificationdData
