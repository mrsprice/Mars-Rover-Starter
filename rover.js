// Assuming the initial code for Command and Message classes remains the same

class Rover {
  constructor(position, mode = "NORMAL") {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
    const response = {
      message: message.name,
      results: [],
    };

    message.commands.forEach((command) => {
      switch (command.commandType) {
        case "MODE_CHANGE":
          this.handleModeChange(command.value);
          response.results.push({ completed: true });
          break;
        case "STATUS_CHECK":
          response.results.push(this.getStatusCheckResult());
          break;
        case "MOVE":
          this.handleMove(command.value);
          response.results.push({ completed: true });
          break;
        default:
          response.results.push({
            completed: false,
            error: "Unknown command type",
          });
      }
    });

    return response;
  }

  handleModeChange(newMode) {
    this.mode = newMode;
  }

  getStatusCheckResult() {
    return {
      completed: true,
      roverStatus: {
        mode: this.mode,
        generatorWatts: this.generatorWatts,
        position: this.position,
      },
    };
  }

  handleMove(newPosition) {
    if (this.mode === "LOW_POWER") {
      // In LOW_POWER mode, movement is allowed but position should not change
      return { completed: true, error: "Cannot move in LOW_POWER mode" };
    }

    this.position = newPosition;
    return { completed: true };
  }
}

module.exports = Rover;
