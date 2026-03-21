import { Activity, Camera, Save, UserCircle } from 'lucide-react';

import { ProfileTabsProps } from '@/app/types';

import { Button, Input, Label, Textarea } from '@/components/ui';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const PersonalTab = ({ user, avatarPreview, uploading, handleAvatarClick, removeAvatar }: ProfileTabsProps) => {
  return (
    <>
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">User Details</h3>
            <p className="text-muted-foreground">Manage your contact information and personalize your account settings.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Avatar Section */}
            <div className="space-y-4">
              <div className="text-center">
                <div className="relative inline-block">
                  <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
                    <AvatarImage src={avatarPreview || user.avatar} alt={user.name} />
                    <AvatarFallback>
                      <UserCircle className="w-20 h-20" />
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 shadow-md"
                    onClick={handleAvatarClick}
                  >
                    <Camera className="h-3 w-3 mr-1" />
                    Change
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">JPG, PNG or GIF. Max 5MB.</p>
              </div>

              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleAvatarClick}
                  disabled={uploading}
                >
                  {uploading ? 'Uploading...' : 'Upload New Photo'}
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={removeAvatar}
                  disabled={!user.avatar}
                >
                  Remove Photo
                </Button>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:col-span-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="San Francisco, CA" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  rows={3}
                  defaultValue="Full-stack developer passionate about building amazing web experiences."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" type="url" defaultValue="https://alexjohnson.dev" />
              </div>

              <div className="pt-4">
                <Button className="gap-2" disabled>
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Card */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Recent Activity
          </h4>
          <div className="space-y-3">
            {[
              { action: 'Last Login', detail: 'today', time: '2 hours ago' },
              { action: 'Created project', detail: 'Marketing Dashboard', time: '2 days ago' },
              { action: 'Updated API key', detail: 'Production environment', time: '1 week ago' },
              { action: 'Downloaded report', detail: 'Monthly Analytics Q4', time: '2 weeks ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.detail}</p>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PersonalTab;
