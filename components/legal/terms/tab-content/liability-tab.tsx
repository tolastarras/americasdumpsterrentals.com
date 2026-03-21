import { AlertCircle, Shield } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const LiabilityTab = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border-amber-200 dark:border-amber-800">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-bold">Disclaimer</h3>
          </div>
          <p className="text-muted-foreground">
            The materials on our website are provided on an <span className="font-semibold">'as is' basis</span>.
            We make no warranties, expressed or implied, and hereby disclaim all other warranties including:
          </p>
          <ul className="space-y-2 mt-4 text-sm">
            {[
              'Conditions of merchantability',
              'Fitness for a particular purpose',
              'Non-infringement of intellectual property',
              'Other violation of rights',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-red-200 dark:border-red-800">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-bold">Limitations</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            In no event shall we or our suppliers be liable for any damages arising from the use or inability to use our materials, including:
          </p>
          <div className="space-y-3">
            {[
              { title: 'Loss of Data', desc: 'Damages for loss of data or profit' },
              { title: 'Business Interruption', desc: 'Due to business interruption' },
              { title: 'Professional Advice', desc: 'Materials are not professional advice' },
            ].map((item, index) => (
              <div key={index} className="p-3 bg-red-50 dark:bg-red-900/10 rounded">
                <h4 className="font-semibold text-red-700 dark:text-red-400">{item.title}</h4>
                <p className="text-sm text-red-600 dark:text-red-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiabilityTab;
