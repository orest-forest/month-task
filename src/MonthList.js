import React from 'react';


export default function MonthList(props) {

    if (Object.keys(props.sortedObj) == 0) {
        return null
    }

    let i = -1;
    const items = props.monthNames.map(function (month) {
        i = i + 1;
        let userAmount = props.sortedObj[i];
        let q = userAmount.length;
        let amount = (q <= 2) && 'Zero-Two' || (q <= 6) && 'Three-Six' || (q <= 10) && 'Seven-Ten' || 'Eleven-More';
        return (
                <li id={i} className={`${amount}`} onMouseEnter={props.monthHandler}>{month}</li>
        )
    });

    return (
        <ul>
            {items}
        </ul>
    )
}















// export default class MonthList extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             monthNames: ["January", "February", "March", "April", "May", "June",
//                 "July", "August", "September", "October", "November", "December"
//             ],
//             sortedObj: {
//                 0: [],
//                 1: [],
//                 2: [],
//                 3: [],
//                 4: [],
//                 5: [],
//                 6: [],
//                 7: [],
//                 8: [],
//                 9: [],
//                 10: [],
//                 11: [],
//             }
//         };
//     };
//
//     componentDidUpdate (prevProps) {
//         console.log('heheh');
//         if (this.props.data !== prevProps.data) {
//             const sortedObj = {
//                 0: [],
//                 1: [],
//                 2: [],
//                 3: [],
//                 4: [],
//                 5: [],
//                 6: [],
//                 7: [],
//                 8: [],
//                 9: [],
//                 10: [],
//                 11: [],};
//         for (let i = 0; i < this.props.data.length; i++) {
//             let date = new Date(this.props.data[i].dob);
//             let monthNumber = date.getMonth();
//            sortedObj[monthNumber].push(this.props.data[i]) ;
//         }
//             this.setState(sortedObj)
//         }
//
//     }
//
//     ItemBuilder = () => {
//         let i = -1;
//         const items = this.state.monthNames.map(function(month) {
//             i = i + 1;
//             let userAmount = this.state.sortedObj[i];
//             let q = userAmount.length;
//             let amount = (q <= 2) && 'Zero-Two' || (q <= 6) && 'Three-Six' || (q <= 10) && 'Seven-Ten' || 'Eleven-More';
//             return (
//                 <li id={i} className={`${amount}`} onClick={MonthInfo}>{month}</li>
//             )
//         });
//     };
//
//     // function ShowUsers (event) {
//     //     // console.log(event.target)
//     //     // console.log(event.target.id)
//     //     // console.log(sortedObj[event.target.id]);
//     //     console.log(event.target);
//     //     if (typeof event.target === 'undefined') { return null }}
//
//
//     //     return (
//     //         <div>
//     //       <h3>123123</h3>
//     //         </div>
//     //     )
//     // }
//
//
//
//         // (month) => <li className={`${amount}`}>{month}</li> )
// render  () {
//     let sortedObj123 = this.state.sortedObj;
//     let i = -1;
//     const items = this.state.monthNames.map(function(month) {
//         i = i + 1;
//         let userAmount = sortedObj123[i];
//         let q = userAmount.length;
//         let amount = (q <= 2) && 'Zero-Two' || (q <= 6) && 'Three-Six' || (q <= 10) && 'Seven-Ten' || 'Eleven-More';
//         return (
//             <li id={i} className={`${amount}`} onClick={MonthInfo}>{month}</li>
//         )
//     });
//
//     return (
//         <ul>
//             <ItemBuilder />
//         {/*{items}*/}
//         {/*<MonthInfo />*/}
//             {/*<li>Январь</li>*/}
//             {/*<li>Февраль</li>*/}
//             {/*<li>Март</li>*/}
//             {/*<li>Апрель</li>*/}
//             {/*<li>Май</li>*/}
//             {/*<li>Июнь</li>*/}
//             {/*<li>Июль</li>*/}
//             {/*<li>Август</li>*/}
//                 {/*<li>Октябрь</li>*/}
//                 {/*<li>Сентябрь</li>*/}
//                 {/*<li>Ноябрь</li>*/}
//                 {/*<li>Декабрь</li>*/}
//     </ul>
//     )
// }}