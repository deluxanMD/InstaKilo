import {TextInput, TextInputProps} from 'react-native';
import React from 'react';

import styles from './styles';

type TextInputFieldProps = TextInputProps;

const TextInputField = (props: TextInputFieldProps) => {
  return <TextInput style={styles.input} {...props} />;
};

export default TextInputField;
