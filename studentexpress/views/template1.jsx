const React = require('react');

function Template1(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>This is template 1.</p>
      <a href="/about">Go to About</a>
      <a href="/contact">Go to Contact</a>
      <a href="/students/1">View Student 1</a>
    </div>
  );
}

module.exports = Template1;
