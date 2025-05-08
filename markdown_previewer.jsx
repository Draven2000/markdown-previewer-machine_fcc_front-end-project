// React:

const initialState = `
# React Markdown Tutorial:
---
Here's a quick rundown of react markup to make use of, feel free to practice with the editor

## Font Practice:
**Bold** uses double **
*Italic* text only uses single *, to avoid confusion you may also use _underscores_ 
You can mix typography styles to have **_italic and bold text_**
~~crossing lines of text out like so~~.
> Block Quotes are handy for allowing quotes to stand out on your page

## A subheading using \## is equivalent to a \`<h2>\` tag in HTML
### Can create subheadings for your subheadings

## List Formatting:

- Unordered lists may be formed using hypens.
  - three different indentation styles
     - All subsequent bullet points after the second indentation level being square.
        - like this.


1. Ordered lists:
1. Automatically increments for you if you just use ones

## Table formatting:

Tables may be formatted as so, with the header distinguished by the \--- line below
a colon : can be used for text alignment within the columns

| Left   | Center | Right | Default|
|:-------|:------:|------:| -----  |
| A      | B      | C     | D      |
| A      | B      | C     | D      |

## Code markdown:
To write single lines of code without rendering, surround in backticks:
\`<h3></h3>\`

To write multiple lines of code, use three sets of backticks:
\`\`\`
// Example function for converting temperature:

const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
\`\`\`

## Links and embeding:

To write hypertex, write the text you want to be displayed, the [anchor], in sqaure brackets followed by the hyperlink (https://github.com/Draven2000) in round brackets.
This example will take you to my [personal github page](https://github.com/Draven2000) 


Embed images the same way you embed hyperlinks, but with an additional "!"
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initialState,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div id = "editor-wrap">
          <label htmlFor="editor">Markdown Editor:</label>
          <textarea id="editor"
            value={this.state.input}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div id = "preview-wrap">
          <label htmlFor="preview">Preview:</label>
          <div id="preview"
            dangerouslySetInnerHTML={{ __html: marked.parse(this.state.input) }}
          />
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Presentational />, document.getElementById('root'));
