interface PageHeaderProps {
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  centered?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function PageHeader({
  title,
  description,
  actions,
  centered = false,
  size = 'md',
}: PageHeaderProps) {
  const titleSizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-5xl md:text-6xl',
  };

  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <div className={`flex flex-col ${centered ? '' : 'sm:flex-row sm:items-center'} justify-between gap-4 mb-6`}>
        <div className={centered ? 'mx-auto max-w-3xl' : ''}>
          <h1 className={`${titleSizes[size]} font-bold text-gray-900 mb-4`}>
            {title}
          </h1>
          {description && (
            <p className="text-lg text-muted-foreground">{description}</p>
          )}
        </div>
        {actions && (
          <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
