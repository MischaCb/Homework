import logo from './logo.svg';
import './App.css';
import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleOnClick = () => {
    this.setState({ liked: true });
  }

  render() {
    if (this.state.liked) {
      return (
        <div>
          <p style={{color: "white"}}>
            {this.props.text}
          </p>
        </div>
      );
    }

    return (
        <button onClick={this.handleOnClick}>Like</button>
      );
  }
}

function Section(props) {
  const{id, footText} = props;
   return (
    <section id={id}>
      <p style={{color: "white"}}>This is a basic section on the page</p>
      <SectionFooter footText={footText}/>
    </section>
  );
}

function SectionFooter (props){
  const{footText} = props;
  return (
    (<h2 style={{color: "yellow"}}> {footText}, my color is yellow</h2>)
  )
}

function App() {

  const section1Id = "s1";
  const section2Id = "s2";
  const section1Footer = "I stay at the end of section 1";
  const section2Footer = "Here is section 2 end";
  const textForLikeButton = "You liked. This text comes from <App /> component!"

  return (
    <div style={{backgroundColor: "black"}}>
      <h1 style={{color: "white"}}>Learning react props</h1>
        <Section id={section1Id} footText={section1Footer} />
        <Section id={section2Id} footText={section2Footer}/>
        <LikeButton text={textForLikeButton} />
    </div>
  );
}

export default App;
