import React from "react";

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/light"
import jsx from "react-syntax-highlighter/languages/prism/jsx";
import js from 'react-syntax-highlighter/languages/hljs/javascript';
import prism from "react-syntax-highlighter/styles/prism/darcula";

registerLanguage("jsx", jsx);

export default code => (
  <SyntaxHighlighter language="jsx" style={prism}>
    {code}
  </SyntaxHighlighter>
);
