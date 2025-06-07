// components/Comment.js
import { sanitize } from '@/utils/sanitize';

export default function Comment({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: sanitize(html) }} />;
}
