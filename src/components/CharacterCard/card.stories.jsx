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

const Template = args => <CharacterCard {...args} />

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    name: "Rilakkuma", 
}

export const Rilakkuma = Template.bind({});
Rilakkuma.args = {
    size: 'small',
    name: "Rilakkuma", 
}

export const Korilakkuma = Template.bind({});
Korilakkuma.args = {
    size: 'small',
    name: "Korilakkuma", 
}

export const Kiiroitori = Template.bind({});
Kiiroitori.args = {
    size: 'small',
    name: "Kiiroitori", 
}

export const Chairoikoguma = Template.bind({});
Chairoikoguma.args = {
    size: 'small',
    name: "Chairoikoguma", 
}



export const Large = Template.bind({});
Large.args = {
    size: 'large',
    name: 'A post awaits...',
    artistName: 'Queen ',
    musicType: 'Rock ',
    intro: 'Queen are a British rock band formed in London in 1970.'
}