import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'project',
    title: 'Portfolio',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nama Project',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: { source: 'title' },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'client',
            title: 'Nama Klien',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options : {
                list: [
                    { title: 'Brand Strategy', value: 'brand-strategy' },
                    { title: 'Digital Campaign', value: 'digital-campaign' },
                    { title: 'Creative Production', value: 'creative-production' },
                    { title: 'Social Media', value: 'social-media' },                    
                ]
            }
        }),
        defineField({
            name: 'description',
            title: 'Deskripsi',
            type: 'text',
        }),
        defineField({
            name: 'mainImage',
            title: 'Gambar Utama',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'publishedAt',
            title: 'Tanggal',
            type: 'datetime',
        }),
    ]
})