import { StyleSheet } from 'react-native';
import { statusBarHeight, chinHeight, vw } from '../../../utilities/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: statusBarHeight + 10,
    paddingBottom: chinHeight || 20,
  },
  card: {
    width: vw(100),
    height: vw(64),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    width: vw(80),
    height: vw(40),
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 15,

    backgroundColor: 'lightblue',

    borderRadius: 15,
    borderColor: 'steelblue',
    borderWidth: 1,
  },
  poster: {
    marginTop: vw(-10),
    width: vw(70),
    height: vw(40),
    borderRadius: 15,
    borderColor: '#C31E3C',
    borderWidth: 1,
  },
  content: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 16,
    color: '#333',
  },
  indicator: StyleSheet.absoluteFill,
  closeVideo: {
    position: 'absolute',
    marginTop: statusBarHeight,
    marginRight: 10,
    alignSelf: 'flex-end',
    padding: 10,
  },
});

export default styles;
