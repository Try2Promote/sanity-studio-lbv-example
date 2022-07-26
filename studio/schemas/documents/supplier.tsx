import { FaTruck } from 'react-icons/fa'
import React from 'react'

const GROUPS = [
  {
    name: 'editorial',
    default: true,
    title: 'Editorial',
  },
  {
    name: 'seo',
    title: 'SEO',
  },
]

export default {
  name: 'supplier',
  title: 'Supplier',
  type: 'document',
  groups: GROUPS,
  icon: FaTruck,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        isHighlighted: true,
      },
      group: 'editorial',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      group: 'editorial',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      options: {
        multiline: true,
        rows: 3,
      },
      group: 'editorial',
    },
    {
      name: 'PhoneNumber',
      title: 'Phone number',
      type: 'string',
      group: 'editorial',
    },
    {
      name: 'Address',
      title: 'Address',
      type: 'string',
      group: 'editorial',
    },
    {
      name: 'PostalCode',
      title: 'Postal code',
      type: 'number',
      group: 'editorial',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'editorial',
    },
    {
      name: 'MetaTitle',
      title: 'Meta Title (Max 70 characters)*',
      type: 'string',
      group: 'seo',
      validation: (Rule) =>
        Rule.required().max(70).warning('Please add a title with a maximum of 70 characters'),
    },
    {
      name: 'MetaDescription',
      title: 'Meta Description (Max 156 characters)*',
      type: 'text',
      group: 'seo',
      validation: (Rule) =>
        Rule.required().max(156).warning('Please add a title with a maximum of 156 characters'),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      previewImageUrl: 'image.asset.url',
    },
    prepare({ previewImageUrl, ...rest }) {
      return {
        media: <img src={previewImageUrl} width="100" height="100" />,
        ...rest,
      }
    },
  },
}
