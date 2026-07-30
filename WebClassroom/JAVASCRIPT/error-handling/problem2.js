const users = [
  { id: 1, name: "Manoj" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Priya" },
];

const getUser = (id) => {
  try {
    let user = users.find((u) => u.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    console.log(`User with id: ${id}, found: ${user.name}`);
  } catch (err) {
    console.log(err.message);
  }
};

getUser(2);
getUser(5);
