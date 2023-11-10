import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

import {styles} from './styles';

interface RenderListEmptyElementProps {
  isLoading?: boolean;
  hasError?: boolean;
  LoadingElement?: (() => JSX.Element) | JSX.Element | null;
  ErrorElement?: (() => JSX.Element) | JSX.Element | null;
  EmptyElement?: (() => JSX.Element) | JSX.Element | null;
}

const renderListEmptyElement = ({
  isLoading,
  hasError,
  ErrorElement,
  LoadingElement,
  EmptyElement,
}: RenderListEmptyElementProps): JSX.Element | null => {
  if (isLoading) {
    return typeof LoadingElement === 'function'
      ? LoadingElement()
      : LoadingElement || null;
  }

  if (hasError) {
    return typeof ErrorElement === 'function'
      ? ErrorElement()
      : ErrorElement || null;
  }

  return typeof EmptyElement === 'function'
    ? EmptyElement()
    : EmptyElement || null;
};

/**
 * Enhanced Flat List
 */
export default function EnhancedFlatList<ItemT>({
  isLoading = false,
  hasError = false,
  LoadingElement = null,
  ErrorElement = null,
  EmptyElement = null,
  ...props
}: EnhancedFlatListProps<ItemT>) {
  return (
    <FlatList
      {...props}
      contentContainerStyle={[
        styles.contentContainer,
        props?.contentContainerStyle,
      ]}
      ListEmptyComponent={() =>
        renderListEmptyElement({
          isLoading,
          hasError,
          ErrorElement,
          LoadingElement,
          EmptyElement,
        })
      }
    />
  );
}

export interface EnhancedFlatListProps<ItemT>
  extends Omit<FlatListProps<ItemT>, 'ListEmptyComponent'> {
  /**
   * Loading Indicator of list
   * @default false
   */
  isLoading?: boolean;

  /**
   * Error Indicator of list
   * @default false
   */
  hasError?: boolean;

  /**
   * Component to be rendered when list is loading
   * @default null
   */
  LoadingElement?: (() => JSX.Element) | JSX.Element | null;

  /**
   * Component to be rendered when list has error
   * @default null
   */
  ErrorElement?: (() => JSX.Element) | JSX.Element | null;

  /**
   * Component to be rendered when list is empty
   */
  EmptyElement?: (() => JSX.Element) | JSX.Element | null;
}
