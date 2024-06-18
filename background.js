chrome.alarms.onAlarm.addListener(() => {
  chrome.notifications.create(
    {
      type: "basic",
      iconUrl: chrome.runtime.getURL("undraw_refreshing_beverage_td3r.png"),
      title: "Stay Hydrated!",
      message: "Have a sip of water, Human!",
    },
    () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      }
    }
  );
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.time) {
    createAlarm();
  }
});

function createAlarm() {
  chrome.alarms.create("drink_water", {
    delayInMinutes: 5,
    periodInMinutes: 5,
  });
}
