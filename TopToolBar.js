import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

/**
 * 头部导航栏
 * @returns {JSX.Element}
 */
const TopToolBar = ({history, title}) => {
  return (
    <View style={styles.navigator}>
      <Text fontWeight="500" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navigator: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A52B5',
  },
  back: {
    position: 'absolute',
    left: 18,
    top: 10,
  },
  title: {
    fontSize: 17,
    lineHeight: 24,
    color: '#ffffff',
    minWidth: 122,
    textAlign: 'center',
  },
});

export default TopToolBar;
