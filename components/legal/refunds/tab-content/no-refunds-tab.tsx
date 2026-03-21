import { AlertCircle, Ban } from 'lucide-react';

import { Separator } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

const NoRefundsTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
            <Ban className="h-5 w-5 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-2xl font-bold">No Refunds Policy</h3>
        </div>

        <div className="space-y-6">
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <p className="text-lg font-semibold text-red-700 dark:text-red-400">
              All donations are final. No refunds will be issued under any circumstances.
            </p>
          </div>

          <Separator />

          <div>
            <h4 className="font-bold text-lg mb-4 text-destructive">This Policy Applies To:</h4>
            <div className="space-y-3">
              {[
                'All contribution amounts and tiers',
                'Change of mind or decision',
                'Technical issues or compatibility problems',
                'Dissatisfaction with features or performance',
                'Account termination or suspension',
                'Any other reason, without exception',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-red-50/50 dark:bg-red-900/5 rounded-lg">
                  <Ban className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-200 dark:border-amber-800">
            <h4 className="font-bold text-lg mb-2 text-amber-700 dark:text-amber-400 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Important Considerations:
            </h4>
            <ul className="space-y-2 text-amber-800 dark:text-amber-300">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                Donations support ongoing development, not specific deliverables
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                You are contributing to a community project, not buying a product
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                Please ensure you understand this policy before contributing
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoRefundsTab;
