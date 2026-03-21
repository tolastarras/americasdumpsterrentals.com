'use client';

import { useState } from 'react';

import { SecurityService } from '@/lib/services/security.service';

// import { saveContactMessage } from '@/app/actions/save-contact-message';

type TestResult = {
  test: string;
  success: boolean;
  message: string;
  data?: unknown;
};

interface SecurityIntegrationTestProps {
  currentToken?: string;
  onTestComplete?: (results: TestResult[]) => void;
}

export const SecurityIntegrationButtonTest = ({
  currentToken,
  onTestComplete,
}: SecurityIntegrationTestProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);

  const runAllTests = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResults([]);

    const testResults: TestResult[] = [];

    try {
      // Test 1: Token validation
      // console.log('🧪 TEST 1: Token Validation');
      const tokenToTest = currentToken || `test-token-${Date.now()}`;
      const tokenResult = await SecurityService.verifyTurnstile(tokenToTest, 'localhost');

      testResults.push({
        test: 'Token Validation',
        success: tokenResult.allowed,
        message: tokenResult.allowed ? '✅ Token accepted' : `❌ ${tokenResult.reason}`,
        data: tokenResult.details,
      });

      // console.log('✅ Token test result:', tokenResult);

      // Test 2: Rate limiting
      // console.log('🧪 TEST 2: Rate Limiting');
      const rateLimitResult = SecurityService.checkRateLimit(`test-ip-${Date.now()}`, 3, 1);

      testResults.push({
        test: 'Rate Limiting',
        success: rateLimitResult.allowed,
        message: rateLimitResult.allowed ? '✅ Rate limit passed' : `❌ ${rateLimitResult.reason}`,
        data: rateLimitResult.details,
      });

      // Test 3: Content validation
      // console.log('🧪 TEST 3: Content Validation');
      const contentResult = SecurityService.validateContent('Valid test message for security testing');

      testResults.push({
        test: 'Content Validation',
        success: contentResult.allowed,
        message: contentResult.allowed ? '✅ Content valid' : `❌ ${contentResult.reason}`,
        data: contentResult,
      });

      // Test 4: Full form submission (if we have a token)
      // if (currentToken) {
      //   console.log('🧪 TEST 4: Full Form Submission');
      //   const testFormData = new FormData();
      //   testFormData.append('name', 'Test User');
      //   testFormData.append('email', 'test@example.com');
      //   testFormData.append('subject', 'Security Integration Test');
      //   testFormData.append('message', 'Testing the full security flow from component');
      //   testFormData.append('turnstileToken', currentToken);

      //   const submissionResult = await saveContactMessage(testFormData);

      //   testResults.push({
      //     test: 'Form Submission',
      //     success: submissionResult.success,
      //     message: submissionResult.success ? '✅ Form submitted successfully' : `❌ ${submissionResult.message}`,
      //     data: submissionResult,
      //   });

      //   console.log('✅ Submission result:', submissionResult);
      // }

      setResults(testResults);

      if (onTestComplete) {
        onTestComplete(testResults);
      }

    } catch (error) {
      console.error('❌ Test error:', error);
      testResults.push({
        test: 'Error',
        success: false,
        message: `❌ ${error instanceof Error ? error.message : 'Unknown error'}`,
        data: error,
      });
      setResults(testResults);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 border border-purple-300 rounded-lg bg-purple-50 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-purple-800">🧪 Security Integration Test</h3>
        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
          {currentToken ? '✓  Has Token' : '✗ No Token'}
        </span>
      </div>

      <div className="space-y-3">
        <div className="text-sm text-purple-700">
          {currentToken && (
            <p className="text-xs truncate">Token: {currentToken.substring(0, 30)}...</p>
          )}
        </div>

        <button
          onClick={runAllTests}
          disabled={isLoading}
          className="w-full px-4 py-3 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 disabled:opacity-50 flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Running Tests...
            </>
          ) : (
            'Run Security Integration Tests'
          )}
        </button>

        {results.length > 0 && (
          <div className="space-y-2 mt-4">
            <h4 className="font-medium text-purple-700">Test Results:</h4>
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-3 rounded ${result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{result.test}</span>
                  <span className={`text-xs px-2 py-1 rounded ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {result.success ? 'PASS' : 'FAIL'}
                  </span>
                </div>
                <p className="text-sm">{result.message}</p>
                <details className="mt-2">
                  <summary className="text-xs text-gray-600 cursor-pointer">Details</summary>
                  <pre className="text-xs bg-white p-2 mt-1 rounded border overflow-auto max-h-32">
                    {result?.data ? JSON.stringify(result.data as Record<string, unknown>, null, 2) : 'Something went wrong!'}
                  </pre>
                </details>
              </div>
            ))}
          </div>
        )}

        <div className="mt-3 text-xs text-purple-600 space-y-1">
          <p className="text-purple-500 mt-2">
            Check browser console and Next.js terminal for detailed logs
          </p>
        </div>
      </div>
    </div>
  );
};
