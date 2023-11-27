import type { Schema, Attribute } from '@strapi/strapi';

export interface BusinessCooperation extends Schema.Component {
  collectionName: 'components_business_cooperation';
  info: {
    displayName: 'Cooperation';
    icon: 'briefcase';
  };
  attributes: {
    type: Attribute.Enumeration<
      ['host', 'organizer', 'coorganizer', 'sponsor', 'titleSponsor']
    > &
      Attribute.Required;
    organization: Attribute.Relation<
      'business.cooperation',
      'oneToOne',
      'api::organization.organization'
    >;
  };
}

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

export interface FormField extends Schema.Component {
  collectionName: 'components_form_fields';
  info: {
    displayName: 'Field';
    icon: 'italic';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['text', 'tel', 'email', 'url']> &
      Attribute.DefaultTo<'text'>;
    options: Attribute.Component<'common.multiple-text', true>;
    multiple: Attribute.Boolean & Attribute.DefaultTo<false>;
    required: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'business.cooperation': BusinessCooperation;
      'common.multiple-text': CommonMultipleText;
      'form.field': FormField;
    }
  }
}
