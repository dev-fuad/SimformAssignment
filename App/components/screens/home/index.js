import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  Share,
  Platform,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

import { getVideos, getMoreVideos, logout } from '../../../store/actions';
import { Screens } from '../../../constants';
import styles from './styles';

const shareAction = url => {
  Share.share(
    Platform.OS === 'ios'
      ? {
          url,
        }
      : {
          message: url,
        }
  );
};

const VideoCard = ({ video, playVideo }) => (
  <View style={styles.card}>
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => shareAction(video.video_url)}
      style={styles.cardContent}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={() => playVideo(video)}>
        <Image source={{ uri: video.thumbnail_url }} style={styles.poster} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>{video.title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [video, setVideo] = useState();
  const {
    user,
    videos: { videos, isLoading },
  } = useSelector(state => ({ videos: state.videos, user: state.user }));

  const loadVideos = () => {
    dispatch(getVideos());
  };

  const loadMoreVideos = () => {
    if (!isLoading) dispatch(getMoreVideos());
  };

  useEffect(loadVideos, []);

  useEffect(() => {
    if (!user.email) {
      navigation.navigate(Screens.login);
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} barStyle="dark-content" />
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <VideoCard video={item} playVideo={setVideo} />
        )}
        refreshing={false}
        onRefresh={loadVideos}
        onEndReached={loadMoreVideos}
        onEndReachedThreshold={0.01}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={styles.scrollContent}
      />
      <TouchableOpacity
        style={styles.closeVideo}
        onPress={() => dispatch(logout())}
      >
        <Ionicons name="md-log-out" size={32} color="black" />
      </TouchableOpacity>
      {isLoading && (
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color="#C31E3C"
        />
      )}
      {video && (
        <View style={[styles.indicator, { backgroundColor: 'black' }]}>
          <Video
            source={{ uri: video.video_url }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay
            isLooping
            style={styles.indicator}
          />
          <TouchableOpacity
            style={styles.closeVideo}
            onPress={() => setVideo(null)}
          >
            <Ionicons name="ios-close-circle-outline" size={32} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
