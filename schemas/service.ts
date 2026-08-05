import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'service',
    title: 'Services',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nama Layanan',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'order',
            title: 'Urutan Tampil',
            type: 'number',
        }),
    ]
})