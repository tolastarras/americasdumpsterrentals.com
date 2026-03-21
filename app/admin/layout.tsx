import { PageHeader } from '@/components/layout/page-header';
// import { Toaster } from '@/components/ui/toaster';

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode & {
    props?: {
      headerTitle?: string
      headerDescription?: string
    }
  }
}) {
  // Pages can optionally pass header props
  const headerTitle = children.props?.headerTitle;
  const headerDescription = children.props?.headerDescription;

  return (
    <div className="min-h-screen max-w-6xl bg-linear-to-b from-background to-secondary/5 container mx-auto p-4">
      {headerTitle && (
        <PageHeader
          title={headerTitle}
          description={headerDescription}
        />
      )}
      <div className="mx-auto">
        {children}
        {/* <Toaster /> */}
      </div>
    </div>
  );
}
