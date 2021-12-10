import { Fragment, useState } from "react";

import Modal from "../UI/Modal";
import UserItem from "./UserItem";

const UsersList = ({ users }) => {
  const [userModal, setUserModal] = useState();

  const userModalHandler = (name, lastName, age) => {
    setUserModal({
      title: name + " " + lastName,
      content:
        "Joven de " +
        age +
        " años. Un tipo chévere y que ta dique aprendiendo a programar.",
    });
  };

  const closeModal = () => {
    setUserModal(null);
  };

  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Last Name </th>
            <th>Age </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <UserItem
                name={user.name}
                lastName={user.lastName}
                age={user.age}
                key={user.id}
                onClick={userModalHandler}
              />
            );
          })}
        </tbody>
      </table>
      {userModal && (
        <Modal
          title={userModal.title}
          content={userModal.content}
          onClick={closeModal}
        />
      )}
    </Fragment>
  );
};

export default UsersList;
