import React from 'react';
import mongoService from '../services/mongoService.js';
class Records extends React.Component {

    constructor(props){
        super(props);
        this.state = {records: []};
    }

    componentDidMount(){
        mongoService.retrieveRecords(this.recordsRetrieved.bind(this));
    }

    recordsRetrieved(data){
        console.log(data);
        this.setState({records: data});

    }

    formatEdited(dateStr){
        var dt = new Date(dateStr);
        return dt.getDate()+'.'+(dt.getMonth()+1)+'.'+dt.getFullYear();

    }


    render() {
        return <div className="table-responsive">
            <h1>Records</h1>
            <table className="table table-condensed table-striped">
                <thead>

                <tr>
                    <th className="logo"></th>
                    <th>Date</th>

                    <th>Length</th>

                    <th>Position</th>
                    <th>Pace</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>

            {this.state.records.map(record =>
                <tr>
                    <td className="logo"><img className="img-responsive" src={record.picurl} alt={record.title} /></td>
                    <td>{this.formatEdited(record.date)}</td>
                    <td>{record.length}</td>
                    <td className="position">{record.position}</td>
                    <td className="pace">{record.pace}</td>
                    <td className="time">{record.time}</td>
                </tr> )}
            </tbody>
                </table>
        </div>
    }
}

export default Records;

