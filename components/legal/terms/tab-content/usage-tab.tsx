import { BookOpen, CheckCircle, XCircle } from 'lucide-react';

import { Separator } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

const UsageRightsTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
            <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-2xl font-bold">Use License</h3>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on our website for
              <span className="font-semibold">personal, non-commercial transitory viewing only</span>.
            </p>
            <p className="text-muted-foreground">
              This is the grant of a license, not a transfer of title.
            </p>
          </div>

          <Separator />

          <div>
            <h4 className="font-bold text-lg mb-4 text-destructive flex items-center gap-2">
              <XCircle className="h-5 w-5" />
              Under this license, you may NOT:
            </h4>
            <div className="space-y-3">
              {[
                'Modify or copy the materials for any purpose',
                'Use the materials for commercial purposes or public display',
                'Attempt to decompile or reverse engineer any software',
                'Remove any copyright or proprietary notations',
                'Transfer materials to another person or mirror them on another server',
              ].map((restriction, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/10 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span>{restriction}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-bold text-lg mb-2 text-green-700 dark:text-green-400 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Permitted Uses:
            </h4>
            <ul className="space-y-2 text-green-800 dark:text-green-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                Learning and educational purposes
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                Personal project development
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                Non-commercial portfolio work
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsageRightsTab;
