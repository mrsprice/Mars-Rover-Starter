const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function () {
  it("throws error if name is NOT passed into constructor as the first parameter", function () {
    expect(function () {
      new Message();
    }).toThrow(new Error("Name required."));
  });
  it("constructor sets name", () => {
    const name = "someName";
    const commands = "somecommands";

    const message = new Message(name, commands);
    expect(message.name).toBe(name);
  });
  it("contains a commands array passed into the constructor as the 2nd argument", () => {
    const name = "someName";
    const commands = "somecommands";

    const message = new Message(name, commands);
    expect(message.commands).toBe(commands);
  });
});
