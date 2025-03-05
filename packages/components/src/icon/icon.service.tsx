import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconZocial from 'react-native-vector-icons/Zocial';

const iconSetMap = {
  AntDesign: IconAntDesign,
  Entypo: IconEntypo,
  EvilIcons: IconEvilIcons,
  Feather: IconFeather,
  FontAwesome: IconFontAwesome,
  FontAwesome5: IconFontAwesome5,
  Foundation: IconFoundation,
  Ionicons: IconIonicons,
  MaterialIcons: IconMaterialIcons,
  MaterialCommunityIcons: IconMaterialCommunityIcons,
  Octicons: IconOcticons,
  Zocial: IconZocial,
  Fontisto: IconFontisto,
  SimpleLineIcons: IconSimpleLineIcons,
} as const;

export type IconSet = keyof typeof iconSetMap;

export const getIconSet = (iconSet: IconSet = 'Ionicons') => {
  return iconSetMap[iconSet];
};
