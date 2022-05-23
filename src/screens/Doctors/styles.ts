import { StyleSheet } from 'react-native';
import colors, { palette } from '../../theme/colors';
import spacing from '../../theme/spacing';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingVertical: spacing.medium2,
    paddingHorizontal: spacing.medium2,
  },
  card: {
    flexDirection: 'row',
    marginBottom: spacing.small4,
    borderRadius: spacing.small3,
    overflow: 'hidden',
  },
  avatar: {
    height: 140,
    width: 150,
    backgroundColor: palette.primary.lighter,
    justifyContent: 'flex-end',
  },
  cardContent: {
    backgroundColor: palette.secondary.light,
    justifyContent: 'center',
    paddingHorizontal: spacing.small3,
    flex: 1,
  },
  bio: { marginTop: spacing.mini3 },
  listHeader: { marginBottom: spacing.medium2 },
});
