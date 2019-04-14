import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Type from 'prop-types';
// import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
// import { PAGES } from '../../routes/pages';
// import { selectLogin } from '../../redux/selectors/login-selectors';
// import './app.css';

const mapStateToProps = state => ({
  // login: selectLogin(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  doRoute: push
}, dispatch);

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: Type.node
};

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default VisibleApp;
