const renderToString = require('preact-render-to-string')
const preact = require('preact')
const { h } = preact
const Highlight = require('prism-react-renderer')
const Prism = require('prismjs')
const loadLanguages = require("prismjs/components/index");
const prismComponents = require("prismjs/components");
const visit = require("unist-util-visit");

const rangeParser = require('parse-numeric-range');

try {
  // meta doesn't exist in the prismjs package and thus will *FAIL* because it's a FAILURE
  loadLanguages(
    Object.keys(prismComponents.languages).filter((v) => v !== "meta")
  );
} catch (e) {
  // this is here in case prismjs ever removes a language, so we can easily debug
  console.log(e);
}

const RE = /{([\d,-]+)}/;
const calculateLinesToHighlight = (meta) => {
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1];
    const lineNumbers = rangeParser(strlineNumbers);
    // console.log(lineNumbers);
    return (index) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

module.exports = function rehypePrismMdx(options) {
  return (ast) => {
    visit(ast, "element", (parentTree) => {
      if (
        parentTree.tagName === "pre" &&
        parentTree.children.length === 1 &&
        parentTree.children[0].tagName === "code"
      ) {
        let tree = parentTree.children[0];
        // store codestring for later
        tree.properties.codestring = tree.children[0].value.trim();
        const shouldHighlightLine = calculateLinesToHighlight(
          tree.properties.metastring
        );

        let lang =
          tree.properties.className &&
          tree.properties.className[0] &&
          tree.properties.className[0].split("-")[1];

        if (!lang) {
          console.warn("Your code block doesn't have a set language. Please set a language")
          console.warn("See Codeblock:\n", tree.properties.codestring)
          lang = 'shell';
        }

        const highlightedCode = renderToString(
          h(
            Highlight.default,
            {
              ...Highlight.defaultProps,
              ...{
                code: tree.children[0].value.trim(),
                language: lang,
                theme: options?.theme,
                Prism,
              },
            },
            ({ className, style, tokens, getLineProps, getTokenProps }) =>
              h(
                "pre",
                {
                  className: className,
                  style: { ...style, float: 'left', minWidth: '100%', padding: '1rem' },
                },
                tokens.map((line, i) =>
                  h(
                    "div",

                    getLineProps({
                      line,
                      key: i,
                      className: shouldHighlightLine(i)
                        ? "mdx-highlight-line"
                        : "",
                    }),

                    line.map((token, key) =>
                      h(
                        "span",
                        getTokenProps({
                          token,
                          key,
                        })
                      )
                    )
                  )
                )
              )
          )
        );
        // render code to string
        parentTree.tagName = "codeblock";
        parentTree.properties = tree.properties;
        parentTree.children = [
          {
            value: highlightedCode,
            type: "text",
          },
        ];
      }
    });
  };
}




// Revisit why this doesn't work

// const renderToString = require('preact-render-to-string')
// const preact = require('preact')
// const { h } = preact
// const Highlight = require('prism-react-renderer')
// const nightOwl = require('prism-react-renderer/themes/nightOwl')
// const Prism = require('prismjs')
// const loadLanguages = require("prismjs/components/index");
// const prismComponents = require("prismjs/components");
// const visit = require("unist-util-visit");

// const rangeParser = require('parse-numeric-range');

// // Create a closure that determines if we have
// // to highlight the given index
// const calculateLinesToHighlight = (meta) => {
//   const RE = /{([\d,-]+)}/
//   if (RE.test(meta)) {
//     const strlineNumbers = RE.exec(meta)[1]
//     const lineNumbers = rangeParser(strlineNumbers)
//     return (index) => (lineNumbers.includes(index + 1))
//   } else {
//     return () => false
//   }
// }


// try {
//   loadLanguages(
//     // Remove meta (not supported)
//     Object.keys(prismComponents.languages).filter(v => v !== "meta")
//   )
// } catch (e) {
//   // Find any other removed languages
//   console.log(e)
// }

// module.exports = options => ast => {
//   visit(ast, "element", parentTree => {
//     if (parentTree.tagName === "pre" &&
//       parentTree.children.length === 1 &&
//       parentTree.children[0].tagName === "code") {
//       let tree = parentTree.children[0]
//       console.log('tree:', { children: tree.children[0] })
//       tree.properties.codestring = tree.children[0].value.trim();

//       const shouldHighlightLine = calculateLinesToHighlight(
//         tree.properties.metastring
//       )

//       let lang = tree.properties?.className?.[0]?.split("-")[1]

//       if (!lang) {
//         console.warn("Your code block doesn't have a set language. Please set a language")
//         console.warn("See Codeblock:\n", tree.properties.codestring)
//         lang = 'shell';
//       }

//       const highlightedCode = renderToString(
//         h(
//           Highlight.default,
//           {
//             ...Highlight.defaultProps,
//             code: tree.children[0].value.trim(),
//             language: lang,
//             theme: nightOwl,
//             Prism
//           },
//           ({ className, style, tokens, getLineProps, getTokenProps }) => (
//             h(
//               "pre",
//               {
//                 className,
//                 style: { ...style, margin: '0px' }
//               },
//               tokens.map((line, i) =>
//                 h(
//                   "div",
//                   getLineProps({
//                     line,
//                     key: i,
//                     className: shouldHighlightLine(i) ? 'mdx-highlight-line' : ""
//                   }),
//                   line.map((token, key) =>
//                     h(
//                       "span",
//                       getTokenProps({
//                         token,
//                         key
//                       })
//                     )
//                   )
//                 )
//               )
//             )
//           )
//         )
//       );

//       parentTree.tagName = "codeblock";
//       parentTree.properties = tree.properties;
//       parentTree.children[
//         {
//           value: highlightedCode,
//           type: "text"
//         }
//       ]
//     }
//   })
// }