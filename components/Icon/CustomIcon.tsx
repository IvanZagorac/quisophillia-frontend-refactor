import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'; // Import SizeProp

interface CustomIconProps {
  icon: IconProp;
  color?: string;
  size?: SizeProp; // Change type to SizeProp
}

const CustomIcon: React.FC<CustomIconProps> = ({ icon, color = 'white', size = 'lg' }) => ( // Default to 'lg' or another appropriate string
    <FontAwesomeIcon icon={icon} color={color} size={size} />
);

export default CustomIcon;
