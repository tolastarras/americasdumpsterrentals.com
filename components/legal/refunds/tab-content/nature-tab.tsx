import { Ban, CheckCircle, Gift, Heart } from 'lucide-react';

import { Separator } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

const NatureTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
            <Gift className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold">Nature of Contributions</h3>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-400">
              These Are Donations, Not Purchases
            </h4>
            <p className="text-muted-foreground">
              When you contribute financially to our platform, you are making a
              <span className="font-semibold"> voluntary donation</span> to support ongoing development, maintenance, and improvement of the services. This is not a commercial transaction for goods or services.
            </p>
          </div>

          <Separator />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/10">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-5 w-5 text-green-600" />
                <h4 className="font-bold">What It Is</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Voluntary support for development
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Contribution to open-source ecosystem
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  Appreciation for existing services
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/10">
              <div className="flex items-center gap-2 mb-2">
                <Ban className="h-5 w-5 text-red-600" />
                <h4 className="font-bold">What It Is NOT</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Ban className="h-4 w-4 text-red-500 mt-0.5" />
                  Purchase of software license
                </li>
                <li className="flex items-start gap-2">
                  <Ban className="h-4 w-4 text-red-500 mt-0.5" />
                  Transaction with guaranteed delivery
                </li>
                <li className="flex items-start gap-2">
                  <Ban className="h-4 w-4 text-red-500 mt-0.5" />
                  Commercial sale subject to consumer laws
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NatureTab;
