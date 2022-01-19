import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

const VectorIcon = props => {
  const {name, type, size, color, style} = props;
  switch (type) {
    case 'AntDesign':
      return <AntDesign style={style} name={name} size={size} color={color} />;
    case 'Ionicons':
      return <Ionicons style={style} name={name} size={size} color={color} />;
    case 'FontAwesome':
      return (
        <FontAwesome style={style} name={name} size={size} color={color} />
      );
    case 'Feather':
      return <Feather style={style} name={name} size={size} color={color} />;
    case 'FontAwesome5':
      return (
        <FontAwesome5 style={style} name={name} size={size} color={color} />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons style={style} name={name} size={size} color={color} />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons style={style} name={name} size={size} color={color} />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          style={style}
          name={name}
          size={size}
          color={color}
        />
      );
    case 'Entypo':
      return <Entypo style={style} name={name} size={size} color={color} />;
    case 'EvilIcons':
      return <EvilIcons style={style} name={name} size={size} color={color} />;
    case 'Octicons':
      return <Octicons style={style} name={name} size={size} color={color} />;
    default:
      return <Entypo style={style} name={name} size={size} color={color} />;
  }
};

export default VectorIcon;
