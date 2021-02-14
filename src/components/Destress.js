// utility functions
import React from "react";

import Snake from "react-simple-snake";

import CoolTabs from 'react-cool-tabs';

export  default  class  Destress  extends  React.Component {
    render() {
       return (
         <div>
					<SnakeGame />
         </div>
    );
    }}

  class SnakeGame extends React.Component {
    render() {
      return <div height = '200px'>
        <Snake />
      </div>
    }
  }
