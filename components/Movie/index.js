import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, ImageBackground, StyleSheet, Dimensions, StatusBar } from 'react-native';
import MovieFooter  from './MovieFooter';

const { width, height } = Dimensions.get('window')

const getWidthSizeByPercentage = percentage => (percentage / 100) * width
const getHeightSizeByPercentage = percentage => (percentage / 100) * height
const movieWidth = getWidthSizeByPercentage(96)
const movieHeight = getHeightSizeByPercentage(59)
const PosterWidth = getWidthSizeByPercentage(96)
const PosterHeight = getHeightSizeByPercentage(58)


export default class Movie extends PureComponent {
  render() {
    const { movie, onPress } = this.props;
    const {
      poster_path,
      id,
      vote_average,
      release_date,
      title,

    } = movie;
    const releaseYear = release_date ? release_date.substring(0,4) : null;

    return (
      <View style={styles.movie}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
        <TouchableOpacity onPress={() => onPress(id)}>
          <ImageBackground
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${poster_path}`,
            }}
            style={styles.poster}
          >
            <MovieFooter
              voteAverate={vote_average}
              releaseYear={releaseYear}
              title = {title}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
    )
  }
}

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired
  }),
  onPress: PropTypes.func,
};

Movie.defaultProps = {
  onPress: () => null,
}

const styles = StyleSheet.create({
  movie: {
    width: movieWidth,
    height: movieHeight,
    display: 'flex',
  },
  poster: {
    // marginRight: 20,
    width: PosterWidth,
    height: PosterHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    left: 8,

  },
});