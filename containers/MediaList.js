import React, { Component, Fragment } from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions, ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Movie } from '../components';
import People from '../components/People';
import uuidv1 from 'uuid/v1';

const { width, height } = Dimensions.get('window')

const getWidthSizeByPercentage = percentage => (percentage / 100) * width
const getHeightSizeByPercentage = percentage => (percentage / 100) * height
const movieWidth = getWidthSizeByPercentage(80)
const movieHeight = getHeightSizeByPercentage(86)

class MediaList extends Component {
  state = {
    results: [
    ],
    page: 1,
  };

  constructor(props){
    super(props);
    this.fetcthItems();
  }

  fetcthItems = (page = 1) => {
    fetch(`${this.props.tmdbUrl}&page=${page}`)
      .then(response => response.json())
      .then(({ results }) => results.map(media => ({...media, key: uuidv1()})))
      .then(results => this.setState({
        results: [...this.state.results, ...results],
        page,
      }));
  }

  renderMovie = ({ item: movie }) => {
    return (<Movie movie={movie} onPress={this.props.goToDetail}/>)
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  getItemLayout(data, index) {
    return {
      length: (movieWidth + 10), 
      offset: (movieWidth + 10) * index, 
      index
    }
  }
  render () {
    const { title } = this.props;
    return (
      
    
      <Fragment>
        
        <View style={styles.listWrapper}>
        <View style={styles.titleWrapper}>
        <StatusBar backgroundColor="white" barStyle="light-content" />
        <StatusBar hidden={title.statusBarHidden} />
            <Text style={styles.title}> { title }
            </Text>
        </View>
          <FlatList
            keyExtractor={(item) => `${item.key}`}
            data={this.state.results}
            ItemSeparatorComponent={() => <View style={styles.viewSeparator}/>}
            renderItem={this.renderMovie}
            vertical
            showsVerticalScrollIndicator={false} 
            onEndReached={() => this.fetcthItems(this.state.page + 1)}
            onEndReachedThreshold={0.5}
            initialNumToRender={60}
            windowSize={21}
            getItemLayout={this.getItemLayout}
          />
        </View>
      </Fragment>
    )
  }
}

MediaList.propTypes = {
  tmdbUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  goToDetail: PropTypes.func.isRequired,
};

export default MediaList;

const styles = StyleSheet.create({
  viewSeparator: { 
    width: 10,
  height: 10, },
  title: {
    fontSize: 24,
    fontWeight: '600',
    width: 200,
    color: 'white',
    textAlign: 'center',
  },
  titleWrapper: {
    position: 'relative',
    bottom: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 0,
  },
  listWrapper: { 
    height: movieHeight,
  },
})