import React from 'react';
import { Router, Route, Link } from 'react-router'
import TodoStore from '../store/TodoStore';
import ActionCreator from '../actions/TodoActionCreators';
import App from './App.jsx';
import NewEvent from './NewEvent.jsx';
import NewEventUI from './NewEventUI.jsx';
import TopMenu from './TopMenu.jsx';

export default React.createClass({
  _onChange() {
    this.setState(TodoStore.getAll());
  },

  getInitialState() {
    return TodoStore.getAll();
  },

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },

  handleAddTask(e) {
    let title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClear(e) {
    ActionCreator.clearList();
  },

  render() {
    let {tasks} = this.state;
    return (
    <div id="main">
        <TopMenu />

        <div className="pusher" style={{marginTop:'2em'}}>
          <div className="ui inverted vertical masthead center aligned segment">

            <div className="ui text container" id='home-slider'>

              <h1 className="ui inverted header" id='home-title'>
                Meet Booker
              </h1>

              <h2>The Simplest Meeting Scheduler You've Ever Seen</h2>

              <div className="two wide column">
                <img id="cal-screen-image" src="images/cal-screen.png"/>
              </div>

              <div className="ui huge primary button">
                <Link style={{color:'white'}} to={`/event/new`}>Try It Out</Link>
                <i className="right arrow icon"></i></div>
            </div>

          </div>

          <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
              <div className="row">
                <div className="eight wide column">
                  <h3 className="ui header">Scheduling a Meeting Has Never Been Easier.</h3>

                  <p>We let you schedule meetings in seconds. Anywhere.</p>

                  <p>Create conference rooms</p>

                  <p>Conduct meetings offsite</p>

                  <h3 className="ui header">Simple Selection of Invitees and Available Meeting Times</h3>

                  <p>Put a ScreenShot Here</p>
                </div>
                <div className="six wide right floated column">

                </div>
              </div>
              <div className="row">
                <div className="center aligned column">
                  <a className="ui huge button">Check Them Out</a>
                </div>
              </div>
            </div>
          </div>


          <div className="ui vertical stripe quote segment">
            <div className="ui equal width stackable internally celled grid">
              <div className="center aligned row">
                <div className="column">
                  <h3>"What a Company"</h3>

                  <p>That is what they all say about us</p>
                </div>
                <div className="column">
                  <h3>"I shouldn't have gone with their competitor."</h3>

                  <p>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ui vertical stripe segment">
            <div className="ui text container">
              <h3 className="ui header">Breaking The Grid, Grabs Your Attention</h3>

              <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing
                nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
                and worth your attention.</p>
              <a className="ui large button">Read More</a>
              <h4 className="ui horizontal header divider">
                <a href="#">Case Studies</a>
              </h4>

              <h3 className="ui header">Did We Tell You About Our Bananas?</h3>

              <p>Yes I know you probably disregarded the earlier boasts as non-sequitor filler content, but its really
                true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
              <a className="ui large button">I'm Still Quite Interested</a>
            </div>
          </div>


          <div className="ui inverted vertical footer segment">
            <div className="ui container">
              <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                  <h4 className="ui inverted header">About</h4>

                  <div className="ui inverted link list">
                    <a href="#" className="item">Sitemap</a>
                    <a href="#" className="item">Contact Us</a>
                    <a href="#" className="item">Religious Ceremonies</a>
                    <a href="#" className="item">Gazebo Plans</a>
                  </div>
                </div>
                <div className="three wide column">
                  <h4 className="ui inverted header">Services</h4>

                  <div className="ui inverted link list">
                    <a href="#" className="item">Banana Pre-Order</a>
                    <a href="#" className="item">DNA FAQ</a>
                    <a href="#" className="item">How To Access</a>
                    <a href="#" className="item">Favorite X-Men</a>
                  </div>
                </div>
                <div className="seven wide column">
                  <h4 className="ui inverted header">Footer Header</h4>

                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
