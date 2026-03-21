export const CodeSnippet = () => {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 transform translate-y-2 group-hover:translate-x-2 group-hover:translate-y-0 transition-transform duration-500">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-xs text-gray-400 ml-2">app/page.tsx</span>
      </div>
      <div className="font-mono text-xs text-blue-400">
        <span className="text-purple-400">export default</span>{' '}
        <span className="text-yellow-400">function</span>{' '}
        <span className="text-white">Home</span>() {'{'}
        <br />
        <span className="text-blue-400 ml-4">return</span> {'('}
        <br />
        <span className="text-white ml-8">{'<'}div</span>{' '}
        <span className="text-green-400">className</span>=
        <span className="text-green-400">"container"</span>
        {'>'}
        <br />
        <span className="text-white ml-12">{'<'}h1</span>
        {'>'}
        <span className="text-yellow-400">Hello World</span>
        <span className="text-white">
          {'<'}/h1{'>'}
        </span>
        <br />
        <span className="text-white ml-8">
          {'<'}/div{'>'}
        </span>
        <br />
        <span className="text-white ml-4">{')'}</span>
        <br />
        <span className="text-white">{'}'}</span>
      </div>
    </div>
  );
};
