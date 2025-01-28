import { IconPrefix, IconName, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { solidIcons, brandIcons } from '@/constants/icons';

library.add(...solidIcons, ...brandIcons);

// Aggiorna il tipo delle props per supportare la libreria
interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  name: IconName;
  prefix?: IconPrefix;
}

// Componente Icon
const Icon = ({ name, prefix = 'fas', ...props }: IconProps) => {
  const getIcon = (iconName: IconName, prefix: IconPrefix): [IconPrefix, IconName] => {
    switch (prefix) {
      case 'fas':
      case 'far':
      case 'fab':
        return [prefix, iconName];
      default:
        throw new Error(
          `Icon - prefix:${prefix}; Name: ${iconName}; not found in the library`
        );
    }
  };

  const [prefixFinal, nameFinal] = getIcon(name, prefix);

  return <FontAwesomeIcon icon={[prefixFinal, nameFinal]} {...props} />;
};
export default Icon;
