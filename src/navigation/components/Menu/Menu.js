// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import * as menuActions from '../../ducks/menuActions';
import styles from './Menu.styles';

type PropsType = {
  logOut: () => {},
  clearNavTo: () => {},
  routeNavTo: string,
  navigation: {
    navigate: (args: { routeName: string }) => void
  }
};

type StateType = {
  isMenuOpened: boolean
};

class Menu extends React.PureComponent<PropsType, StateType> {
  state = {
    isMenuOpened: false,
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

  toggleMenu = () => this.setState(({ isMenuOpened }) => ({ isMenuOpened: !isMenuOpened }))

  render() {
    const { isMenuOpened } = this.state;
    const { logOut } = this.props;

    const MenuIcon = () => (
      <TouchableOpacity
        onPress={this.toggleMenu}
        style={styles.button}
      >
        <Image
          source={require('../assets/menu.png')}
        />
      </TouchableOpacity>
    );

    return (
      <View style={styles.wrapper}>
        <MenuIcon />
        {
          isMenuOpened ? (
            <TouchableOpacity
              style={styles.menu}
              onPress={logOut}
            >
              <Text>
                Log Out
              </Text>
            </TouchableOpacity>
          ) : null
        }
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: (action: {}) => void) => ({
  logOut: () => dispatch(menuActions.logOut()),
  clearNavTo: () => dispatch(menuActions.clearNavTo()),
});

const mapStateToProps = ({ menu: { routeNavTo } }) => ({
  routeNavTo,
});
// $FlowFixMe
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Menu));
