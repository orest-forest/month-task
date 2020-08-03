import React from 'react';
import MonthList from './MonthList'
import MonthInfo from './MonthInfo'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
            monthNames: ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ],
            sortedObj: {},
            birthdayList: [],
        };
    };


async componentDidMount () {
    let response = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');
    let json = await response.json();
    this.setState({data: json});

    const sortedCacheObj = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],};
        for (let i = 0; i < this.state.data.length; i++) {
            let date = new Date(this.state.data[i].dob);
            let monthNumber = date.getMonth();
            sortedCacheObj[monthNumber].push(this.state.data[i]) ;
        }
        this.setState({sortedObj: sortedCacheObj})
}

monthHandler = (event) => {
    let cacheObj = [];
    let showObj = this.state.sortedObj[event.target.id];
    for (let i = 0; i < showObj.length; i++) {
       cacheObj.push(showObj[i])
    }
    this.setState({birthdayList: cacheObj})
};

  render  () {
  return (
      <div className="container">
        <h1 >Month sort app</h1>
              <MonthList sortedObj={this.state.sortedObj } monthNames={this.state.monthNames} monthHandler={this.monthHandler} />
              <MonthInfo birthdayList={this.state.birthdayList} />
      </div>
  );
  }
}

export default App;
