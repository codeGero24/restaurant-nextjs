import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

type ExtractIconNames<T extends Record<string, IconDefinition>> =
  keyof T extends `fa${infer Name}` ? Name : never;

type SolidIconNames = ExtractIconNames<{
  [K in keyof typeof solidIcons as K extends `fa${string}` ? K : never]: IconDefinition;
}>;
type RegularIconNames = ExtractIconNames<{
  [K in keyof typeof regularIcons as K extends `fa${string}` ? K : never]: IconDefinition;
}>;
type BrandIconNames = ExtractIconNames<{
  [K in keyof typeof brandIcons as K extends `fa${string}` ? K : never]: IconDefinition;
}>;

type IconName = SolidIconNames | RegularIconNames | BrandIconNames;

interface IconProps {
  name: IconName;
  type?: 'solid' | 'regular' | 'brand';
  className?: string;
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2x' | '3x';
  spin?: boolean;
  pulse?: boolean;
  rotate?: 90 | 180 | 270;
  flip?: 'horizontal' | 'vertical' | 'both';
}

const iconLibraries = {
  solid: solidIcons,
  regular: regularIcons,
  brand: brandIcons,
};

const Icon: React.FC<IconProps> = ({ name, type = 'solid', ...props }) => {
  const iconLibrary = iconLibraries[type];
  const iconName = `fa${name}` as keyof typeof iconLibrary;
  const icon = iconLibrary[iconName];

  if (!icon) {
    console.error(`Icon "${name}" not found in ${type} library.`);
    return null;
  }

  return <FontAwesomeIcon icon={icon as IconDefinition} {...props} />;
};

export default Icon;
