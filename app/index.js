var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3$s=460'
}

var ProfilePic = React.createClass({
  render: function () {
    return  <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <a href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
      </a>
    )
  }
});

/*
  Focused
  Independent
  Reusuable
  Small
  Testable
*/

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
       <ProfilePic imageUrl={this.props.USER_DATA.image}/>
       <ProfileName name={this.props.USER_DATA.name}/>
       <ProfileLink username={this.props.USER_DATA.username}/>
     </div>
    )
  }
})

ReactDOM.render(<Avatar />,
                document.getElementById('app'));
