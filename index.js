const contacts = require("./contacts");

// const { Command } = require("commander");
// const program = new Command();
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

// TODO: рефакторить

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      return console.table(listContacts);
      break;

    case "get":
      const getContact = await contacts.getContactById(id);
      return console.log(getContact);
      break;

    case "add":
      const addContact = await contacts.addContact({ name, email, phone });
      return console.log(addContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction({
  action: "remove",
  id: "qdggE76Jtbfd9eWJHrssH",
}); //!

// invokeAction(argv);