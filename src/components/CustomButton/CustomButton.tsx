/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';

import styles from './styles';

type CustomButtonProps = {
  title: string;
  color: string;
  variant?: 'outlined' | 'contained';
} & TouchableOpacityProps;

const CustomButton = ({
  title,
  color,
  variant = 'contained',
  ...rest
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: variant === 'contained' ? color : 'transparent',
          borderWidth: variant === 'outlined' ? 1 : 0,
          borderColor: color,
        },
      ]}
      {...rest}>
      <Text style={{color: variant === 'contained' ? '#fff' : color}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
