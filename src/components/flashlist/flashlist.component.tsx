import * as React from 'react';
import { View } from 'react-native';
import { FlashList as ShopifyFlashList } from '@shopify/flash-list';

import { getStyle } from './flashlist.style';
import type { FlashListProps } from './flashlist.type';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const FlashList: React.FunctionComponent<FlashListProps> = (incomingProps) => {
  const props = useDefaultProps('FlashList', incomingProps, { flex: 1 });

  const {
    bg,
    h,
    w,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    minH,
    minW,
    maxW,
    maxH,
    position,
    style,
    flexDirection,
    direction,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    children,
    alignItems,
    align,
    justifyContent,
    justify,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    flexWrap,
    wrap,
    flexGrow,
    grow,
    flexBasis,
    basis,
    flexShrink,
    shrink,
    shadow,
    shadowColor,
    opacity,
    overflow,
    top,
    left,
    right,
    bottom,
    zIndex,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  return (
    <View style={computedStyle.list}>
      <ShopifyFlashList {...rest} />
    </View>
  );
};

// FlashList.defaultProps = {};

export { FlashList };
