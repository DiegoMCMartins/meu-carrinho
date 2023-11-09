import React, {useCallback} from 'react';
import {ListRenderItemInfo, View, FlexStyle} from 'react-native';

import EnhancedFlatList, {
  EnhancedFlatListProps,
} from '@core/components/EnhancedFlatList';

import {styles} from './styles';
import HiddenContainer from '../HiddenContainer';

/**
 * Function to complete data with empty data, to normalize grid list
 */
function fillDataWithEmptyData<ItemT>(
  data: EnhancedFlatListProps<ItemT>['data'],
  numColumns?: number,
): ItemT[] | ArrayLike<ItemT> | null {
  if (!Array.isArray(data)) {
    return [];
  }

  if (!numColumns || numColumns <= 1) {
    return data;
  }

  /**
   * Check the number of empty rows based on columns and data length
   */
  const emptyRows =
    data.length % numColumns === 0
      ? 0
      : numColumns - (data.length % numColumns);

  /**
   * Duplicate the n-first data item of data list
   */
  const emptyData = data.filter((_, index) => index < emptyRows);

  /**
   * Return the data + "empty" data
   */
  return [...data, ...emptyData];
}

/**
 * Grid Component with FlatList
 */
export default function GridFlatList<ItemT>({
  renderItem,
  data,
  gap = 8,
  ...props
}: GridFlatListProps<ItemT>) {
  const enhancedData = fillDataWithEmptyData(data, props?.numColumns);

  const enhancedRenderItem = useCallback(
    (itemInfo: ListRenderItemInfo<ItemT>) => {
      const dataLength = Array.isArray(data) ? data.length : 0;

      /**
       * Verifithe wrapper for the rendered item
       * If index >= data length the Hidden Container is the wrapper
       * If index < data length the normal Container is the wrapper
       */
      const ItemWrapper = itemInfo.index >= dataLength ? HiddenContainer : View;

      return (
        <ItemWrapper style={styles.cellContainer}>
          {typeof renderItem === 'function' ? renderItem(itemInfo) : null}
        </ItemWrapper>
      );
    },
    [renderItem, data],
  );

  const customColumnStyle: FlexStyle = {
    columnGap: gap,
  };

  const customContentContainerStyle: FlexStyle = {
    rowGap: gap,
  };

  return (
    <EnhancedFlatList
      {...props}
      data={enhancedData}
      renderItem={enhancedRenderItem}
      columnWrapperStyle={[customColumnStyle, props?.columnWrapperStyle]}
      contentContainerStyle={[
        customContentContainerStyle,
        props?.contentContainerStyle,
      ]}
    />
  );
}

export interface GridFlatListProps<ItemT> extends EnhancedFlatListProps<ItemT> {
  /**
   * Gap used to separate row and columns
   * @default 8
   */
  gap?: number;
}
