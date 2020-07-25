const { gql } = require('apollo-server');

module.exports = gql`
  type Todo {
    id: ID!
    title: String
    notes: [Note]
    labels: [Label]
    color: String
    isCheckboxMode: Boolean
  }
  type Note {
    text: String!
    isCompleted: Boolean
  }
  type Label {
    id: ID!
    name: String
  }

  input TodoInput {
    id: ID,
    title: String
    notes: [NoteInput]
    labels: [LabelInput]
    color: String
    isCheckboxMode: Boolean
  }
  input NoteInput {
    text: String!
    isCompleted: Boolean
  }
  input LabelInput {
    id: ID!
    name: String
  }
  type Query {
    getTodos: [Todo]
  }
  type Mutation {
    createTodo(todoInput: TodoInput): Todo!
    deleteTodo(todoInput: TodoInput): Todo!
    updateTodo(todoInput: TodoInput): Todo!
    deleteTodos: Boolean
  }
`;
