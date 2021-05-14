import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f0d7cc',
        },
        secondary: {
            main: '#f44336',
        },
    },
});
// import React, { Component } from 'react';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import { DateRangePicker } from 'react-dates';

// class CalendarComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             startDate: null,
//             endDate: null,
//             focusedInput: null,
//         };
//     }

//     render() {
//         return (
//             <div className="App">
//                 <DateRangePicker
//                     startDateId="startDate"
//                     endDateId="endDate"
//                     startDate={this.state.startDate}
//                     endDate={this.state.endDate}
//                     onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
//                     focusedInput={this.state.focusedInput}
//                     onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
//                 />
//             </div>
//         );
//     }
// }

// export default CalendarComponent;