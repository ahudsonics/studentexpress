const React = require('react');

function Student(props) {
  const { student } = props;
  return (
    <div>
      <h1>Student Details</h1>
      {student && (
        <div>
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
        </div>
      )}
    </div>
  );
}

module.exports = Student;
