'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Download, Gift, Heart, Lock, Shield, Zap } from 'lucide-react';

import { type Project } from '@/lib/types';
import { cn } from '@/lib/utils/class-names';

import { Button, Label } from '@/components/ui';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { DONATION_AMOUNTS } from '@/constants/donations';

interface DonationSelectorProps {
  project: Project
  hasPurchased: boolean
  isLoggedIn: boolean
}

export function DonationSelector({ project, hasPurchased, isLoggedIn }: DonationSelectorProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(DONATION_AMOUNTS[1].value);
  const router = useRouter();

  const handleDonate = () => {
    if (!isLoggedIn) {
      router.push(`/auth/login?redirect=/projects/${project.id}`);
      return;
    }
    router.push(`/checkout/${project.id}?amount=${selectedAmount}`);
  };

  if (hasPurchased) {
    return (
      <div className="rounded-2xl bg-linear-to-br from-primary/20 via-cyan-500/10 to-primary/5 p-6 border border-primary/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-primary/20">
            <Download className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Access Granted</h3>
            <p className="text-sm text-muted-foreground">You own this project</p>
          </div>
        </div>
        <Button className="w-full h-12 text-base font-semibold" size="lg" asChild>
          <Link href={project.file_url} download>
            <Download className="mr-2 h-5 w-5" />
            Download Source Code
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-linear-to-br from-card via-card to-primary/5 border border-black/50 overflow-hidden">
      {/* Header */}
      <div className="p-6 pb-0">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary/20 animate-pulse-glow">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Support & Download</h3>
            <p className="text-sm text-muted-foreground">Choose your contribution</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <RadioGroup
          value={selectedAmount.toString()}
          onValueChange={(value) => setSelectedAmount(Number.parseInt(value))}
          className="grid grid-cols-2 gap-3"
        >
          {DONATION_AMOUNTS.map((amount, index) => (
            <div key={amount.value}>
              <RadioGroupItem value={amount.value.toString()} id={`amount-${amount.value}`} className="peer sr-only" />
              <Label
                htmlFor={`amount-${amount.value}`}
                className={cn(
                  'relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300',
                  'hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.02]',
                  'peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:scale-[1.02]',
                  'peer-data-[state=checked]:shadow-lg peer-data-[state=checked]:shadow-primary/20',
                )}
              >
                {index === 1 && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full">
                    POPULAR
                  </span>
                )}
                <span className="text-2xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text">
                  {amount.label}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {index === 0 && 'Starter'}
                  {index === 1 && 'Recommended'}
                  {index === 2 && 'Supporter'}
                  {index === 3 && 'Champion'}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button
          onClick={handleDonate}
          className="w-full h-14 text-base font-semibold bg-linear-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
          size="lg"
        >
          {isLoggedIn ? (
            <>
              <Gift className="mr-2 h-5 w-5" />
              Donate {DONATION_AMOUNTS.find((a) => a.value === selectedAmount)?.label} & Download
            </>
          ) : (
            <>
              <Lock className="mr-2 h-5 w-5" />
              Sign In to Download
            </>
          )}
        </Button>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="h-4 w-4 text-primary" />
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Zap className="h-4 w-4 text-cyan-500" />
            <span>Instant Access</span>
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground pt-2 border-t border-black/50">
          Powered by Stripe. Your support helps developers create more amazing projects.
        </p>
      </div>
    </div>
  );
}
