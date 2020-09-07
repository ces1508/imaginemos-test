import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Rating = ({ iconSize, iconSelectColor, iconUnSelectedColor, score }) => {
  const stars = [...Array(5)];
  return (
    <View style={styles.wrapper}>
      {stars.map((_, index) => (
        <Icon
          key={`rating-${index}`}
          name="star"
          style={{
            ...styles.icon,
            color:
              Math.ceil(score) > index + 1
                ? iconSelectColor
                : iconUnSelectedColor,
          }}
          size={iconSize}
        />
      ))}
    </View>
  );
};

Rating.propTypes = {
  score: PropTypes.number.isRequired,
  iconSize: PropTypes.number.isRequired,
  iconSelectColor: PropTypes.string.isRequired,
  iconUnSelectedColor: PropTypes.string.isRequired,
};

Rating.defaultProps = {
  score: 5,
  iconSize: 15,
  iconSelectColor: 'yellow',
  iconUnSelectedColor: 'gray',
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 4,
  },
});

export default Rating;
