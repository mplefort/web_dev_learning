const fs = require("fs");

fs.readFile("./tracker_query/test.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Error:", error);
    return;
  }

  const jsonData = JSON.parse(data);
  // Create an object to store the total durations
  const camper_duration = [
    {
      camper_number: "20230502",
      employeeID: 311044,
      parts: {
        part: "Main Cab",
        total_duration: null,
        durations: [
          {
            start: new Date("2023-02-02T15:31:25.000Z"),
            end: new Date("2023-02-02T15:31:45.000Z"),
          },
          {
            start: new Date("2023-02-02T15:31:25.000Z"),
            end: new Date("2023-02-02T15:31:45.000Z"),
          },
        ],
      },
    },
  ];

  // Iterate over the data
  for (const item of jsonData) {
    const { camper_number, employeeID, work_part, status, time } = item;
    if (
      !camper_duration.some((number) => number.camper_number === camper_number)
    ) {
      camper_duration.push({
        camper_number: camper_number,
        employeeID: employeeID,
      });
    }

    if (
      camper_duration.some((obj) => {
        obj.camper_number === "20230502" &&
          obj.parts.some((part) => part.part === "Main Cab");
      })
    ) {
      console.log(obj);
    }

    if (status === "START" || status === "RESUME" || status === "CONTINUE") {
      // Store the start time
      item.startTime = new Date(time);
    } else if (
      status === "PAUSE" ||
      status === "STOP" ||
      status === "COMPLETE"
    ) {
      if (!item.startTime) {
        // Skip if there is no corresponding start time
        continue;
      }

      // Calculate the duration
      const endTime = new Date(time);
      const duration = endTime - item.startTime;

      // Update the total duration for the specific camper_number and work_part
      const key = `${camper_number}-${work_part}`;
      if (!totalDurations[key]) {
        totalDurations[key] = 0;
      }
      totalDurations[key] += duration;

      // Reset the start time
      delete item.startTime;
    }
  }

  console.log(totalDurations);
});
