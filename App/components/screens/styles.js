import { StyleSheet } from 'react-native';

import { vw } from '../../utilities/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C31E3C',
  },
  logoView: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: vw(35),
    height: vw(35),
  },
  photoView: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: vw(35),
    height: vw(35),
    borderRadius: vw(15),
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',

    marginTop: vw(5),
  },
  form: {
    flex: 12,
    alignItems: 'center',
  },
  footer: {
    height: vw(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: 0,
    borderRadius: 0,
  },
  footerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
  },
  underline: {
    textDecorationColor: '#FFF',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});

export default styles;
