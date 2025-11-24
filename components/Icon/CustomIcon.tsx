import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface CustomIconProps {
  icon: IconProp;
  color?: string;
  size?: number;
}

const CustomIcon: React.FC<CustomIconProps> = ({ icon, color = 'white', size = 24 }) => (
    <FontAwesomeIcon icon={icon} color={color} size={size} />
);

export default CustomIcon;
