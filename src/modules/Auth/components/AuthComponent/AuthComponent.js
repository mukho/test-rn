// @flow
import * as React from 'react';
import {
  View, Text, TextInput, Image, TouchableOpacity,
} from 'react-native';

import { LogInRoute, SignUpRoute } from '../../../../navigation/ducks/constants';
import { Button } from '../../../../components/Button';
import styles from './AuthComponent.styles';

type NavToType = ({ routeName: string, params?: {} }) => void;

const RenderSignUpScreenFooter = ({ navTo }: {
  navTo: NavToType
}) => (
  <View style={styles.footer}>
    <Text style={styles.haveAccount}>
      {'Already have an account? '}
    </Text>
    <TouchableOpacity
      onPress={() => navTo({ routeName: LogInRoute })}
    >
      <Text style={styles.haveAccount}>
        Sign In.
      </Text>
    </TouchableOpacity>
  </View>
);

const RenderSignInMethodAuth = ({ changeMethodLogIn }) => (
  <View style={styles.inRow}>
    <TouchableOpacity
      key={1}
      onPress={() => changeMethodLogIn('Twitter')}
    >
      <Image
        source={require('./assets/linkedinLogo.png')}
        style={styles.linkedinLogo}
      />
    </TouchableOpacity>
    <TouchableOpacity
      key={2}
      onPress={() => changeMethodLogIn('Facebook')}
    >
      <Image
        source={require('./assets/linkedinLogo.png')}
        style={styles.linkedinLogo}
      />
    </TouchableOpacity>
    <TouchableOpacity
      key={3}
      onPress={() => changeMethodLogIn('Linkedin')}
    >
      <Image
        source={require('./assets/linkedinLogo.png')}
        style={styles.linkedinLogo}
      />
    </TouchableOpacity>
  </View>
);

const RenderSignInScreenSubTitle = () => ([
  <Image
    source={require('./assets/loginLogo.png')}
    style={styles.signinLogo}
    key={1}
  />,
  <Text style={styles.cnooseMethodTitle} key={2}>
    Choose Your Method.
  </Text>,
]);

type PropsType = {
  routeName: string,
  navTo: (args: { routeName: string, params?: {} }) => void,
  sendAuthData: () => void,
  email: string,
  password: string,
  onChangeText: (args: { stateType: string, value: string }) => void
};

type StateType = {
  methodForLogin: string
};

class SignUp extends React.PureComponent<PropsType, StateType> {
  textInput = React.ElementRef

  state = {
    methodForLogin: 'Linkedin',
  }


  setTextInputRef = (elem: ?React.ElementRef<typeof TextInput>) => {
    this.textInput = elem;
  }

  isSignUpScreen = (routeName: string) => (
    routeName === SignUpRoute
  )

  changeMethodLogIn = (methodForLogin: string) => {
    this.setState({
      methodForLogin,
    });
    // $FlowFixMe
    this.textInput.focus();
  }

  render() {
    const {
      routeName, navTo, sendAuthData, email, password, onChangeText,
    } = this.props;
    const { methodForLogin } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.formSection}>
            { this.isSignUpScreen(routeName) ? null
              : <RenderSignInScreenSubTitle navTo={navTo} />
            }
            { this.isSignUpScreen(routeName) ? (
              <Image
                source={require('./assets/linkedinLogo.png')}
                style={styles.linkedinLogo}
              />
            )
              : (
                <RenderSignInMethodAuth
                  changeMethodLogIn={this.changeMethodLogIn}
                />
              )
            }

            { this.isSignUpScreen(routeName) ? (
              <Text style={styles.contentTitle}>
                Sign Up With Linkedin
              </Text>
            )
              : null
            }
            <TextInput
              placeholder={`${methodForLogin} Email Address`}
              style={styles.input}
              onChangeText={value => onChangeText({ stateType: 'email', value })}
              value={email}
              ref={this.setTextInputRef}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={value => onChangeText({ stateType: 'password', value })}
              value={password}
            />
            <Text style={styles.disclaimer}>
              By creating an account, I agree to the Terms of Use and Privacy Policy
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.fullWidth}
              onPress={sendAuthData}
            >
              <Button text="CONTINUE" />
            </TouchableOpacity>
            { this.isSignUpScreen(routeName) ? <RenderSignUpScreenFooter navTo={navTo} />
              : null
            }
          </View>
        </View>
      </View>
    );
  }
}

export default SignUp;
