import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconZocial from 'react-native-vector-icons/Zocial';

export type iconFontFamilyType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons'
  | 'Zocial'
  | 'Fontisto'
  | 'SimpleLineIcons';

/**
 * get icon set
 */
export const getIconSet = (fontFamily: iconFontFamilyType = 'Ionicons') => {
  switch (fontFamily) {
    case 'AntDesign':
      return IconAntDesign;
    case 'Entypo':
      return IconEntypo;
    case 'EvilIcons':
      return IconEvilIcons;
    case 'Feather':
      return IconFeather;
    case 'FontAwesome':
      return IconFontAwesome;
    case 'FontAwesome5':
      return IconFontAwesome5;
    case 'Foundation':
      return IconFoundation;
    case 'Ionicons':
      return IconIonicons;
    case 'MaterialIcons':
      return IconMaterialIcons;
    case 'MaterialCommunityIcons':
      return IconMaterialCommunityIcons;
    case 'Zocial':
      return IconZocial;
    case 'SimpleLineIcons':
      return IconSimpleLineIcons;
    case 'Octicons':
      return IconOcticons;
    case 'Ionicons':
      return IconIonicons;
    default:
      return IconAntDesign;
  }
};
