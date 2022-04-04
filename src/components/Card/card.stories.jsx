import React from 'react';
import { Card } from '.';

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        size: {
            control: 'radio',
            options: [ 'small', 'large' ]
        },
        netflixTitle: {
            control: 'text'
        },
        netflixType: {
            control: 'text'
        },
        synopsis: {
            control: 'text'
        }
    }
}

const Template = args => <Card {...args} />

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    netflixTitle: "Hana's Lazy Meals", 
    netflixType: "TV Show",  
    synopsis: "After Hana Komazawa's (Kana Kurashina) is transfered to another city for work, Hana Komazawa begins making and eating zubora meshi (sloppy meals) which doesn't need much work."
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    title: 'A post awaits...',
    artistName: 'Queen ',
    musicType: 'Rock ',
    intro: 'Queen are a British rock band formed in London in 1970.'
}