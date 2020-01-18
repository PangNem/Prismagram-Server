export const USER_FRAGMENT = `
  id
  username
`;

export const COMMENT_FRAGMENT = `
  id
  text
  user {
    ${USER_FRAGMENT}
  }
`;


export const FILE_FRAGMENT = `
  id
  url
`;

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post {
    id
    caption
    location
    user {
      ${USER_FRAGMENT}
    }
    comments {
      ${COMMENT_FRAGMENT}
    }
    files {
      ${FILE_FRAGMENT}
    }
  }
`;

export const ROOM_FRAGMENT = `
  fragment RoomParts on Room {
    id
    participants {
      id
    }
  }
`