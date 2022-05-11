import { ComponentMeta, Story } from '@storybook/react';
import { drawerDecorator, routerDecorator, themeControlDecorator } from 'src/stories/decorators';
import { AppDrawer } from './AppDrawer';

export default {
  title: 'Layout/Drawer',
  component: AppDrawer,
  decorators: [themeControlDecorator, drawerDecorator, routerDecorator],
} as ComponentMeta<typeof AppDrawer>;

const Template: Story = (args) => <AppDrawer {...args} />;

export const Default = Template.bind({});
