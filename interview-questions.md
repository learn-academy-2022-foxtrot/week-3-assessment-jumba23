# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX allows writing HTML within JavaScript. When it comes to syntax, JSX requires one parent element to be returned while in HTML that is not the case. Another difference is naming class and form element. JSX - className and formHTML VS HTML class and form.

Researched answer: JSX is an extension of Javascript language that allows us to manipulate HTML elements. JSX was created as a syntactic sugar for React.createElement(). In JSX you can use curly braces to write write Javascript language directly. In HTML you would need an external JS file or script tag. All tags are self-close and element attributes in camelCase in JSX.

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: Yarn is a package manager for Javascript. Its is similar to NPM with few minor differences when it comes to maintaining dependencies and running packages. When running yarn we can update package.json or access index.HTML in "public" files in order display/run our app in a browser. From my experience

Researched answer: Yarn is a package manager for Javascript, created by Facebook. It is an acronym for Yet Another Resource Negotiator. Yarn is a package manager that replaces the existing workflow for the npm client or other package managers while remaining compatible with the npm registry. Yarn stores dependencies locally were as npm fetches dependencies from the npm registry during every npm install. Yarn Runs a defined package script. We may define scripts in package. json file. As far as the files being modified, I would need a more specific question.

3. What is an anonymous function in JavaScript?

Your answer: an anonymous function is a function without name. It looks like this ()=>{do something}. It can be used for an immediate invocation of a function.

Researched answer: An anonymous functions are never hoisted (loaded into memory at compilation).The advantage of an anonymous function is that it does not have to be stored in a separate file. This can greatly simplify programs for cases where we have simple calculation at hand by reducing the number of code files necessary for a program.

4. What is the difference between state values and props in React?

Your answer: props are read-only pieces of data received by child component, where as state values are there to bu changed when needed. They can be read at any time as well.

Researched answer: The state is a local data storage and cannot be passed to other components. In other words the state is reserved only for interactivity, that is, data that changes over time. While props are used to pass data from one component to another.props are a way of passing data from parent to child.

5. What is the DOM?

Your answer: its is an acronym for the Document Object Model. It is responsible for handling the web page and its presentation. DOM allows us HTML and XML language to access and manipulate a web page.

Researched answer: the Document Object Model(DOM) is a programing interface for web documents. The DOM sets the logical structure of documents and the way a document is accessed and manipulated. DOMs are usually implemented to provide scripting access to the content of documents with markup languages such as XML or HTML. In the DOM structure, there are three levels of nodes: The Document-level node, Element nodes, and Text nodes.

6. STRETCH: Which is the difference between a div and a span?

Your answer: Div is block element used to organize page elements into groups and style them. While span is an inline element used mostly to style some kinds of text.

Researched answer: The div should be used to wrap sections of a document, while spans are used to wrap small portions of text, images, etc. The div elements are used to provide base level layout in html, while span element is used to stylize texts.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: OOP is a type of programming language the focuses on the objects that developers want to manipulate rather then the logic require to manipulate them. This approach to programming is well-suited for programs that are large and complex. Some of the examples of OOP languages are Java, C#, C++, Python, etc

2. Ruby: Is another OOP language. It is a server-side scripting language similar to Python and PERL. Ruby is great for building desktop applications, static websites, data processing services, and even automation tools. It comes with high-level syntax that makes programming with it feel almost like coding in English.

3. Implicit return: refers to a function without return keyword will still return a value. One line arrow function is a very good example of this, where return keyword is not needed if one line is maintained.

4. Ruby blocks: a ruby block is one or more lines of code that you put inside the do and end keywords. It allows you to group code into a standalone unit that you can use as a method argument. They are anonymous functions that can be passed into methods.

5. Ruby hashes: is a collection of uniques keys an their values. The are very similar to arrays but array use integers for indexing while hash use any object type. THey are also called associative arrays or maps.
