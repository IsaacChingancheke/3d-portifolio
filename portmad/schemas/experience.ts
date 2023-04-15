import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'companyName',
        title: 'Company Name',
        type: 'string',
      }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'iconBg',
        title: 'Icon Background colour',
        type: 'color',
      }),
    
      defineField({
        name: 'dateFrom',
        title: 'Starting date',
        type: 'date',
      }),

      defineField({
        name: 'dateTo',
        title: 'Ending Date',
        type: 'date',
      }),
      defineField({
        title: 'Points',
        name: 'points',
        type: 'array',
        of: [{type: 'string'}]
      })
    
  ],
})
