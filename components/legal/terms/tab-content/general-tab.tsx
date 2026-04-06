import { Copyright } from 'lucide-react';

import { Separator } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

const GeneralTermsTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-6">General Terms</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Copyright className="h-5 w-5" />
              Intellectual Property
            </h4>
            <p className="text-muted-foreground">
              All source code, designs, and content on dumpsterrentals.com are protected by copyright and other intellectual property laws. Unauthorized use may violate these laws.
            </p>
          </div>

          <Separator />

          <div>
            <h4 className="font-bold text-lg mb-3">Termination</h4>
            <p className="text-muted-foreground">
              We may terminate or suspend access to our service immediately, without prior notice, for any breach of these Terms of Service.
            </p>
          </div>

          <Separator />

          <div>
            <h4 className="font-bold text-lg mb-3">Governing Law</h4>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
            </p>
          </div>

          <Separator />

          <div>
            <h4 className="font-bold text-lg mb-3">Changes to Terms</h4>
            <p className="text-muted-foreground">
              We reserve the right to revise these terms at any time. By using this website, you agree to be bound by the current version of these Terms of Service.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneralTermsTab;
