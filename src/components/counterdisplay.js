import React, { Component } from "react";
import '../index.css';

/* 
  Here is our only presentational component (or dumb component as some people call it). It's only
  concern is displaying the values it recieves from its parent container component (or smart component). 

  We should also use propTypes or flow to add type constraints to the incoming data.

  Also, we use React.PureComponent in this case because this is a "pure component" and can be speed up
  by letting react now that this is a simple component with No life-cycle callback hooks, business logic, data fetching or 
  any other costly operations. 
*/
export default class CounterDisplay extends Component {
  render() {
    return (
    	<div className="wrapper">
    		<h1>Counter App</h1>
    		<p>Count: {this.props.value}</p>
    	</div>
    )
  }
}
