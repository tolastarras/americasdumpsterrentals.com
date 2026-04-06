import { Card, CardContent } from '@/components/ui/card';

const OverviewTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-4">Agreement to Terms</h3>
        <p className="text-lg leading-relaxed mb-4">
          These Terms of Service govern your use of <span className="font-semibold">dumpsterrentals.com</span> and all associated services. By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>
        <div className="bg-muted p-4 rounded-lg">
          <p className="font-medium">
            The materials contained in this website are protected by applicable copyright and trademark law.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverviewTab;
