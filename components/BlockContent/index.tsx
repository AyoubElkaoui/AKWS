import { PortableText } from '@portabletext/react';

const BlogContent = ({ content }: { content: any }) => {
  return (
    <PortableText
      value={content}
      components={{
        block: {
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 my-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 my-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-medium text-gray-700 dark:text-gray-300 my-3">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-medium text-gray-600 dark:text-gray-400 my-2">
              {children}
            </h4>
          ),
          normal: ({ children }) => (
            <p className="text-base text-gray-600 dark:text-gray-300 my-2 leading-relaxed">
              {children}
            </p>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 text-gray-700 dark:text-gray-300 italic my-4">
              {children}
            </blockquote>
          ),
        },
        list: {
          bullet: ({ children }) => (
            <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 my-2 space-y-2">
              {children}
            </ul>
          ),
          number: ({ children }) => (
            <ol className="list-decimal ml-5 text-gray-600 dark:text-gray-300 my-2 space-y-2">
              {children}
            </ol>
          ),
        },
        marks: {
          strong: ({ children }) => (
            <strong className="font-bold text-gray-800 dark:text-gray-200">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-700 dark:text-gray-300">{children}</em>
          ),
          underline: ({ children }) => (
            <span className="underline text-gray-700 dark:text-gray-300">
              {children}
            </span>
          ),
          link: ({ value, children }) => (
            <a
              href={value?.href}
              target={value?.openInNewTab ? '_blank' : '_self'}
              rel={value?.openInNewTab ? 'noopener noreferrer' : undefined}
              className="text-blue-500 dark:text-blue-400 underline"
            >
              {children}
            </a>
          ),
        },
        types: {
          image: ({ value }) => (
            <div className="my-5">
              <img
                src={value?.asset?._ref}
                alt={value?.alt || 'Afbeelding'}
                className="rounded-lg shadow-lg max-w-full h-auto mx-auto"
              />
              {value?.caption && (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                  {value.caption}
                </p>
              )}
            </div>
          ),
          code: ({ value }) => (
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-4 rounded-lg overflow-x-auto my-4">
              <code>{value.code}</code>
            </pre>
          ),
        },
      }}
    />
  );
};

export default BlogContent;
