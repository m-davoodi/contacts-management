import { ComponentMeta, Story } from '@storybook/react';
import { drawerDecorator, themeControlDecorator } from 'src/stories/decorators';
import { AppBar } from './AppBar';

export default {
  title: 'Layout/AppBar',
  component: AppBar,
  decorators: [themeControlDecorator, drawerDecorator],
} as ComponentMeta<typeof AppBar>;

const Template: Story = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
