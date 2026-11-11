import { Text, type TextProps } from 'react-native';
import { cssInterop } from 'nativewind';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'subtitle' | 'code' | 'link' | 'linkPrimary' | 'smallBold';
  className?: string;
};

// Map variant type ke class Tailwind v4
const typeClasses = {
  default: 'text-base font-normal',
  title: 'text-[48px] leading-[52px] font-semibold',
  subtitle: 'text-[32px] leading-[44px] font-semibold',
  small: 'text-sm leading-5 font-normal',
  code: 'font-mono text-xs',
  link: 'text-base italic text-blue-500!',
  linkPrimary: 'text-sm italic text-blue-500!',
  smallBold: 'text-sm leading-5 font-bold',
};

export function ThemedText({ type = 'default', className = '', style, ...rest }: ThemedTextProps) {
  return (
    <Text
      className={`text-theme-text ${typeClasses[type]} ${className}`}
      style={style}
      {...rest}
    />
  );
}

cssInterop(ThemedText, {
  className: 'style',
});