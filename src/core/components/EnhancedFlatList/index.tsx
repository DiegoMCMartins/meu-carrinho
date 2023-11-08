import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

import {styles} from './styles';

interface RenderListEmptyElementProps {
  isLoading?: boolean;
  hasError?: boolean;
  LoadingElement?: JSX.Element | null;
  ErrorElement?: JSX.Element | null;
}

const renderListEmptyElement = ({
  isLoading,
  hasError,
  ErrorElement,
  LoadingElement,
}: RenderListEmptyElementProps): JSX.Element | null => {
  if (isLoading) {
    return LoadingElement ? LoadingElement : null;
  }

  if (hasError) {
    return ErrorElement ? ErrorElement : null;
  }

  return null;
};

/**
 * Enhanced Flat List
 */
export default function EnhancedFlatList<ItemT>({
  isLoading = false,
  hasError = false,
  LoadingElement = null,
  ErrorElement = null,
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
        })
      }
    />
  );
}

/**
 * @todo ListEmptyComponent removed because type problem, active it when necessary
 */
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
  LoadingElement?: JSX.Element | null;

  /**
   * Component to be rendered when list has error
   * @default null
   */
  ErrorElement?: JSX.Element | null;
}
