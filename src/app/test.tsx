import { View } from 'react-native';

export default function Test() {
  return (
    <View className="flex-1 items-center justify-center bg-background px-4">
      <View className="w-full max-w-sm gap-4 rounded-2xl bg-background-element p-4 dark:bg-gray-800">
        <View className="h-4 w-4 rounded-full bg-background-selected" />
        <View className="h-12 rounded-xl bg-background-selected px-4 py-2 dark:bg-gray-700" />
      </View>
    </View>
  );
}
