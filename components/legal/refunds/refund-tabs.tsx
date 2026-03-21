'use client';

import { AgreementTab, NatureTab, NoRefundsTab, ValueTab } from '@/components/legal/refunds/tab-content';
import { TabsContainer } from '@/components/shared/tabs-container';

import { REFUND_TABS } from '@/constants/tabs';

export const RefundTabs = () => {
  const tabs = REFUND_TABS.map((tab) => ({
    ...tab,
    component: {
      'nature': NatureTab,
      'no-refunds': NoRefundsTab,
      'value': ValueTab,
      'agreement': AgreementTab,
    }[tab.value],
  }));

  return <TabsContainer tabs={tabs} defaultValue="nature" />;
};
