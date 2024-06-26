
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export default function MarkdownContent({ content }) {
    return <ReactMarkdown children={content} remarkPlugins={[gfm]} />;
}