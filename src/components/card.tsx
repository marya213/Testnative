import { StyleSheet, View, type ViewProps, type ViewStyle } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/hooks/use-theme';

export type CardProps = ViewProps & {
  title: string;
  description?: string;
};

export function Card({ title, description, style, ...rest }: CardProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.backgroundElement, borderColor: theme.backgroundSelected },
        style,
      ]}
      {...rest}>
      <ThemedText type="subtitle">{title}</ThemedText>
      {description ? <ThemedText themeColor="textSecondary">{description}</ThemedText> : null}
    </View>
  );
}

type CardStyles = {
  card: ViewStyle;
};

const styles = StyleSheet.create<CardStyles>({
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },
});
