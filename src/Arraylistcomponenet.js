function Arraylistcomponenet() {
  const students = [
    { name: "abhi", email: "abhi@gmail", mobile: 909090 },
    { name: "abhi", email: "abhi@gmail", mobile: 909090 },
    { name: "abhi", email: "abhi@gmail", mobile: 909090 },
  ];

  return (
    <div>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
        </tr>
        {students.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Arraylistcomponenet;
