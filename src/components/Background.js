import Background from './Images/background.jpg';
import React, { Component } from 'react';



var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`
};

 class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}

export default Section