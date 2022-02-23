import MarkdownIt from "markdown-it";
import prism from 'markdown-it-prism';
import hljs from 'highlight.js';
import hljsJavascriptSyntax from 'highlight.js/lib/languages/javascript';
import hljsPythonSyntax from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/atom-one-dark.css';

import { FC, useEffect } from "react";

// import Md from 'react-markdown-it';

type Props = {
    text: string
}
const MarkdownView:FC<Props> = (props) => {
    const md = new MarkdownIt({linkify: true});
    // const iterator = require('markdown-it-for-inline');
    // md.use(iterator, 'foo_replace', 'text', function (tokens: { [x: string]: { content: string; }; }, idx: string | number) {
    //   tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
    // })
    // md.use(prism)
    hljs.registerLanguage('javascript', hljsJavascriptSyntax);
    hljs.registerLanguage('python', hljsPythonSyntax);
    useEffect(() => {
        document
        .querySelectorAll<HTMLElement>('pre code')
        .forEach(block => hljs.highlightBlock(block));
    },[props.text])
    return (
        <>
            {props.text ?
             <div
                // className={MarkdownStyles.renderedMarkdown}
                dangerouslySetInnerHTML={{
                    __html: md.render(props.text),
                }}
                style={{
                    textAlign: 'left',
                }}
                className="fa"
                />: null }
        </>
    )
}

export default MarkdownView