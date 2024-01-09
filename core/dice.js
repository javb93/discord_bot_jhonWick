const Dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  },
  actionRoll: function (dice_number) {
    const messages = {
      1: "Failure",
      2: "Normal Success",
      3: "Great Success",
      4: "Extreme Success",
      5: "You are Jhon Wick",
      6: "Just Wow",
    };
    var freq = [];
    var roll;
    for (var i = 0; i < dice_number; i++) {
      roll = this.roll();
      if (freq[roll] === undefined) {
        freq[roll] = 1;
      } else {
        freq[roll]++;
      }
    }
    freq.sort();
    freq.reverse();
    let result_rolls = "";
    for (let key in freq) {
      if (freq[key] > 0) {
        result_rolls += "Key " + key + " is a  " + messages[freq[key]] + "\n";
      }
    }

    return result_rolls;
  },
};
module.exports = { Dice };
