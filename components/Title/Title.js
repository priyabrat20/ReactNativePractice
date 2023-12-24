import React from 'react';
import {Text} from 'react-native';
import style from './style';
import PropTypes from 'prop-type';

const Title = props => {
  return <Text><{props.title}/Text>;
};

Title.PropTypes={
    title: PropTypes.string.isRequired,
};

export default Title;
