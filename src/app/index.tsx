import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView className="flex-1 flex-row justify-center bg-theme-bg">
      <SafeAreaView className="flex-1 px-four gap-three max-w-content items-center pb-tab-inset ios:pb-tab-inset-ios">
        
        <ThemedView className="bg-theme-element p-four rounded-xl border border-theme-selected">
          <ThemedText className="text-theme-text font-mono">
            Tailwind v4 Clean Setup
          </ThemedText>
          <ThemedText className="text-theme-text-secondary mt-one">
            Mode gelap & terang ditangani CSS secara native.
          </ThemedText>
        </ThemedView>

      </SafeAreaView>
    </ThemedView>
  );
}