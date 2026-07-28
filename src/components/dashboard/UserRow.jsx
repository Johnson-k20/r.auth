function UserRow({ user }) {
  return (
    <tr>
      <td className="px-6 py-4">{user.firstName}</td>
      <td className="px-6 py-4">{user.lastName}</td>
      <td className="px-6 py-4">{user.username}</td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.phone}</td>
      <td className="px-6 py-4">{user.dob}</td>
      <td className="px-6 py-4">{user.gender}</td>
      <td className="px-6 py-4">{user.createdAt}</td>
    </tr>
  );
}

export default UserRow;