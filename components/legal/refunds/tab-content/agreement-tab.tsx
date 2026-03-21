import { FileText, Shield } from 'lucide-react';

import { Separator } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

const AgreementTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-6">Your Acknowledgement</h3>

        <div className="space-y-6">
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-200">
            <p className="font-semibold text-red-700 dark:text-red-400">
              By making a contribution, you acknowledge and agree that:
            </p>
          </div>

          <div className="space-y-4">
            {[
              'This is a voluntary donation, not a purchase',
              'No refunds will be provided under any circumstances',
              'The contribution amount is significantly below market value',
              'You are not entitled to specific features or deliverables',
              'Your support helps maintain and improve the platform',
              'This policy is final and non-negotiable',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Separator />

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive text-white rounded-lg mb-4">
              <Shield className="h-4 w-4" />
              <span className="font-medium">Policy is Strictly Enforced</span>
            </div>
            <p className="text-muted-foreground">
              We appreciate your support, but please understand this policy is designed
              to be clear and unambiguous. If you have any questions,
              contact us before contributing.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgreementTab;
