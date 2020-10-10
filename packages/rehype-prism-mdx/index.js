const renderToString = require('preact-render-to-string')
const preact = require('preact')
const { h } = preact
const Highlight = require('prism-react-renderer')
const nightOwl = require('prism-react-renderer/themes/nightOwl')
const Prism = require('prismjs')
const loadLanguages = require("prismjs/components/index");
const prismComponents = require("prismjs/components");
const visit = require("unist-util-visit");

try {
  loadLanguages(
    // Remove meta (not supported)
    Object.keys(prismComponents.languages).filter(v => v !== "meta")
  )
} catch (e) {
  // Find any other removed languages
  console.log(e)
}

module.exports = options => ast => {
  visit(ast, "element", tree => {
    if (tree.tagName === 'code') {
      tree.properties.codestring = tree.children[0].value;

      const lang = tree.properties?.className[0]?.split("-")[1];

      const highlightedCode = renderToString(
        h(
          Highlight.default,
          {
            ...Highlight.defaultProps,
            code: tree.children[0].value.trim(),
            language: lang,
            theme: nightOwl,
            Prism
          },
          ({ className, style, tokens, getLineProps, getTokenProps }) => (
            h(
              "pre",
              {
                className,
                style: { ...style, margin: '0px' }
              },
              tokens.map((line, i) =>
                h(
                  "div",
                  getLineProps({
                    line,
                    key: i,
                    style: {}
                  }),
                  line.map((token, key) =>
                    h(
                      "span",
                      getTokenProps({
                        token,
                        key
                      })
                    )
                  )
                )
              )
            )
          )
        )
      );

      tree.children = [
        {
          value: highlightedCode,
          type: 'text'
        }
      ]

    }
  })
}