// @flow
import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import {
  SignUpSuccessRoute, LogInRoute, SignUpRoute, SomeDataRoute,
} from '../../../../navigation/ducks/constants';
import { Button } from '../../../../components/Button';
import styles from './InfoComponent.styles';

type NavToType = ({ routeName: string, params?: {} }) => void;

const RenderSuccessScreenHeader = () => (
  <View>
    <Image source={require('./assets/success.png')} />
  </View>
);

const RenderWelcomeScreenHeader = () => (
  <View style={styles.logo} key={1}>
    <Image source={require('./assets/logo.png')} />
  </View>
);

const RenderWelcomeScreenBody = () => (
  <View style={styles.textSectionContent}>
    <Text style={styles.subtitle}>
      Welcome to Considerit.
    </Text>
    <Text style={styles.paragraph}>
      {"Are you ready to build more meaningful relationships that matter? Click 'Get Started' to start your journey."}
    </Text>
  </View>
);

const RenderSuccessScreenBody = () => (
  <View style={styles.bodyCenter}>
    <Text style={[styles.subtitle, styles.textCenter]}>
      Success! Your account has been linked.
    </Text>
  </View>
);

const RenderWelcomeScreenFooter = ({ navTo }: {
  navTo: NavToType
}) => (
  <View style={styles.footer}>
    <Text style={styles.haveAccount} key={1}>
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

const isSignUpSuccessScreen = (routeName: string) => (
  routeName === SignUpSuccessRoute
);

const InfoComponent = ({ navTo, routeName }: {
  navTo: NavToType,
  routeName: string
}) => (
  <View style={styles.wrapper}>
    <View style={styles.logoSection}>
      { isSignUpSuccessScreen(routeName) ? <RenderSuccessScreenHeader />
        : <RenderWelcomeScreenHeader />
      }
    </View>
    <View style={styles.textSection}>
      { isSignUpSuccessScreen(routeName) ? <RenderSuccessScreenBody />
        : <RenderWelcomeScreenBody />
      }
      <View style={styles.textSectionContent}>
        <TouchableOpacity
          style={styles.fullWidth}
          onPress={() => navTo({
            routeName: isSignUpSuccessScreen(routeName) ? SomeDataRoute : SignUpRoute,
          })}
        >
          <Button
            text={isSignUpSuccessScreen(routeName) ? 'CONTINUE' : 'GET STARTED'}
          />
        </TouchableOpacity>
        { isSignUpSuccessScreen(routeName) ? null
          : <RenderWelcomeScreenFooter navTo={navTo} />
        }
      </View>
    </View>
  </View>
);

export default InfoComponent;
