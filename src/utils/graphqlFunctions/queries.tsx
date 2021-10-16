import { gql } from "@apollo/client";

export const GET_MEMBERS = gql`
  query Query {
    members {
      id
      firstName
      lastName
      department
      contact
      chapel
    }
  }
`;

export const GET_MEMBER = gql`
  query Query($memberId: ID) {
    member(id: $memberId) {
      id
      firstName
      lastName
      chapel
      gender
      emailAddress
      department
      residentialAddress
      contact
      location
      spouseName
      nameOfChildren
      imageURL
      group
    }
  }
`;

export const GET_MEMBER_NAME = gql`
  query Query($memberId: ID) {
    member(id: $memberId) {
      id
      firstName
      lastName
      chapel
      gender
      emailAddress
      department
      residentialAddress
      contact
      location
      group
    }
  }
`;
