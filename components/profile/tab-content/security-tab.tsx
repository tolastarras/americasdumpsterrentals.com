import { Key, Shield } from 'lucide-react';

import { Badge, Button, Separator } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

const SecurityTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
            <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-2xl font-bold">Account Security</h3>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-200">
            <h4 className="font-bold text-lg mb-2 text-green-700 dark:text-green-400">
              Two-Factor Authentication
            </h4>
            <p className="text-muted-foreground mb-4">
              Add an extra layer of security to your account by enabling two-factor authentication.
            </p>
            <Button className="gap-2">
              <Key className="h-4 w-4" />
              Enable 2FA
            </Button>
          </div>

          <Separator />

          <div>
            <h4 className="font-bold text-lg mb-4">Active Sessions</h4>
            <div className="space-y-3">
              {[
                { device: 'Chrome on macOS', location: 'San Francisco, CA', current: true },
                { device: 'Firefox on Windows', location: 'New York, NY', current: false },
                { device: 'Safari on iPhone', location: 'Los Angeles, CA', current: false },
              ].map((session, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{session.device}</p>
                    <p className="text-sm text-muted-foreground">{session.location}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {session.current && (
                      <Badge variant="default">Current</Badge>
                    )}
                    <Button variant="ghost" size="sm">
                      Revoke
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-bold text-lg mb-4">Password</h4>
            <p className="text-muted-foreground mb-4">
              Last changed 30 days ago. We recommend changing your password every 90 days.
            </p>
            <Button variant="outline" className="gap-2">
              <Key className="h-4 w-4" />
              Change Password
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityTab;
