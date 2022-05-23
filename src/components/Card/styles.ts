import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

export const ICON_SIZE = 40;

export default StyleSheet.create({
  base: {
    paddingTop: spacing.medium1,
  },
  card: {
    paddingTop: spacing.small3,
    paddingHorizontal: spacing.medium3,
    backgroundColor: colors.primary,
    borderRadius: 30,
    flexDirection: 'row',
  },
  textContainer: {
    marginVertical: spacing.small3,
    flexShrink: 1,
  },
  rightNode: {
    width:125,
    height:125
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE * 0.5,
    overflow: 'hidden',
    color: colors.danger,
    backgroundColor: 'white',
  },
  opacity: { opacity: 0.7 },
});
