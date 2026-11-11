import { View, type ViewProps } from 'react-native';
import { cssInterop } from 'nativewind';

export type ThemedViewProps = ViewProps & {
  className?: string;
};

export function ThemedView({ className = '', style, ...otherProps }: ThemedViewProps) {
  return (
    <View
      className={`bg-theme-bg ${className}`}
      style={style}
      {...otherProps}
    />
  );
}

cssInterop(ThemedView, {
  className: 'style',
});