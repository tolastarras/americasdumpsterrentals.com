'use client';

import { useEffect, useRef, useState } from 'react';

export default function CodeTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Full code lines to animate
  const codeLines = [
    'import { useState, useEffect } from \'react\';',
    'import type { Metadata } from \'next\';',
    'import { motion } from \'framer-motion\';',
    '',
    'interface Project {',
    '  title: string;',
    '  description: string;',
    '  tech: string[];',
    '}',
    '',
    'const projects: Project[] = [',
    '  {',
    '    title: \'E-Commerce Platform\',',
    '    description: \'Full-stack Next.js app with Supabase\',',
    '    tech: [\'Next.js\', \'TypeScript\', \'Tailwind\']',
    '  },',
    '  {',
    '    title: \'Analytics Dashboard\',',
    '    description: \'Real-time data visualization with D3.js\',',
    '    tech: [\'React\', \'D3.js\', \'Node.js\']',
    '  }',
    '];',
    '',
    'export default function Portfolio() {',
    '  const [isVisible, setIsVisible] = useState(false);',
    '',
    '  useEffect(() => {',
    '    setIsVisible(true);',
    '  }, []);',
    '',
    '  return (',
    '    <div',
    '      initial={{ opacity: 0 }}',
    '      animate={{ opacity: isVisible ? 1 : 0 }}',
    '      className=\'container mx-auto\'',
    '    >',
    '      <h1 className=\'text-4xl font-bold\'>My Work</h1>',
    '      <div className=\'grid grid-cols-2 gap-4\'>',
    '        {projects.map((project) => (',
    '          <div key={project.title}>',
    '            {project.title}',
    '          </div>',
    '        ))}',
    '      </div>',
    '    </div>',
    '  );',
    '}',
  ];

  // Typewriter effect
  useEffect(() => {
    if (currentLineIndex >= codeLines.length) return;

    const timer = setTimeout(() => {
      const currentLine = codeLines[currentLineIndex];

      if (currentCharIndex <= currentLine.length) {
        // Add next character to current line
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines.length <= currentLineIndex) {
            newLines.push(currentLine.substring(0, currentCharIndex));
          } else {
            newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex);
          }
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);

        // Auto-scroll to bottom
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      } else {
        // Move to next line
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    }, 40);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, codeLines]);

  // VS Code Dark+ theme syntax highlighting
  const highlightSyntax = (line: string) => {
    if (!line) return <span>&nbsp;</span>;

    const remaining = line;

    // Match patterns in order of precedence
    const patterns = [
      // Strings (green)
      { pattern: /'[^']*'|"[^"]*"/g, className: 'text-[#ce9178]' }, // VS Code string orange/rust

      // Comments (green)
      { pattern: /\/\/.*$/g, className: 'text-[#6a9955]' }, // VS Code comment green

      // JSX tags (red/orange)
      { pattern: /&lt;\/?[a-zA-Z][a-zA-Z0-9]*|&gt;|\/&gt;/g, className: 'text-[#569cd6]' }, // VS Code tag blue

      // Tag attributes (light blue)
      {
        pattern: /\b(className|initial|animate|key|variant)\b(?=\s*=)/g,
        className: 'text-[#9cdcfe]',
      }, // VS Code attribute light blue

      // Keywords (blue)
      {
        pattern:
          /\b(import|from|export|default|function|return|const|let|interface|typeof|keyof|extends|implements)\b/g,
        className: 'text-[#569cd6]',
      }, // VS Code keyword blue

      // Control flow (blue)
      {
        pattern: /\b(if|else|switch|case|break|continue|for|while|do|try|catch|finally|throw)\b/g,
        className: 'text-[#c586c0]',
      }, // VS Code control purple

      // Types/classes (teal/green)
      {
        pattern:
          /\b(string|number|boolean|array|object|any|void|never|unknown|Record|Pick|Omit|Partial|Required|Readonly)\b/g,
        className: 'text-[#4ec9b0]',
      }, // VS Code types teal

      // React hooks (light blue)
      {
        pattern: /\b(useState|useEffect|useRef|useContext|useReducer|useCallback|useMemo)\b/g,
        className: 'text-[#dcdcaa]',
      }, // VS Code function yellow

      // Functions (yellow)
      {
        pattern: /\b(map|filter|reduce|forEach|console|log|setIsVisible|setIsVisible)\b/g,
        className: 'text-[#dcdcaa]',
      }, // VS Code function yellow

      // Numbers (green)
      { pattern: /\b\d+\b/g, className: 'text-[#b5cea8]' }, // VS Code numbers light green

      // Operators (white)
      { pattern: /[=:;,.\[\]{}()<>+*/-]/g, className: 'text-[#d4d4d4]' }, // VS Code operators/punctuation white
    ];

    // Simple tokenization - in production you'd want a proper parser
    const matches: { index: number; length: number; className: string }[] = [];

    patterns.forEach(({ pattern, className }) => {
      const regex = new RegExp(pattern);
      let match;
      while ((match = regex.exec(remaining)) !== null) {
        matches.push({
          index: match.index,
          length: match[0].length,
          className,
        });
      }
    });

    // Sort matches by index
    matches.sort((a, b) => a.index - b.index);

    // Build the highlighted line
    if (matches.length === 0) {
      return <span className="text-[#d4d4d4]">{line}</span>; // Default white
    }

    let currentPos = 0;
    const elements = [];

    matches.forEach((match, i) => {
      // Add text before this match
      if (match.index > currentPos) {
        elements.push(
          <span key={`text-${i}`} className="text-[#d4d4d4]">
            {line.substring(currentPos, match.index)}
          </span>,
        );
      }

      // Add the matched text with its class
      elements.push(
        <span key={`match-${i}`} className={match.className}>
          {line.substring(match.index, match.index + match.length)}
        </span>,
      );

      currentPos = match.index + match.length;
    });

    // Add remaining text
    if (currentPos < line.length) {
      elements.push(
        <span key="text-end" className="text-[#d4d4d4]">
          {line.substring(currentPos)}
        </span>,
      );
    }

    return <>{elements}</>;
  };

  return (
    <div className="relative w-full h-1/2">
      {/* Terminal Window - Full size */}
      <div className="bg-[#1e1e1e] rounded-xl border border-[#3c3c3c] shadow-2xl w-full h-full flex flex-col">
        {/* Terminal Header - VS Code style */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#3c3c3c] rounded-t-xl">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-xs text-[#cccccc] ml-3">portfolio.tsx</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#569cd6]">TypeScript</span>
            <span className="text-[#6a9955]">✓</span>
          </div>
        </div>

        {/* Terminal Content - Scrollable */}
        <div
          ref={terminalRef}
          className="p-4 font-mono text-sm flex-1 overflow-y-auto bg-[#1e1e1e] rounded-b-xl"
          style={{ minHeight: '500px', maxHeight: '600px' }}
        >
          <div className="space-y-0.5">
            {displayedLines.map((line, index) => (
              <div key={index} className="flex">
                <span className="text-[#6a9955] w-8 mr-2 text-right select-none opacity-50">
                  {index + 1}
                </span>
                {highlightSyntax(line)}
              </div>
            ))}

            {/* Blinking cursor - VS Code style */}
            {currentLineIndex < codeLines.length && (
              <div className="flex items-center">
                <span className="text-[#6a9955] w-8 mr-2 text-right select-none opacity-50">
                  {displayedLines.length + 1}
                </span>
                <span className="w-2 h-4 bg-[#aeafad] animate-pulse" />
              </div>
            )}

            {/* Terminal complete message */}
            {currentLineIndex >= codeLines.length && (
              <div className="flex mt-4">
                <span className="text-[#6a9955] w-8 mr-2 text-right select-none">✓</span>
                <span className="text-[#6a9955]">// Ready for your project</span>
                <span className="w-2 h-4 bg-[#aeafad] animate-pulse ml-2" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Design Elements */}
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-linear-to-br from-[#569cd6]/20 to-[#6a9955]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-linear-to-br from-[#c586c0]/10 to-[#4ec9b0]/10 rounded-full blur-2xl -z-10" />
    </div>
  );
}
