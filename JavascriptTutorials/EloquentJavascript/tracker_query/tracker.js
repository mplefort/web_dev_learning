const fs = require("fs");

function formatDuration(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

fs.readFile(
  "./JavascriptTutorials/EloquentJavascript/tracker_query/productiondata_test.json",
  "utf8",
  (error, data) => {
    if (error) {
      console.error("Error:", error);
      return;
    }

    const jsonData = JSON.parse(data);
    // Create an object to store the total durations
    const camper_duration = [
      // {
      //   camper_number: "20230502",
      //   employeeID: 311044,
      //   parts: [
      //     {
      //       part: "Main Cab",
      //       total_duration: null,
      //       durations: [
      //         {
      //           start: new Date("2023-02-02T15:31:25.000Z"),
      //           end: new Date("2023-02-02T15:31:45.000Z"),
      //         },
      //         {
      //           start: new Date("2023-02-02T15:31:25.000Z"),
      //           end: new Date("2023-02-02T15:31:45.000Z"),
      //         },
      //       ],
      //     },
      //   ],
      // },
    ];

    // Iterate over the data
    for (const item of jsonData) {
      const { camper_number, employeeID, part_name, status, time, isvisible } =
        item;
      if (!isvisible) {
        continue;
      }
      // add new camper number if needed
      if (
        !camper_duration.some(
          (number) => number.camper_number === camper_number
        )
      ) {
        camper_duration.push({
          camper_number: camper_number,
          parts: [],
        });
      }

      // add new part object to camper
      const camper = camper_duration.find(
        (camper) => camper.camper_number === camper_number
      );
      let part = camper.parts.find((part) => part.part === part_name);
      if (!part) {
        camper.parts.push({
          part: part_name,
          employeeID: employeeID,
          total_duration: 0,
          durations: [{}],
        });
        part = camper.parts.find((part) => part.part === part_name);
      }

      if (status === "START" || status === "RESUME" || status === "CONTINUE") {
        // Store the start time
        part.durations.push({
          start: new Date(time),
        });
      } else if (
        status === "PAUSE" ||
        status === "STOP" ||
        status === "COMPLETE"
      ) {
        part.durations[part.durations.length - 1].end = new Date(time);

        // Confirm start and stop exists
        // // Calculate the duration
        // const endTime = new Date(time);
        // const duration = endTime - item.startTime;

        // // Update the total duration for the specific camper_number and work_part
        // const key = `${camper_number}-${work_part}`;
        // if (!totalDurations[key]) {
        //   totalDurations[key] = 0;
        // }
        // totalDurations[key] += duration;

        // // Reset the start time
        // delete item.startTime;
      }
    }

    // Iterate over camper_duration to sum all part times:
    // camper_duration
    for (camper of camper_duration) {
      camper.total_duration = 0;
      for (part of camper.parts) {
        for (duration of part.durations) {
          if (duration.end && duration.start) {
            part.total_duration += duration.end - duration.start;
          }
        }
        camper.total_duration += part.total_duration;
        part.total_duration = formatDuration(part.total_duration);
      }
      camper.total_duration = formatDuration(camper.total_duration);
    }
    console.log(camper_duration);
  }
);
