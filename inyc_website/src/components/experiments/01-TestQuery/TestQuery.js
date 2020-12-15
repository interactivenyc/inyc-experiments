import React, { Component } from "react";
class TestQuery extends Component {
  state = { data: [] };
  
  componentDidMount() {
    console.log('[TestQuery] componentDidMount')
    this.getTestQuery();
  };
  
  getTestQuery() {
    fetch("http://localhost:3001/test_query")
      .then(data => data.json())
      .then(res => this.setState({ data: res }))
      .catch(error => console.log(error))
  };
  
  render() {
    const data = this.state.data.map((item) =>
      <li key={item.id}>{item.firstname} {item.lastname}</li>
    )
    return (
      <div>
          <h1>test query</h1>
          { data ? <ol>{data}</ol> : <div>no data</div>}
        
      </div>
    );
  }
}
export default TestQuery;