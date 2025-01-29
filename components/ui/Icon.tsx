import type { IconName } from '@fortawesome/fontawesome-svg-core';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { iconsMap } from '@/constants/icons';

interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  name: IconName;
}

// Componente Icon
export default function Icon({ name, ...props }: IconProps) {
  const icon = iconsMap.get(name);
  if (!icon) {
    throw new Error(`Icon - Name: ${name}; not found in the iconsMap`);
  }

  return <FontAwesomeIcon icon={icon} {...props} />;
}
