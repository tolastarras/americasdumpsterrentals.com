'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Loader2, Trash2 } from 'lucide-react';

// import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface DeleteProjectButtonProps {
  projectId: string
  projectTitle: string
}

export function DeleteProjectButton({ projectId, projectTitle }: DeleteProjectButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  console.error('projectId', projectId);

  const handleDelete = async () => {
    setIsDeleting(true);
    // const supabase = createClient();

    // const { error } = await supabase.from('projects').delete().eq('id', projectId);
    const error = null;

    if (!error) {
      router.refresh();
    }

    setIsDeleting(false);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive bg-transparent py-2">
          <Trash2 className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Project</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete &quot;{projectTitle}&quot;? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
