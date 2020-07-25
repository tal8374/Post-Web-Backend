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
  type User {
    id: ID!
    email: String!
    todos: [Todo]
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
  input SignupInput {
    email: String!
    password: String!
  }
  input SigninInput {
    email: String!
    password: String!
  }
  input UserInput {
    email: String!
  }

  type Query {
    getTodos: [Todo]
    getUser(userInput: UserInput!): User!
  }
  type Mutation {
    createTodo(todoInput: TodoInput): Todo!
    deleteTodo(todoInput: TodoInput): Todo!
    updateTodo(todoInput: TodoInput): Todo!
    deleteTodos: Boolean
    signup(signupInput: SignupInput!): User!
    signin(signinInput: SigninInput!): User!
  }
`;
