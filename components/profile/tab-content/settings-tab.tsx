import { Bell, LogOut } from 'lucide-react';

import { Button, Label, Separator, Switch } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

const SettingsTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-6">Preferences</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive updates about your account</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Product Updates</Label>
                  <p className="text-sm text-muted-foreground">New features and improvements</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">Promotions and special offers</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-bold text-lg mb-4">Privacy Settings</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Public Profile</Label>
                  <p className="text-sm text-muted-foreground">Allow others to see your profile</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Activity Sharing</Label>
                  <p className="text-sm text-muted-foreground">Share your activity with the community</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-bold text-lg mb-4">Danger Zone</h4>
            <div className="space-y-3">
              <Button variant="destructive" className="w-full md:w-fit justify-start gap-2">
                <LogOut className="h-4 w-4" />
                Delete Account
              </Button>
              <p className="text-sm text-muted-foreground">
                Once you delete your account, there is no going back. All your data will be permanently removed.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsTab;
