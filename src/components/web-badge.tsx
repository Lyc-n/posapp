import { version } from 'expo/package.json';
import { Image } from 'expo-image';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export function WebBadge() {
  return (
    <ThemedView className="p-five items-center gap-two">
      <ThemedText type="code" className="text-center text-theme-text-secondary">
        v{version}
      </ThemedText>
      
      {/* Gambar Badge Light Mode */}
      <Image
        source={require('@/assets/images/expo-badge.png')}
        className="w-30.75 aspect-123/24 dark:hidden"
      />

      {/* Gambar Badge Dark Mode */}
      <Image
        source={require('@/assets/images/expo-badge-white.png')}
        className="w-30.75 aspect-123/24 hidden dark:flex"
      />
    </ThemedView>
  );
}