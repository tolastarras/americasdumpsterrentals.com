/**
 * Syntax Highlighter Component
 *
 * # Install dependencies
 * pnpm add react-syntax-highlighter @types/react-syntax-highlighter
 */

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeWindowProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeWindow({
  code,
  language = 'typescript',
  filename = 'App.tsx',
  showLineNumbers = true,
}: CodeWindowProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
      {/* Window Title Bar */}
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-gray-400 ml-2">{filename}</span>
        </div>
        <div className="text-xs px-2 py-1 rounded bg-blue-900/50 text-blue-300">
          {language.toUpperCase()}
        </div>
      </div>

      {/* Code Area */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          fontSize: '0.875rem',
          background: '#0d1117',
        }}
        lineNumberStyle={{
          color: '#6e7681',
          minWidth: '3.5em',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
