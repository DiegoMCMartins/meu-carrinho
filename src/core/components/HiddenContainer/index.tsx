import React, {PropsWithChildren} from 'react';
import {View, ViewProps} from 'react-native';

import {styles} from './styles';

/**
 * Component used to hidden components
 */
export default function HiddenContainer({
  show = false,
  removeFromTree = false,
  style,
  children,
}: HiddenContainerProps) {
  /**
   * Style used on container
   */
  let customStyles = [{}];

  /**
   * If container is hidden, add hidden style
   */
  if (!show) {
    customStyles = [...customStyles, styles.hiddenContainer];
  }

  /**
   * If container need to be removed from React tree, add removed style
   */
  if (removeFromTree) {
    customStyles = [...customStyles, styles.removedContainer];
  }

  /**
   * If has custom style, add style prop
   */
  if (style) {
    customStyles = [...customStyles, style];
  }

  /**
   * Condition to doesn't allow the child to be pressed when hidden
   */
  const shouldPreventTouches = !show;

  /**
   * If need to show, return only children
   */
  if (show) {
    return <>{children}</>;
  }

  return (
    <View
      style={customStyles}
      onStartShouldSetResponderCapture={() => shouldPreventTouches}>
      {children}
    </View>
  );
}

export interface HiddenContainerProps extends PropsWithChildren {
  /**
   * Indicator to show children
   * @default false;
   */
  show?: boolean;

  /**
   * Indicator to remove from React tree
   * Setting `display: none`
   * @default false
   */
  removeFromTree?: boolean;

  /**
   * Style
   */
  style?: ViewProps['style'];
}
