import { defineField } from "sanity";

// schemas/Collaborations.js
export default {
    name: 'Collaborations',
    type: 'document',
    title: 'Collaborations',
    fields: [
        defineField({
            name: 'ChannelName',
            type: 'string',
            title: 'ChannelName',    
        }),
        defineField({
            name: 'Image',
            type: 'image',
            title: 'Image',
        }),
        defineField({
            name: 'ChannelUrl',
            type: 'string',
            title: 'ChannelUrl',
        })
    ],
  }
  