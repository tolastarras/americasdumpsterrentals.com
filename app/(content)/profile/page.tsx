'use client';

export const dynamic = 'force-dynamic';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { Activity, Calendar, Camera, Check, Database, Globe, Key, Lock, LogOut, Mail, Shield, UserCircle, X } from 'lucide-react';
import { toast } from 'sonner';

import { User } from '@/app/types';

import { createClient } from '@/lib/supabase/client';

import { ProfileTabs } from '@/components/profile/profile-tabs';
import { Badge, Button } from '@/components/ui';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function ProfilePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock user data - replace with actual Supabase auth
  const [user, setUser] = useState<User>({
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@americasdumpsterrentals.com',
    avatar: '',
    role: 'Premium Member',
    joinDate: 'January 2024',
    lastLogin: '2 hours ago',
    accountId: 'USR-7892-4561',
    plan: 'Premium',
    usage: {
      storage: '4.2 GB / 10 GB',
      projects: 8,
      apiCalls: '1,234 this month',
    },
  });

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast.error('Image must be less than 5MB');
      return;
    }

    // Create preview
    const previewUrl = URL.createObjectURL(file);
    setAvatarPreview(previewUrl);

    // Upload to Supabase Storage
    await uploadAvatar(file);
  };

  const uploadAvatar = async (file: File) => {
    const supabase = createClient();

    try {
      setUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 100);

      // 1. Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true,
        });

      if (uploadError) throw uploadError;

      // 2. Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // 3. Update user profile in database
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id);

      if (updateError) throw updateError;

      // 4. Update local state
      setUser(prev => ({ ...prev, avatar: publicUrl }));
      setUploadProgress(100);

      toast.success('Profile picture updated successfully!');

      // Clear preview after successful upload
      setTimeout(() => {
        setAvatarPreview(null);
      }, 1000);

    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
      setTimeout(() => setUploadProgress(0), 500);
    }
  };

  const removeAvatar = async () => {
    const supabase = createClient();

    try {
      // 1. Remove from database
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: null })
        .eq('id', user.id);

      if (updateError) throw updateError;

      // 2. Update local state
      setUser(prev => ({ ...prev, avatar: '' }));
      toast.success('Profile picture removed');
    } catch (error) {
      console.error('Remove error:', error);
      toast.error('Failed to remove image');
    }
  };

  const cancelUpload = () => {
    setAvatarPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      {/* Hero Header */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          {/* Avatar with Upload Overlay */}
          <div className="relative group">
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-background shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
              onClick={handleAvatarClick}>
              <AvatarImage src={avatarPreview || user.avatar} alt={user.name} />
              <AvatarFallback className="text-3xl bg-primary/10 text-primary">
                <UserCircle className="w-16 h-16" />
              </AvatarFallback>
            </Avatar>

            {/* Upload Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              onClick={handleAvatarClick}>
              <Camera className="h-8 w-8 text-white" />
            </div>

            {/* Upload Progress */}
            {uploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-full">
                <div className="text-center">
                  <div className="relative w-16 h-16">
                    <Progress value={uploadProgress} className="w-16 h-16 [&>div]:bg-primary" />
                    <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                      {uploadProgress}%
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                  {user.name}
                </h1>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {user.email}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <Badge variant="outline" className="gap-1.5">
                    <Shield className="h-3 w-3" />
                    {user.role}
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <Calendar className="h-3 w-3" />
                    Member since {user.joinDate}
                  </Badge>
                  <Badge variant="outline" className="gap-1.5">
                    <Lock className="h-3 w-3" />
                    Last login {user.lastLogin}
                  </Badge>
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {/* Preview Mode Card */}
        {avatarPreview && !uploading && (
          <Card className="mb-6 border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                    <Image src={avatarPreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">New Profile Picture</h4>
                    <p className="text-sm text-muted-foreground">Click Save to update your profile</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={cancelUpload}>
                    <X className="h-4 w-4 mr-1" />
                    Cancel
                  </Button>
                  <Button size="sm" onClick={() => handleFileChange}>
                    <Check className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm font-medium text-muted-foreground">Storage</p>
                    <Database className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold mb-1">{user.usage.storage}</p>
                  <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm font-medium text-muted-foreground">Projects</p>
                    <Activity className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold mb-1">{user.usage.projects} Active</p>
                  <p className="text-xs text-muted-foreground">+2 this month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm font-medium text-muted-foreground">API Usage</p>
                    <Globe className="h-5 w-5 text-purple-500" />
                  </div>
                  <p className="text-2xl font-bold mb-1">{user.usage.apiCalls}</p>
                  <p className="text-xs text-muted-foreground">10,000 monthly limit</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <ProfileTabs
        user={user}
        avatarPreview={avatarPreview}
        uploading={uploading}
        handleAvatarClick={handleAvatarClick}
        removeAvatar={removeAvatar}
      />

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { title: 'Download Data', icon: Database, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
          { title: 'API Keys', icon: Key, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30' },
          { title: 'Support', icon: Shield, color: 'text-amber-600', bg: 'bg-amber-100 dark:bg-amber-900/30' },
          { title: 'Documentation', icon: Globe, color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-900/30' },
        ].map((action, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
            <CardContent className="p-5 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${action.bg} mb-3 mx-auto`}>
                <action.icon className={`h-6 w-6 ${action.color}`} />
              </div>
              <h4 className="font-bold mb-1">{action.title}</h4>
              <p className="text-xs text-muted-foreground">Click to manage</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer CTA */}
      <Card className="bg-linear-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our support team is here to help you with any questions about your account or our services.
            </p>
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
