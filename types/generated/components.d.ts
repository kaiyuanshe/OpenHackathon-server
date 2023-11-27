import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonMultipleText extends Schema.Component {
  collectionName: 'components_common_multiple_texts';
  info: {
    displayName: 'Multiple Text';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.multiple-text': CommonMultipleText;
    }
  }
}
