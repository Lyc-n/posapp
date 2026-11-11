import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { SymbolView } from 'expo-symbols';
import { Pressable } from 'react-native';

import { ExternalLink } from './external-link';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export default function AppTabs() {
  return (
    <Tabs>
      {/* Container utama konten halaman */}
      <TabSlot className="h-full" />

      {/* Navigation Bar Floating */}
      <TabList
        style={{ position: 'absolute', width: '100%' }}
        className="p-three justify-center items-center flex-row"
      >
        <ThemedView className="py-two px-five rounded-five flex-row items-center grow gap-two max-w-content bg-theme-element">
          
          {/* Logo / Title */}
          <ThemedText type="smallBold" className="mr-auto">
            Expo Starter
          </ThemedText>

          {/* Tab Home */}
          <TabTrigger name="home" href="/">
            <TabItem label="Home" />
          </TabTrigger>

          {/* Tab Explore */}
          <TabTrigger name="explore" href="/explore">
            <TabItem label="Explore" />
          </TabTrigger>

          {/* External Link */}
          <ExternalLink href="https://docs.expo.dev" asChild>
            <Pressable className="flex-row justify-center items-center gap-one ml-three active:opacity-70">
              <ThemedText type="link">Docs</ThemedText>
              <SymbolView
                tintColor="var(--color-text)"
                name={{ ios: 'arrow.up.right.square', web: 'link' }}
                size={12}
              />
            </Pressable>
          </ExternalLink>

        </ThemedView>
      </TabList>
    </Tabs>
  );
}

// Sub-komponen helper simpel untuk item tab
function TabItem({ label, isFocused }: { label: string; isFocused?: boolean }) {
  return (
    <ThemedView
      className={`py-one px-three rounded-three ${
        isFocused ? 'bg-theme-selected' : 'bg-theme-element'
      }`}
    >
      <ThemedText
        type="small"
        className={isFocused ? 'text-theme-text' : 'text-theme-text-secondary'}
      >
        {label}
      </ThemedText>
    </ThemedView>
  );
}