import React from "react";
import ReactDOM from "react-dom";

// Nested Components

// As it's a component (Statless Functional Component)
// We need a CAPITAL letter and ALWAYS return something
function BookList() {
  return (
    <section>
      <Image />
    </section>
  );
}

const Book = () => {
  return <article>this a book</article>;
};

const Image = () => <img src="" alt=""></img>;

ReactDOM.render(<BookList />, document.getElementById("root"));
