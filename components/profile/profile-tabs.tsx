'use client';

import { ProfileTabsProps } from '@/app/types';

import { BillingTab, PersonalTab, SecurityTab, SettingsTab } from '@/components/profile/tab-content';
import { TabsContainer } from '@/components/shared/tabs-container';

import { PROFILE_TABS } from '@/constants/tabs';

export const ProfileTabs = (props: ProfileTabsProps) => {
  const tabs = PROFILE_TABS.map((tab) => ({
    ...tab,
    content: {
      'personal': <PersonalTab {...props} />,
      'security': <SecurityTab />,
      'billing': <BillingTab user={props.user} />,
      'settings': <SettingsTab />,
    }[tab.value],
  }));

  return <TabsContainer tabs={tabs} defaultValue="personal" />;
};
