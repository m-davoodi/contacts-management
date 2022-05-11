import { ComponentMeta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { routerDecorator, themeControlDecorator } from 'src/stories/decorators';
import { DrawerItem, DrawerItemProps } from './DrawerItem';

export default {
  title: 'Layout/Drawer/Item',
  component: DrawerItem,
  decorators: [
    themeControlDecorator,
    routerDecorator,
    (Story) => (
      <div style={{ maxWidth: 280, margin: '3em auto' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof DrawerItem>;

const Template: Story<DrawerItemProps> = (args) => <DrawerItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Dashboard',
  link: '/path',
};
