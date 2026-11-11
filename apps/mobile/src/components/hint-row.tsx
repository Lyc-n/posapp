import type { ReactNode } from 'react';
import { View } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

type HintRowProps = {
  title?: string;
  hint?: ReactNode;
};

export function HintRow({ title = 'Try editing', hint = 'app/index.tsx' }: HintRowProps) {
  return (
    <View className="flex-row justify-between items-center">
      <ThemedText type="small">{title}</ThemedText>
      <ThemedView className="rounded-two py-half px-two bg-theme-selected">
        <ThemedText className="text-theme-text-secondary">{hint}</ThemedText>
      </ThemedView>
    </View>
  );
}