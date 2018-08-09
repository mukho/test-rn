// @flow
import R from 'ramda';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { SignUpRoute } from '../../../navigation/ducks/constants';
import { AuthComponent } from '../components/AuthComponent';
import * as authActions from '../ducks/authActions';


type StateType = {
  email: string,
  password: string
};

type PropsType = {
  signUpUser: (args: { email: string, password: string}) => void,
  signInUser: (args: { email: string, password: string}) => void,
  routeNavTo: string,
  routeName: string,
  navTo: (args: { routeName: string, params?: {} }) => void,
  clearNavTo: () => void,
  navigation: {
    navigate: (args: { routeName: string }) => void
  }
};

class AuthContainer extends Component<PropsType, StateType> {
  state = {
    email: '',
    password: '',
  }

  componentDidUpdate(prevProps) {
    const { routeNavTo, navigation } = this.props;
    if (!!routeNavTo && prevProps.routeNavTo !== routeNavTo) {
      navigation.navigate({
        routeName: routeNavTo,
      });
    }
  }

  componentWillUnmount() {
    this.props.clearNavTo(); // eslint-disable-line react/destructuring-assignment
  }

  onChangeText = ({ stateType, value }) => {
    this.setState({
      [stateType]: value,
    });
  }

  isSignUpScreen = () => (
    this.props.routeName === SignUpRoute // eslint-disable-line react/destructuring-assignment
  )

  sendAuthData = () => {
    const { email, password } = this.state;
    const { signUpUser, signInUser } = this.props;
    R.ifElse(
      this.isSignUpScreen,
      () => signUpUser({ email, password }),
      () => signInUser({ email, password }),
    )();
  }

  render() {
    const { routeName, navTo } = this.props;
    const { email, password } = this.state;

    return (
      <AuthComponent
        routeName={routeName}
        navTo={navTo}
        sendAuthData={this.sendAuthData}
        onChangeText={this.onChangeText}
        email={email}
        password={password}
      />
    );
  }
}

const mapDispatchToProps = (dispatch: (action: {}) => {}) => ({
  signUpUser: ({ email, password }) => (
    dispatch(authActions.signUpUser({
      email, password,
    }))
  ),
  signInUser: ({ email, password }) => (
    dispatch(authActions.signInUser({
      email, password,
    }))
  ),
  clearNavTo: () => dispatch(authActions.clearNavTo()),
});

const mapStateToProps = ({ auth }) => ({
  routeNavTo: auth.routeNavTo,
});
// $FlowFixMe
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(AuthContainer));
