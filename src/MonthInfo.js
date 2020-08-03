import React from 'react';


export default function MonthInfo (props) {

    if (props.birthdayList.length === 0) {
        return (null)
    }

    let showBirthdayList = props.birthdayList;
    const items = showBirthdayList.map(function (info) {
        let firstName = info.firstName;
        let lastName = info.lastName;
        let id = info.id;
        let dob = new Date(info.dob);
        return (
            <li key={id}>{firstName} {lastName} {dob.getFullYear()}-{dob.getDate() }-{dob.getMonth() + 1}</li>
        )
    });

    return (
        <div>
            <h3>People who born in this month</h3>
            <ul>
                {items}
            </ul>
        </div>
    )
}
