import React from 'react';
import { CharacterCard } from '.';

export default {
    title: 'Character Card',
    component: CharacterCard,
    argTypes: {
        size: {
            control: 'radio',
            options: [ 'small', 'large' ]
        },
        name: {
            control: 'text'
        },
        
    }
}

const Template = args => <Card {...args} />

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    name: "Rilakkuma", 
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    name: 'A post awaits...',
    artistName: 'Queen ',
    musicType: 'Rock ',
    intro: 'Queen are a British rock band formed in London in 1970.'
}