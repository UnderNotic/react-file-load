import React from "react";

import SyntaxHighlighter, {registerLanguage} from "react-syntax-highlighter/prism-light"
import prism from "react-syntax-highlighter/styles/prism/darcula";
import jsx from "react-syntax-highlighter/languages/prism/jsx";
registerLanguage("jsx", jsx);

export default ({children}) => (
  <SyntaxHighlighter language="jsx" style={prism}>
    {children}
  </SyntaxHighlighter>
);
