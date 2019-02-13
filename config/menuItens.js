import apiKey from './apiKey';
import {
  MediaList
} from '../containers'
import { StyleSheet, View, FlatList, Text, Dimensions, ScrollView } from 'react-native';


const menuItens = [{
    title: "Playing",
    path: "now_playing",
    tmdbUrl: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`,
    icon: require('../assets/icons/iconNowPlaying.png'),
  },
  {
    title: "Top Rated",
    path: "top_rated",
    tmdbUrl: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`,
    icon: require('../assets/icons/rate.png')
  },
  {
    title: "Upcoming",
    path: "dasas",
    tmdbUrl: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    icon: require('../assets/icons/upcoming.png')
  },
  {
    title: "Popular",
    path: "dasas",
    tmdbUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    icon: require('../assets/icons/popular.png')
  },
  {
    title: "Tv Show",
    path: "dasas",
    tmdbUrl: `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`,
    icon: require('../assets/icons/television.png')
  },
  {
    title: "Trailer",
    path: "dasas",
    tmdbUrl: `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`,
    icon: require('../assets/icons/rate.png')
  },
]


export default menuItens;