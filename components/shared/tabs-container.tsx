'use client';

import { LucideIcon } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export interface TabConfig {
  value: string
  label: string
  icon?: LucideIcon
  colorClass?: string
  content?: React.ReactNode
  component?: React.ComponentType
}

interface TabsContainerProps {
  tabs: TabConfig[]
  defaultValue?: string
  className?: string
  tabListClassName?: string
  tabContentClassName?: string
}

export const TabsContainer = ({
  tabs,
  defaultValue,
  className = 'mb-10',
  tabListClassName = 'w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 h-full',
  tabContentClassName = 'space-y-6 mt-6',
}: TabsContainerProps) => {
  const firstTab = tabs[0]?.value;
  const activeTab = defaultValue || firstTab;

  return (
    <Tabs defaultValue={activeTab} className={className}>
      <TabsList className={tabListClassName}>
        {tabs.map((tab) => {
          const IconComponent = tab.icon;

          return (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all duration-200 data-[state=active]:shadow-md hover:scale-[1.02] group hover:cursor-pointer data-[state=active]:text-white ${tab.colorClass || ''}`}
            >
              {IconComponent && <IconComponent className="h-4 w-4" />}
              <span className="font-medium">{tab.label}</span>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full opacity-0 group-data-[state=active]:opacity-100 transition-opacity" />
            </TabsTrigger>
          );
        })}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className={tabContentClassName}>
          {tab.content || (tab.component && <tab.component />)}
        </TabsContent>
      ))}
    </Tabs>
  );
};
