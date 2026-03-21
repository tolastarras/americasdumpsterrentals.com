import { Calendar, CreditCard } from 'lucide-react';

import { User } from '@/app/types';

import { Badge, Button } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

const BillingTab = ({ user }: { user: User }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold">Current Plan</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-lg">{user.plan} Plan</h4>
                <Badge variant="default">Active</Badge>
              </div>
              <p className="text-3xl font-bold mb-2">$29<span className="text-lg text-muted-foreground">/month</span></p>
              <p className="text-sm text-muted-foreground">Next billing date: Feb 15, 2026</p>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                10 GB Storage
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                Unlimited Projects
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                Priority Support
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                Advanced Analytics
              </li>
            </ul>

            <Button className="w-full">Upgrade Plan</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Calendar className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-bold">Billing History</h3>
          </div>

          <div className="space-y-4">
            {[
              { date: 'Jan 15, 2026', amount: '$29.00', status: 'Paid' },
              { date: 'Dec 15, 2025', amount: '$29.00', status: 'Paid' },
              { date: 'Nov 15, 2025', amount: '$29.00', status: 'Paid' },
              { date: 'Oct 15, 2025', amount: '$19.00', status: 'Paid' },
            ].map((invoice, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{invoice.date}</p>
                  <p className="text-sm text-muted-foreground">Monthly Subscription</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{invoice.amount}</p>
                  <Badge variant="outline" className="text-xs">{invoice.status}</Badge>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-4">
            View All Invoices
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingTab;
