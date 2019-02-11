import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import MediaList from '../../components'

const iconAndTextColor = '#ededed';

const MovieFooter = ({ voteAverate, releaseYear, title }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerItem}>
        <Ionicons name="md-star" size={32} color={iconAndTextColor} style={styles.icon} />
        <Text style={styles.text}>MediaList</Text>
      </View>
      <View style={styles.footerItem}>
        <Ionicons name="md-star" size={32} color={iconAndTextColor} style={styles.icon} />
        <Text style={styles.text}>{voteAverate}</Text>
      </View>
      {releaseYear && <View style={styles.footerItem}>
        <Ionicons name="md-calendar" size={32} color={iconAndTextColor} style={styles.icon} />
        <Text style={styles.text}>{releaseYear}</Text>
      </View>}
    </View>
  )
}

MovieFooter.defaultProps = {
  releaseYear: null,
}
MovieFooter.propTypes = {
  voteAverate: PropTypes.number.isRequired,
  releaseYear: PropTypes.string,
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: 360,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingBottom: 10,
    backgroundColor: '#eb8900',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 10,
  },
  text: {
    color: iconAndTextColor,
  }
})

export default MovieFooter;