import React, {PropsWithChildren} from 'react';
import {View, ViewStyle} from 'react-native';

import {styles} from './styles';

/**
 * Componente que ocupará todo o espaço do componente pai
 */
export default function FullContainer({
  backgroundColor = 'transparent',
  center = false,
  children,
}: FullContainerProps) {
  /**
   * Objeto com os estilos customizados aceito pelo Componente
   */
  const customStyle: ViewStyle = {
    backgroundColor,
    justifyContent: center ? 'center' : 'flex-start',
    alignItems: center ? 'center' : 'stretch',
  };

  return <View style={[styles.container, customStyle]}>{children}</View>;
}

export interface FullContainerProps extends PropsWithChildren {
  /**
   * Cor de fundo do container
   * @default transparent;
   */
  backgroundColor?: string;

  /**
   * Indicação para centralizar o conteúdo
   * @default false
   */
  center?: boolean;
}
