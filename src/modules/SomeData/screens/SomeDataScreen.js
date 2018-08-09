// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as someDataActions from '../ducks/someDataActions';
import { SomeDataUI } from '../components/SomeDataUI';

type PropsType = {
  data: Array<{
    id: string,
    title: string,
    width: string,
    url: string,
    height: string
  }>,
  clearData: () => void,
  getSomeData: (args: {
    limit: number, query: string
  }) => void
};

type StateType = {
  query: string
};

class SomeDataScreen extends Component<PropsType, StateType> {
  static navigationOptions = {
    title: 'Get_Data_From_API',
  };

  state = {
    query: '',
  }

  componentWillUnmount() {
    this.props.clearData(); // eslint-disable-line react/destructuring-assignment
  }

  onChangeHandler = query => this.setState({ query })

  onSubmitHandler = () => {
    const { query } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getSomeData({ query, limit: 15 });
  }

  render() {
    const { data } = this.props;
    return (
      <SomeDataUI
        data={data}
        onChangeHandler={this.onChangeHandler}
        onSubmitHandler={this.onSubmitHandler}
      />
    );
  }
}

const mapStateProps = ({ someData }) => ({
  payload: someData.payload,
  data: someData.data,
});

const mapDispatchToProps = (dispatch: (action: {}) => void) => ({
  getSomeData: ({ limit, query }) => dispatch(someDataActions.getSomeData({ limit, query })),
  clearData: () => dispatch(someDataActions.clearData()),
});

export default connect(mapStateProps, mapDispatchToProps)(SomeDataScreen);
