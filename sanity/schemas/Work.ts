import { defineField } from "sanity";


// schemas/Work.js
export default {
    name: 'Work',
    type: 'document',
    title: 'Work',
    fields: [
        defineField({
            name: 'VideoThumbnail',
            type: 'image',
            title: 'VideoThumbnail',    
        }),
        defineField({
            name: 'VideoUrlPreview',
            type: 'string',
            title: 'VideoUrlPreview',
        })
    ],
  }
