import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "../../../src/components/button/button";

const meta: Meta = {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        children: {
            control: 'text',
            defaultValue: 'Simple Button 🫣'
        },
    },
    parameters: {
        controls: { expanded: true }
    }
}

export default meta

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Simple = Template.bind({});
Simple.args = { children: 'Simple Button 🫣' };
