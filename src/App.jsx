import { useState } from 'react'
import './App.css'
import Markdown from 'react-markdown';

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\` , between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const[markdown,setMardown] = useState(defaultText);
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold p-2'>Markdown Previewer</h1>
      <div className='text-editor-box p-6 h-[60vh] w-[100%] flex justify-center items-center'>
        <textarea name="editor" id='editor' className='textArea text-[#cbd5e1] text-lg w-[80%] min-h-[100%] rounded-lg bg-[#3f3f46]  p-4' value={markdown} onChange={(e) => setMardown(e.target.value)}></textarea>
      </div>
      <div id='preview' className='markdown-box text-[#cbd5e1] text-md w-[80%] min-h-[100%] rounded-lg bg-[#3f3f46]  p-4'>
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  )
}

export default App
