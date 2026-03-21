'use client';

import { GeneralTermsTab, LiabilityTab, OverviewTab, UsageRightsTab } from '@/components/legal/terms/tab-content';
import { TabsContainer } from '@/components/shared/tabs-container';

import { TERMS_TABS } from '@/constants/tabs';

export const TermsTabs = () => {
  const tabs = TERMS_TABS.map((tab) => ({
    ...tab,
    component: {
      'overview': OverviewTab,
      'usage-rights': UsageRightsTab,
      'liability': LiabilityTab,
      'general-terms': GeneralTermsTab,
    }[tab.value],
  }));

  return <TabsContainer tabs={tabs} defaultValue="overview" />;
};
