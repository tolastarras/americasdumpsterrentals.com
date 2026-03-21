import { CreditCard, Heart } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const ValueTab = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border-amber-200 dark:border-amber-800">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <CreditCard className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-bold">Market Value Comparison</h3>
          </div>

          <p className="text-muted-foreground mb-6">
            Our suggested donations are significantly below commercial pricing for similar software solutions.
          </p>

          <div className="space-y-4">
            {[
              { title: 'Commercial Software', price: '$499-$999+', desc: 'Typical industry pricing' },
              { title: 'Enterprise Solutions', price: '$2,000-$10,000+', desc: 'Corporate licensing' },
              { title: 'SaaS Subscriptions', price: '$99-$299/month', desc: 'Recurring commercial fees' },
              { title: 'Our Donations', price: '$5-$50', desc: 'Voluntary support contributions' },
            ].map((item, index) => (
              <div key={index} className={`p-3 rounded-lg ${index === 3 ? 'bg-green-50 dark:bg-green-900/10 border border-green-200' : 'bg-muted'}`}>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold">{item.title}</h4>
                  <span className={`font-bold ${index === 3 ? 'text-green-600' : 'text-muted-foreground'}`}>
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 dark:border-green-800">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Heart className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold">Why Donate?</h3>
          </div>

          <p className="text-muted-foreground mb-6">
            Your contributions directly support:
          </p>

          <div className="space-y-4">
            {[
              { title: 'Development Hours', desc: 'Funding continued improvement' },
              { title: 'Server Costs', desc: 'Maintaining platform availability' },
              { title: 'Feature Development', desc: 'Adding new capabilities' },
              { title: 'Community Support', desc: 'Helping other users' },
              { title: 'Open Source', desc: 'Keeping software accessible' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-green-50/50 dark:bg-green-900/5 rounded-lg">
                <Heart className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ValueTab;
