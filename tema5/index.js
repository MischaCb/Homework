('use strict');

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
      return 'You liked this.';
    }

    return (
        <button onClick={this.handleOnClick}>Like</button>
      );
  }
}

function App() {
  return (
    <div>
    <h1>Hello to my website</h1>
    <LikeButton />
    <Header />
    <Section />
    <Header />
    <Section />
    </div>
  );
}


  function Header() {
    return ( 
      <div>
        <h1>Section with list</h1>
      </div>
    );
  }

  function Section() {
    return (
    <div>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li><LikeButton /></li>
      </ul>
    </div>
    );
  }

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);