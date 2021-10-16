import { gql } from "@apollo/client";

export const ADD_MEMBER = gql`
  mutation AddMember($addMember: AddMember) {
    addMember(input: $addMember) {
      firstName
      lastName
      otherName
      dateOfBirth
      age
      gender
      hometown
      region
      country
      residentialAddress
      contact
      emergencyContact
      emailAddress
      postalAddress
      maritalStatus
      spouseName
      numberOfChlidren
      nameOfChildren
      yearJoinedChurch
      department
      previousChurch
      group
    }
  }
`;

export const UPDATE_MEMBER = gql`
  mutation UpdateMemberMutation(
    $updateMemberId: ID
    $updateMemberInput: AddMember
  ) {
    updateMember(id: $updateMemberId, input: $updateMemberInput) {
      firstName
      lastName
      otherName
      dateOfBirth
      age
      gender
      hometown
      region
      country
      residentialAddress
      contact
      emergencyContact
      emailAddress
      postalAddress
      maritalStatus
      spouseName
      numberOfChlidren
      nameOfChildren
      yearJoinedChurch
      department
      previousChurch
      group
    }
  }
`;