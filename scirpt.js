// According to: https://sleepopolis.com/calculators/sleep-debt-calculator/

const allLabels = document.querySelectorAll(".container div > label");
const allInputs = document.querySelectorAll(".container div > input");

function calculateSleep() {
  let userTotalSleep = 0;
  let userSleepDebt;
  const h2TotalSleep = document.getElementById("usersleep");
  const h2SleepDebt = document.getElementById("sleepdebt");
  const paraEl = document.getElementById("para");
  const text1 = "Hours of Sleep You Got This Week: ";
  const text2 = "Amount of Sleep Debt You've Accumulated: ";
  const paraText1 =
    "Look out! You’ve built up a bit of sleep debt, but there’s no need to worry. We all have off days and off weeks – that’s just life. While there’s no magic fix, turn your focus to upping your sleeptime to a minum of 7 hours each night. If falling asleep is a struggle, you’re not alone. Consider trying melatonin-rich snacks, meditation, or reading before bed. If hacks and tips aren’t your thing, catch up with your doctor!";
  const paraText2 =
    "We’ve all done it. Maybe you had a fun night with friends and lost track of time, were up late with a sick child, or even hitting the books. Whatever the cause may be, there’s no reason to fuss. Rather than stressing out about your lost sleep, make getting those 7-8 hours in a priority this week. If you’re still not feeling energized after a full night’s sleep, try some sleepytime tea, meditating, or even keeping devices away from the bedroom. If this doesn’t suit you, contact your doctor for additional solutions!";
  const paraText3 =
    "Congratulations! You’ve got the right idea. You are getting plenty of sleep each night. If you don’t feel you’re reaping the benefits, take a look at life factors such as schedule, work, medications, sleep disorders, or electronic use. You could even benefit from a new sheet set or a new mattress!";

  allInputs.forEach((item) => {
    const num = Number(item.value);
    userTotalSleep += num;
  });

  h2TotalSleep.innerText = text1 + userTotalSleep;

  if (userTotalSleep < 49) {
    userSleepDebt = 49 - userTotalSleep;
    h2SleepDebt.innerText = text2 + userSleepDebt;
  } else {
    h2SleepDebt.innerText = "";
  }

  if (userTotalSleep < 44) {
    paraEl.innerText = paraText1;
  } else if (userTotalSleep > 46 && userTotalSleep <= 48) {
    paraEl.innerText = paraText2;
  } else if (userTotalSleep > 48) {
    paraEl.innerText = paraText3;
  } else {
    paraEl.innerText = "";
  }
}

setInterval(() => {
  allLabels.forEach((item, index) => {
    item.innerText = allInputs[index].value + " hours";
  });
}, 0);
