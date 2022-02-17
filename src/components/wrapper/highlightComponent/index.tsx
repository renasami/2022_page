import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
// import {IntrinsicElements , CodeComponent} from 'react-syntax-highlighter'


export const highlightComponent = {
    code({node, inline, className, children, ...props}:{node:any, inline:any, className:any, children:any,}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          style={dark}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
}

