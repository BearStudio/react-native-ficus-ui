import React from 'react';

import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { BaseToastProps } from 'react-native-toast-message';

import { useColorMode } from '../hooks/color-mode/useColorMode';

const createToast = (
  lightColor: string,
  darkColor: string
): React.FC<BaseToastProps> => {
  return ({ text1, text2 }) => {
    const { colorMode } = useColorMode();
    const backgroundColor = colorMode === 'dark' ? darkColor : lightColor;
    const textColor = colorMode === 'dark' ? '#1A202C' : '#ffffff';

    return (
      <View style={[styles.toastContainer, { backgroundColor }]}>
        <Text style={[styles.toastTitle, { color: textColor }]}>{text1}</Text>
        <Text style={[styles.toastMessage, { color: textColor }]}>{text2}</Text>
      </View>
    );
  };
};

export const getToastConfig = () => ({
  success: createToast('#38A169', '#68D391'),
  error: createToast('#E53E3E', '#FC8181'),
  warning: createToast('#DD6B20', '#F6AD55'),
  info: createToast('#3182ce', '#63b3ed'),
});

const styles = StyleSheet.create<{
  toastContainer: ViewStyle;
  toastTitle: TextStyle;
  toastMessage: TextStyle;
}>({
  toastContainer: {
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 8,
  },
  toastTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  toastMessage: {
    fontSize: 14,
  },
});
