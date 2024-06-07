import { defineField } from "sanity";

// schemas/PresonaInformation.js
export default {
    name: 'PresonaInformation',
    type: 'document',
    title: 'PresonaInformation',
    fields: [
        defineField({
            name: 'Name',
            type: 'string',
            title: 'Name',    
        }),
        defineField({
            name: 'Image',
            type: 'image',
            title: 'Image',
        }),
        defineField({
            name: 'Bio',
            type: 'string',
            title: 'Bio', 
        }),
        defineField({
            name:'WhatsAppLink',
            type:'string',
            title:'WhatsAppLink',
        }),
        defineField({
            name:'TwitterLink',
            type:'string',
            title:'TwitterLink',
        }),
        defineField({
            name:'discordLink',
            type:'string',
            title:'discordLink',
        }),    
    ],
  }
  